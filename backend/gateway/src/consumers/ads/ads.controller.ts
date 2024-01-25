import { Ad } from '@proto/ad';
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '@services/ads/ads.service';
import { Public, Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('ad')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  @Public()
  postAd(@Body() data: Ad): Promise<any> {
    return this.appService.postAd(data);
  }
}
