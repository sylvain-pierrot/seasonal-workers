import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from '@app/entities/notifications.entity';
import { NotificationsRepository } from '@app/repositories/notifications.repository';
import { Request } from '@app/proto_generated/Request';
import { Response } from '@app/proto_generated/Response';
import { NatsResponse } from '@app/utils/response';
@Injectable()
export class NotificationService {
  private logger = new Logger(NotificationService.name);
  constructor(
    @InjectRepository(NotificationEntity)
    private notificationRepository: NotificationsRepository,
  ) {}

  async createNotification(request: Request) {
    const protoNotification = request.createNotificationRequest.notification;
    const notification = NotificationEntity.fromProto(protoNotification);
    const notificationSaved =
      await this.notificationRepository.save(notification);
    const response = {
      requestId: request.requestId,
      createNotificationResponse: {
        notification: NotificationEntity.toProto(notificationSaved),
      },
    } as Response;
    return NatsResponse.success(response);
  }

  async getNotifications(request: Request) {
    const userId = request.getNotificationsRequest.userId;
    const notifications = await this.notificationRepository.find({
      where: {
        userId: userId,
        isRead: false,
      },
    });
    const proto = NotificationEntity.arrayToProto(notifications);
    const response = {
      requestId: request.requestId,
      getNotificationsResponse: {
        notifications: proto,
      },
    } as Response;
    const readedNotifications = notifications.map((notification) => {
      notification.isRead = true;
      return notification;
    });
    await this.notificationRepository.save(readedNotifications);

    return NatsResponse.success(response);
  }
}
