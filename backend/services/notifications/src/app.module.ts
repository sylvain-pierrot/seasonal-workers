import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@config/database.config';
import { natsConfig } from '@config/client-nats.config';
import { ConfigModule } from '@nestjs/config';
import { NatsModule } from '@nats/nats.module';
import { NotificationEntity } from './entities/notifications.entity';
import { NotificationsController } from './controllers/notifications.controller';
import { NotificationService } from './services/notifications.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NatsModule,
    TypeOrmModule.forRootAsync(databaseConfig),
    TypeOrmModule.forFeature([NotificationEntity]),
    ClientsModule.registerAsync(natsConfig),
  ],
  controllers: [NotificationsController],
  providers: [NotificationService],
})
export class AppModule {
  constructor() {}
}
