import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AiService {
  private genAI: GoogleGenerativeAI;
  
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'MOCK_KEY');
  }

  async diagnoseIssue(prompt: string) {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MOCK_KEY') {
       return {
         diagnosis: "Based on your description, this appears to be a common plumbing issue, possibly a worn-out seal or loose connection. Immediate attention is recommended to prevent water damage.",
         estimatedCost: "$80 - $150",
         estimatedTime: "1-2 hours",
         recommendedCategory: "Plumber",
         isMock: true
       };
    }
    
    try {
      const model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const systemPrompt = `You are an expert AI handyman diagnostic assistant. Given a user's description of a home repair issue, diagnose the problem, estimate the cost in USD, estimate the time required, and recommend the best professional category to fix it. Return ONLY JSON format like this: {"diagnosis": "...", "estimatedCost": "$...", "estimatedTime": "...", "recommendedCategory": "..."}`;
      
      const result = await model.generateContent(`${systemPrompt}\nUser Issue: ${prompt}`);
      const responseText = result.response.text();
      
      try {
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return JSON.parse(responseText);
      } catch (e) {
        return { error: "Failed to parse AI response as JSON", raw: responseText };
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      return { error: "Failed to connect to AI service." };
    }
  }
}
