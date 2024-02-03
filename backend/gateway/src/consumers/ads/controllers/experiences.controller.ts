import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { AdDto } from '@dto/ads.dto';
import { AdsService } from '../ads.service';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';
import { NatsSubjects } from '@app/nats/nats.enum';

@Controller('experiences')
export class ExperiencesController {
  logger = new Logger(ExperiencesController.name);
  constructor(private readonly appService: AdsService) {}
  @Post('/')
  @Roles({
    roles: ['realm:app-user'],
  })
  async CreateExperienceRequest(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: AdDto,
  ): Promise<Response> {
    message.userId = user.sub;
    const requestType: Request = {
      requestId: uuidv4(),
      createExperienceRequest: {
        ad: message,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.EXPERIENCE_CREATE,
    );
  }

  @Get('/all')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getAllExperiences(
    @AuthenticatedUser()
    user: any,
  ): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getExperiencesRequest: {
        id: user.sub,
      },
    };

    return this.appService.performRequest(
      requestType,
      NatsSubjects.EXPERIENCE_FIND,
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
      updateExperienceRequest: {
        id: user.sub,
        ad: message,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.EXPERIENCE_UPDATE,
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
    const requestType: Request = {
      requestId: uuidv4(),
      deleteExperienceRequest: {
        id: user.sub,
        experienceId: message.experience_id,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.EXPERIENCE_REMOVE,
    );
  }
}
