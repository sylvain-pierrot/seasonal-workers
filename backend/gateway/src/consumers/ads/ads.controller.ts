import { Ad } from '@proto/ad';
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '@services/ads/ads.service';
import { Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('ad')
  @Roles({
    roles: ['realm:app-user'],
  })
  getAd(@Body() data: any): Promise<any> {
    return this.appService.getAd(data);
  }
}
