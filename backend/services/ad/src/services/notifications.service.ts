import { AdEntity } from '@entities/ads.entity';
import { EventErrorRepository } from '@repositories/ads.repository';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '@proto/Request';
import { JobOfferStatusEnum } from '@proto/models/job-status';
import { NatsService, NatsSubjects } from '@app/nats/nats.service';
import { Notification, NotificationType } from '@proto/models/notification';
import { v4 as uuidv4 } from 'uuid';
import { ErrorEventsLogEntity } from '@app/entities/event.entity';

@Injectable()
export class NotificationService {
  private logger = new Logger(NotificationService.name);
  constructor(
    @InjectRepository(ErrorEventsLogEntity)
    private readonly errorRepository: EventErrorRepository,
    private readonly natsService: NatsService,
  ) {}

  async send(notification: Notification, endpoint: NatsSubjects) {
    const request = {
      requestId: uuidv4(),
      createNotificationRequest: {
        notification: notification,
      },
    } as Request;
    const response = await this.natsService.performRequest(request, endpoint);
    // If the notification is not sent correctly, save the error in the database
    if (response.error) {
      await this.errorRepository.save({
        natsSubjects: endpoint,
        errorMessages: response.error.errorMessage,
        errorCode: response.error.errorCode,
        request: request,
      });
    }
  }
  constructJobOfferStatusNotification(
    workerId: string,
    status: JobOfferStatusEnum,
    offer: AdEntity,
  ): Notification {
    let message: string;
    let title: string;
    switch (status) {
      case JobOfferStatusEnum.PENDING:
        message = `Hey 👋 Your application for the job offer ${offer.title} is pending`;
        title = 'Your successfully applied to the job offer';
        break;
      case JobOfferStatusEnum.APPROVED:
        message = `Congratulation 🎉 Your application for the job offer ${offer.title} has been approved`;
        title = 'Good news, you application has been approved';
        break;
      case JobOfferStatusEnum.REJECTED:
        message = `Oh no.. 😔 Your application for the job offer ${offer.title} has been rejected`;
        title = 'Sorry, you application has been rejected';
        break;
      default:
        return;
    }
    const notification = {
      userId: workerId,
      title: title,
      content: message,
      type: NotificationType.APPLICATION,
    } as Notification;

    return notification;
  }
}
