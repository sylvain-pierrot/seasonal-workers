import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AdService {
  private logger = new Logger(AdService.name);

  constructor(@Inject('ADS_SERVICE') private client: ClientProxy) {}

  getAd(data: any): any {
    const ad = [{ data: data }];
    return ad;
  }
}
