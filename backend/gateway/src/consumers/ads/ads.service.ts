import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Ad } from '@proto/ad';
import { DataBuffer } from 'nats/lib/nats-base-client/databuffer';

@Injectable()
export class AppService {
  constructor(@Inject('GATEWAY_SERVICE') private client: ClientProxy) {}
  logger = new Logger(AppService.name);

  async postAd(message: Ad): Promise<Ad> {
    try {
      const payload = Ad.encode(message).finish();
      this.logger.log(`\n------------------\n${payload}\n------------------\n`);
      const result = Ad.decode(payload);
      return result;
    } catch (error) {
      this.logger.error(error);
    }
    // this.logger.log(`Received data: ${JSON.stringify(decodedData)}`);
    // const obs = this.client.send('ads.post', adWriter);
    // const result = await lastValueFrom(obs);
  }
}
