import { Controller, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NatsService } from '@nats/nats.service';
import { NatsError, ServiceMsg } from 'nats';
import { ExperienceService } from '@services/experiences.service';
import { Request } from '@proto/Request';
import { NatsEndpoint } from '@nats/nats.enum';
import { NatsResponse } from '@utils/response';

@Controller()
export class ExperiencesController implements OnApplicationBootstrap {
  private logger = new Logger(ExperiencesController.name);
  constructor(
    private natsService: NatsService,
    private experienceService: ExperienceService,
  ) {}

  async onApplicationBootstrap() {
    await this.handleCreateExperience();
    await this.handleGetExperiences();
    await this.handleUpdateExperience();
    await this.handleDeleteExperience();
  }

  async handleCreateExperience(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsEndpoint.CREATE,
      async (error: NatsError, request: ServiceMsg) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const encodedResponse =
            await this.experienceService.CreateExperience(decodedRequest);
          request.respond(encodedResponse);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = NatsResponse.error(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleGetExperiences(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsEndpoint.FIND,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.experienceService.getAllExperiences(decodedRequest);
          return request.respond(response);
        } catch (e) {
          this.logger.error(`Error GET experiences: ${e}`);
          const decoded = Request.decode(request.data);
          const encodedError = NatsResponse.error(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleUpdateExperience(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsEndpoint.UPDATE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.experienceService.updateExperience(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = NatsResponse.error(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleDeleteExperience(): Promise<void> {
    this.natsService.experience.addEndpoint(
      NatsEndpoint.REMOVE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.experienceService.deleteExperience(decodedRequest);
          return request.respond(response);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = NatsResponse.error(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }
}
