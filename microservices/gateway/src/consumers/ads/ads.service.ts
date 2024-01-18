import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('GATEWAY_SERVICE') private client: ClientProxy) {}

  async getAd(data: any): Promise<any> {
    const test = data.toObject();
    console.log(test);
    const obs = this.client.send('ads.get', data);
    const result = await lastValueFrom(obs);
    return result;
  }
}
