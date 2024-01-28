import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '@services/ads/ads.service';
import { Public } from 'nest-keycloak-connect';
import { AdDto } from './ads.dto';
import { Ad } from '@app/proto_generated/ad';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('ad')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  @Public()
  postAd(@Body() message: AdDto): Promise<Ad> {
    return this.appService.postAd(message, 'ADS.post');
  }
}
