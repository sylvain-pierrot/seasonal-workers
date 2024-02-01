import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'nest-keycloak-connect';
import { AdDto } from '@services/ads/ads.dto';
import { AdsService } from '../ads.service';

@Controller('ads')
export class AvailabilityController {
  constructor(private readonly appService: AdsService) {}
  @Post('/availability')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  @Public()
  post(@Body() message: AdDto): any {
    console.log(message);
  }
}
