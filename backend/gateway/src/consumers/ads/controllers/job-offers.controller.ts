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
import { AdDto } from '@services/ads/ads.dto';
import { NatsSubjects, AdsService } from '../ads.service';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';

@Controller('job-offers')
export class JobOffersController {
  logger = new Logger(JobOffersController.name);
  constructor(private readonly appService: AdsService) {}
  @Post('/')
  @Roles({
    roles: ['realm:app-user'], // add recruter role
  })
  async CreateJobOffers(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: AdDto,
  ): Promise<Response> {
    message.userId = user.sub;
    const requestType: Request = {
      requestId: uuidv4(),
      createJobOfferRequest: {
        jobOffer: message,
      },
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_CREATE,
    );
  }

  @Get('/recommendation')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getRecommendationJobs(
    @AuthenticatedUser()
    user: any,
  ): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getJobOffersRecommendationRequest: {
        userId: user.sub,
      },
    };

    return this.appService.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_RECOMMENDATION,
    );
  }

  @Get('/job')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getJobById(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: any,
  ): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getJobOfferRequest: {
        offerId: message.job_id,
      },
    };

    return this.appService.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_RECOMMENDATION,
    );
  }
  // @Put('/update')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  // async updateExperience(
  //   @AuthenticatedUser()
  //   user: any,
  //   @Body()
  //   message: AdDto,
  // ): Promise<Response> {
  //   const requestType: Request = {
  //     requestId: uuidv4(),
  //     updateExperienceRequest: {
  //       id: user.sub,
  //       ad: message,
  //     },
  //   };
  //   return this.appService.performRequest(
  //     requestType,
  //     NatsSubjects.EXPERIENCE_UPDATE,
  //   );
  // }

  // @Delete('/remove')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  // async deleteExperience(
  //   @AuthenticatedUser()
  //   user: any,
  //   @Body()
  //   message: any,
  // ): Promise<Response> {
  //   const requestType: Request = {
  //     requestId: uuidv4(),
  //     deleteExperienceRequest: {
  //       id: user.sub,
  //       experienceId: message.experience_id,
  //     },
  //   };
  //   return this.appService.performRequest(
  //     requestType,
  //     NatsSubjects.EXPERIENCE_REMOVE,
  //   );
  // }
}
