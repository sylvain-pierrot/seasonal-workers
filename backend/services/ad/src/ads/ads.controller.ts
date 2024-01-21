// ad.controller.ts
import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AdService } from './ads.service';

@Controller()
export class AdController {
  private logger = new Logger(AdController.name);
  constructor(private readonly adService: AdService) {}

  @MessagePattern('ads.get')
  getAd(@Payload() data: any[], @Ctx() context: NatsContext) {
    this.logger.log(`Received data: ${data}`);
    return this.adService.getAd(data);
  }
}
