import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class JobCategoriesService {
  private logger = new Logger(JobCategoriesService.name);

  constructor() {}

  getAd(data: any): any {
    const ad = [{ data: data }];
    return ad;
  }
}
