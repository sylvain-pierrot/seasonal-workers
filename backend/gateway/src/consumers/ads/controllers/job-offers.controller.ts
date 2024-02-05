import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { AdDto } from '@dto/ads.dto';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';
import { JobStatusDto } from '../dto/job-status.dto';
import { NatsSubjects } from '@app/nats/nats.enum';
import { NatsService } from '@app/nats/nats.service';

@Controller('ads/job-offers')
export class JobOffersController {
  logger = new Logger(JobOffersController.name);
  constructor(private readonly natsServices: NatsService) {}
  @Post('/')
  @Roles({
    roles: ['realm:app-user'], // remove and add recruter role
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
    return this.natsServices.performRequest(
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

    return this.natsServices.performRequest(
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

    return this.natsServices.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_FIND_ONE,
    );
  }

  @Post('/apply')
  @Roles({
    roles: ['realm:app-user'],
  })
  async applyJobOffer(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: JobStatusDto,
  ) {
    const requestType: Request = {
      requestId: uuidv4(),
      applyJobOfferRequest: {
        offerId: message.offerId,
        workerId: user.sub,
      },
    };
    return this.natsServices.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_APPLY,
    );
  }

  @Post('/validation')
  @Roles({
    roles: ['realm:app-user'], // remove and add recruter role
  })
  async respondeJobOffer(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: JobStatusDto,
  ) {
    const requestType: Request = {
      requestId: uuidv4(),
      updateJobOfferStatusRequest: {
        offerId: message.offerId,
        workerId: user.sub,
        status: message.status,
      },
    };
    return this.natsServices.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_VALIDATION,
    );
  }

  @Get('/apply/status')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getAllJobsStatus(
    @AuthenticatedUser()
    user: any,
  ): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getJobOffersStatusRequest: {
        workerId: user.sub,
      },
    };
    return this.natsServices.performRequest(
      requestType,
      NatsSubjects.JOB_OFFERS_GET_STATUS,
    );
  }
}
