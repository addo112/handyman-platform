"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Image as ImageIcon, Camera, ArrowLeft, Loader2, Wrench } from "lucide-react";
import Link from "next/link";
import { MOCK_PROFESSIONALS } from "@/lib/data/mock";

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
  isActionable?: boolean;
};

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Hi! I'm your Handyman AI Assistant. Describe the issue you're having, and I'll help diagnose the problem, estimate the cost, and find the perfect professional for you.",
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "ai",
        content: "Hi! I'm your Handyman AI Assistant. Describe the issue you're having, and I'll help diagnose the problem, estimate the cost, and find the perfect professional for you.",
      }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Mock AI Response Logic
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerInput = userMessage.content.toLowerCase();
      let aiResponse = "";
      let isActionable = false;

      if (lowerInput.includes("leak") || lowerInput.includes("water") || lowerInput.includes("sink")) {
        aiResponse = "It sounds like you have a plumbing issue, likely a loose connection or a worn-out seal under the sink. This is an urgent issue that could cause water damage. I estimate it will take about 1-2 hours to fix, costing between $80 - $150. Would you like me to match you with a top-rated plumber nearby?";
        isActionable = true;
      } else if (lowerInput.includes("light") || lowerInput.includes("power") || lowerInput.includes("electrical")) {
        aiResponse = "That sounds like an electrical fault. It could be a tripped breaker, a faulty switch, or damaged wiring. For safety, this requires a certified electrician. Estimated cost is around $120 - $250. Shall I find an electrician for you?";
        isActionable = true;
      } else {
        aiResponse = "I understand. Could you provide a bit more detail? For example, when did you first notice the issue, or is there any strange sound/smell? You can also upload a photo so I can analyze it visually!";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: aiResponse,
        isActionable
      }]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col pt-16">
      
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 py-4 px-6 flex items-center justify-between sticky top-16 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/homeowner" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-slate-900 dark:text-white leading-tight">AI Diagnostic Assistant</h1>
              <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={handleClearChat}
          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors hidden sm:block"
        >
          Clear Chat
        </button>
      </header>

      {/* Chat Container */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="text-center my-6">
            <span className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Today
            </span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              
              {/* Avatar */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-primary-100 dark:bg-primary-900/30'}`}>
                {msg.role === 'user' ? (
                  <User className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                )}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className={`px-5 py-3.5 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-sm' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-sm'
                }`}>
                  <p className="leading-relaxed text-[15px]">{msg.content}</p>
                </div>
                
                {/* Actionable Recommendations (e.g. Booking) */}
                {msg.isActionable && (
                  <div className="mt-3 bg-white dark:bg-slate-800 border-2 border-primary-500 rounded-2xl p-4 shadow-md w-full max-w-sm animate-in fade-in slide-in-from-top-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary-500" /> Recommended Professional
                    </h4>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={MOCK_PROFESSIONALS[0].avatarUrl} alt="Pro" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">{MOCK_PROFESSIONALS[0].name}</p>
                        <p className="text-xs text-slate-500">⭐ {MOCK_PROFESSIONALS[0].rating} • {MOCK_PROFESSIONALS[0].distance}km away</p>
                      </div>
                    </div>
                    <Link href={`/book/${MOCK_PROFESSIONALS[0].id}`}>
                      <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-lg text-sm transition-colors">
                        Book Now
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-4 fixed bottom-0 w-full z-20">
        <div className="max-w-3xl mx-auto relative flex items-end gap-2">
          
          <div className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-end overflow-hidden focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-shadow p-1">
            <div className="flex flex-col gap-1 px-2 pb-1">
              <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-colors">
                <ImageIcon className="w-5 h-5" />
              </button>
            </div>
            
            <textarea 
              rows={1}
              className="flex-1 bg-transparent border-none outline-none resize-none py-4 px-2 text-slate-900 dark:text-white max-h-32"
              placeholder="Describe your issue or ask for help..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = `${Math.min(e.target.scrollHeight, 128)}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </div>

          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="w-14 h-14 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-lg shadow-primary-500/30 disabled:shadow-none"
          >
            {isTyping ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6 ml-1" />}
          </button>
        </div>
      </div>

    </div>
  );
}
