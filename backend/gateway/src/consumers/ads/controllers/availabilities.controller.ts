import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { AdDto } from '@dto/ads.dto';
import { AdsService } from '../ads.service';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';
import { NatsSubjects } from '@app/nats/nats.enum';

@Controller('availabilities')
export class AvailabilityController {
  constructor(private readonly appService: AdsService) {}
  @Post('/')
  @Roles({
    roles: ['realm:app-user'],
  })
  async CreateAvailabilityRequest(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: AdDto,
  ): Promise<Response> {
    message.userId = user.sub;
    const requestType: Request = {
      requestId: uuidv4(),
      createAvailabilityRequest: {
        availability: message,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.AVAILABILITY_CREATE,
    );
  }

  @Get('/all')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getAvailabilities(
    @AuthenticatedUser()
    user: any,
  ): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getAvailabilitiesRequest: {
        id: user.sub,
      },
    };

    return this.appService.performRequest(
      requestType,
      NatsSubjects.AVAILABILITY_FIND,
    );
  }

  @Put('/update')
  @Roles({
    roles: ['realm:app-user'],
  })
  async updateExperience(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: AdDto,
  ): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      updateAvailabilityRequest: {
        id: user.sub,
        availability: message,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.AVAILABILITY_UPDATE,
    );
  }

  @Delete('/remove')
  @Roles({
    roles: ['realm:app-user'],
  })
  async deleteExperience(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: any,
  ): Promise<Response> {
    this.appService.logger.error(JSON.stringify(message));
    const requestType: Request = {
      requestId: uuidv4(),
      deleteAvailabilityRequest: {
        id: user.sub,
        availabilityId: message.availability_id,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.AVAILABILITY_REMOVE,
    );
  }
}
