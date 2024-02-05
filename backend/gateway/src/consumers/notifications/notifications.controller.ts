import { Controller, Get, Logger } from '@nestjs/common';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';
import { NotificationService } from './notifications.service';
import { NatsSubjects } from '@app/nats/nats.enum';
import { NatsService } from '@app/nats/nats.service';

@Controller('notifications')
export class NotificationsController {
  logger = new Logger(NotificationsController.name);
  constructor(private readonly natsService: NatsService) {}
  @Get('/')
  @Roles({
    roles: ['realm:app-user'],
  })
  async getNotifications(@AuthenticatedUser() user: any): Promise<Response> {
    const requestType: Request = {
      requestId: uuidv4(),
      getNotificationsRequest: {
        userId: user.sub,
      },
    };
    return this.natsService.performRequest(
      requestType,
      NatsSubjects.NOTIFICATIONS_JOBS_GET,
    );
  }
}
