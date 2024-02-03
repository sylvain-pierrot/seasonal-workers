import { Controller, Get, Logger } from '@nestjs/common';
import { Roles } from 'nest-keycloak-connect';
import { NatsSubjects, AdsService } from '../ads.service';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';

@Controller('jobs')
export class JobsController {
  logger = new Logger(JobsController.name);
  constructor(private readonly appService: AdsService) {}

  @Get('/categories')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getJobCategories(): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getJobCategoriesRequest: {},
    };
    return this.appService.performRequest(
      requestType,
      NatsSubjects.JOB_GET_CATEGORIES,
    );
  }
}
