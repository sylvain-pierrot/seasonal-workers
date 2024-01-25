// ad.controller.ts
import { Body, Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AdService } from '@services/ads.service';
import { Ad } from 'proto_generated/ad';
import { Reader } from 'protobufjs';
@Controller()
export class AdController {
  private logger = new Logger(AdController.name);
  constructor(private readonly adService: AdService) {}

  @MessagePattern('ads.post')
  postAd(
    @Payload() data: Uint8Array,
    @Ctx() context: NatsContext,
    @Body() body: any,
  ): any {
    this.logger.log(`Received data: ${data}`);
    // all the data received from the client

    if (data) {
      // Handle the decoded data
    } else {
      this.logger.error('Received null or undefined data.');
    }
    // this.logger.log(`Received data: ${JSON.stringify(decodedData)}`);
    // this.logger.log(`Received data: ${datadecoded}`);
    // return this.adService.getAd(data);
  }
}
