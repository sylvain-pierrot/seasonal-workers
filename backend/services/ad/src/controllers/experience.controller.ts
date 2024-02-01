import { Controller, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NatsService } from '@app/nats/nats.service';
import { NatsError, ServiceMsg } from 'nats';
import { AdService } from '@app/services/ads.service';
import { Request } from '@proto/Request';
import { NatsMethodRequested, returnResponseError } from '@app/utils/utils';

@Controller()
export class ExperiencesController implements OnApplicationBootstrap {
  private logger = new Logger(ExperiencesController.name);
  constructor(
    private natsService: NatsService,
    private adsService: AdService,
  ) {}

  async onApplicationBootstrap() {
    await this.handleCreateExperience();
    await this.handleGetExperiences();
  }

  async handleCreateExperience(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsMethodRequested.CREATE,
      async (error: NatsError, request: ServiceMsg) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const encodedResponse =
            await this.adsService.CreateExperience(decodedRequest);
          request.respond(encodedResponse);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleGetExperiences(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsMethodRequested.FIND,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.adsService.getAllExperiences(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleGetExperienceById(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsMethodRequested.FIND_ONE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.adsService.getExperienceById(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleUpdateExperience(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsMethodRequested.UPDATE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.adsService.updateExperience(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleDeleteExperience(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsMethodRequested.REMOVE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.adsService.deleteExperience(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }
}
