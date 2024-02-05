import { Controller, Get, Logger } from '@nestjs/common';
import { Roles } from 'nest-keycloak-connect';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';
import { NatsSubjects } from '@app/nats/nats.enum';
import { NatsService } from '@app/nats/nats.service';

@Controller('ads/jobs')
export class JobsController {
  logger = new Logger(JobsController.name);
  constructor(private readonly natsService: NatsService) {}

  @Get('/categories')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getJobCategories(): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getJobCategoriesRequest: {},
    };
    return this.natsService.performRequest(
      requestType,
      NatsSubjects.JOB_GET_CATEGORIES,
    );
  }
}
