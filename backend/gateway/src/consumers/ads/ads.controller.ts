import { Ad } from '@proto/ad';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from '@services/ads/ads.service';
import { Public, Roles } from 'nest-keycloak-connect';
import { AdDto } from '@app/dto/ad';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('ad')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  @Public()
  postAd(
    @Body(
      new ValidationPipe({
        transform: true,
        enableDebugMessages: true,
        skipMissingProperties: false,
        skipUndefinedProperties: false,
        stopAtFirstError: true,
      }),
    )
    message: AdDto,
  ): Promise<any> {
    return this.appService.postAd(message);
  }
}
