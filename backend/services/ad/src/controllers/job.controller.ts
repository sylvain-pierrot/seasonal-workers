import { Controller, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NatsService } from '@app/nats/nats.service';
import { NatsError, ServiceMsg } from 'nats';
import { ExperienceService } from '@app/services/experiences.service';
import { Request } from '@proto/Request';
import { NatsEndpoint, returnResponseError } from '@app/utils/utils';
import { JobService } from '@app/services/job.service';

@Controller()
export class JobsController implements OnApplicationBootstrap {
  private logger = new Logger(JobsController.name);
  constructor(
    private natsService: NatsService,
    private jobService: JobService,
  ) {}

  async onApplicationBootstrap() {
    await this.handleCreateJobOffer();
    await this.handleGetJobOffersRecommandation();
    await this.handleGetJobOffer();
    await this.handleApplyToJobOffer();
    await this.handleGetJobOffersStatus();
  }
  async handleCreateJobOffer(): Promise<void> {
    this.natsService.job.addEndpoint(
      NatsEndpoint.CREATE,
      async (error: NatsError, request: ServiceMsg) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const encodedResponse =
            await this.jobService.CreateJobOffer(decodedRequest);
          request.respond(encodedResponse);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(
            decoded.requestId,
            e,
            e.status,
          );
          request.respond(encodedError);
        }
      },
    );
  }
  async handleGetJobOffersRecommandation(): Promise<void> {
    this.natsService.job.addEndpoint(
      NatsEndpoint.RECOMMANDATION,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.jobService.getJobOffersRecommandation(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }
  async handleGetJobOffer(): Promise<void> {
    this.natsService.job.addEndpoint(
      NatsEndpoint.FIND_ONE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response = await this.jobService.getJobOffer(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }
  async handleApplyToJobOffer(): Promise<void> {
    this.natsService.job.addEndpoint(
      NatsEndpoint.APPLY,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.jobService.applyToJobOffer(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }
  async handleGetJobOffersStatus(): Promise<void> {
    this.natsService.job.addEndpoint(
      NatsEndpoint.STATUS,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.jobService.getJobOfferStatus(decodedRequest);
          return request.respond(response);
        } catch (e) {
          this.logger.error(e);
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }
}
