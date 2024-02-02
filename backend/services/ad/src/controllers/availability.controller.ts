import { Controller, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NatsService } from '@app/nats/nats.service';
import { NatsError, ServiceMsg } from 'nats';
import { AvailabilityService } from '@app/services/availability.service';
import { Request } from '@proto/Request';
import { NatsEndpoint, returnResponseError } from '@app/utils/utils';

@Controller()
export class AvailabilitiesController implements OnApplicationBootstrap {
  private logger = new Logger(AvailabilitiesController.name);
  constructor(
    private natsService: NatsService,
    private availabilityService: AvailabilityService,
  ) {}

  async onApplicationBootstrap() {
    await this.handleCreateAvailability();
    await this.handleGetAvailabilities();
    await this.handleUpdateAvailabilitiy();
    await this.handleDeleteAvailabilitiy();
  }

  async handleCreateAvailability(): Promise<void> {
    this.natsService.availability.addEndpoint(
      NatsEndpoint.CREATE,
      async (error: NatsError, request: ServiceMsg) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const encodedResponse =
            await this.availabilityService.CreateAvailability(decodedRequest);
          request.respond(encodedResponse);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = returnResponseError(decoded.requestId, e);
          request.respond(encodedError);
        }
      },
    );
  }

  async handleGetAvailabilities(): Promise<void> {
    this.natsService.availability.addEndpoint(
      NatsEndpoint.FIND,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.availabilityService.getAvailabilities(decodedRequest);
          return request.respond(response);
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

  async handleUpdateAvailabilitiy(): Promise<void> {
    this.natsService.availability.addEndpoint(
      NatsEndpoint.UPDATE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.availabilityService.updateAvailability(decodedRequest);
          return request.respond(response);
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

  async handleDeleteAvailabilitiy(): Promise<void> {
    this.natsService.availability.addEndpoint(
      NatsEndpoint.REMOVE,
      async (error, request: any) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const response =
            await this.availabilityService.deleteAvailability(decodedRequest);
          return request.respond(response);
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
}
