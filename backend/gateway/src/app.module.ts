import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakConnectConfig } from '@config/KeycloakConnectModule';
import { NatsModule } from './nats/nats.module';
import { ExperiencesController } from './consumers/ads/controllers/experiences.controller';
import { AdsService } from './consumers/ads/ads.service';
import { AvailabilityController } from './consumers/ads/controllers/availabilities.controller';
import { JobOffersController } from './consumers/ads/controllers/job-offers.controller';
import { JobsController } from './consumers/ads/controllers/jobs.controller';
import { NotificationsController } from './consumers/notifications/notifications.controller';
import { NotificationService } from './consumers/notifications/notifications.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    NatsModule,
    KeycloakConnectModule.registerAsync(KeycloakConnectConfig),
  ],
  controllers: [
    ExperiencesController,
    AvailabilityController,
    JobOffersController,
    JobsController,
    NotificationsController,
  ],
  providers: [
    NotificationService,
    AdsService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
