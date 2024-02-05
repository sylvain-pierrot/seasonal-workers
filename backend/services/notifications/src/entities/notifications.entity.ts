import { NotificationType } from '@app/proto_generated/models/notification';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notification } from '@app/proto_generated/models/notification';

@Entity('Notification')
export class NotificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column()
  content: string;

  @Column({ name: 'is_read', default: false })
  isRead: boolean;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  type: NotificationType;

  public static toProto(notification: NotificationEntity): Notification {
    const proto = Notification.fromPartial({
      id: notification.id,
      title: notification.title,
      userId: notification.userId,
      content: notification.content,
      isRead: notification.isRead,
      createdAt: notification.createdAt.toISOString(),
      type: notification.type,
    });

    return proto;
  }

  public static arrayToProto(
    notifications: NotificationEntity[],
  ): Notification[] {
    return notifications.map((notification) =>
      NotificationEntity.toProto(notification),
    );
  }

  public static fromProto(notification: Notification): NotificationEntity {
    const entity = new NotificationEntity();
    entity.title = notification.title;
    entity.userId = notification.userId;
    entity.content = notification.content;
    entity.type = notification.type;
    return entity;
  }
}
