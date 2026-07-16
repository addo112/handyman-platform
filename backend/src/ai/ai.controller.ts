import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('diagnose')
  async diagnose(@Body('issue') issue: string) {
    return this.aiService.diagnoseIssue(issue);
  }
}
