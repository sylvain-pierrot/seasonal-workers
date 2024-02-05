import { NotificationEntity } from '@app/entities/notifications.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class NotificationsRepository extends Repository<NotificationEntity> {
  constructor(private dataSource: DataSource) {
    super(NotificationEntity, dataSource.createEntityManager());
  }
}
