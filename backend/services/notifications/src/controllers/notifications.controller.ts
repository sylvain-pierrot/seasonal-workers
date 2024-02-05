import { Controller, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NatsService } from '@nats/nats.service';
import { NatsError, ServiceMsg } from 'nats';
import { NatsEndpoint } from '@nats/nats.enum';
import { NotificationService } from '@app/services/notifications.service';
import { Request } from '@app/proto_generated/Request';
import { NatsResponse } from '@app/utils/response';
@Controller()
export class NotificationsController implements OnApplicationBootstrap {
  private logger = new Logger(NotificationsController.name);
  constructor(
    private natsService: NatsService,
    private notificationService: NotificationService,
  ) {}

  async onApplicationBootstrap() {
    await this.handleGetNotifications();
    await this.handleCreateNotification();
  }
  async handleGetNotifications(): Promise<void> {
    this.natsService.notificationsJobs.addEndpoint(
      NatsEndpoint.GET,
      async (error: NatsError, request: ServiceMsg) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const encodedResponse =
            await this.notificationService.getNotifications(decodedRequest);
          request.respond(encodedResponse);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = NatsResponse.error(
            decoded.requestId,
            e,
            e.status,
          );
          request.respond(encodedError);
        }
      },
    );
  }
  async handleCreateNotification(): Promise<void> {
    this.natsService.notificationsJobs.addEndpoint(
      NatsEndpoint.CREATE,
      async (error: NatsError, request: ServiceMsg) => {
        try {
          const decodedRequest = Request.decode(request.data);
          const encodedResponse =
            await this.notificationService.createNotification(decodedRequest);
          request.respond(encodedResponse);
        } catch (e) {
          const decoded = Request.decode(request.data);
          const encodedError = NatsResponse.error(
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
