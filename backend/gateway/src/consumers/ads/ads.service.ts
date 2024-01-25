import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Writer } from 'protobufjs';
import { Ad } from '@proto/ad';
import { DataBuffer } from 'nats/lib/nats-base-client/databuffer';

@Injectable()
export class AppService {
  constructor(@Inject('GATEWAY_SERVICE') private client: ClientProxy) {}
  logger = new Logger(AppService.name);

  async postAd(data: Ad): Promise<any> {
    const writer = new Writer();
    const adWriter = Ad.encode(data, writer).finish();
    this.logger.log(`Received data: ${adWriter}`);

    const decodedData = Ad.decode(adWriter);
    this.logger.log(`Received data: ${JSON.stringify(decodedData)}`);
    const obs = this.client.send('ads.post', adWriter);
    const result = await lastValueFrom(obs);
    return result;
  }
}
