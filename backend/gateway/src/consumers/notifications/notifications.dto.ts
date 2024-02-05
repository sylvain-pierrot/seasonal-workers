import { IsEmpty } from 'class-validator';
import { Notification, NotificationType } from '@proto/models/notification';

export class NotificationDto implements Notification {
  @IsEmpty()
  id: string;
  @IsEmpty()
  title: string;
  @IsEmpty()
  userId: string;
  @IsEmpty()
  content: string;
  @IsEmpty()
  type: NotificationType;
  @IsEmpty()
  isRead: boolean;
  @IsEmpty()
  createdAt: string;
}
