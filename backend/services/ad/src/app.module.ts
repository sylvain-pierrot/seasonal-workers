import { Module } from '@nestjs/common';
import { ExperienceService } from '@services/experiences.service';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@config/database.config';
import { natsConfig } from '@config/client-nats.config';
import { ConfigModule } from '@nestjs/config';
import { NatsModule } from '@nats/nats.module';
import { AdEntity } from './entities/ads.entity';
import { JobSubCategoryEntity } from '@entities/job-subcategories.entity';
import { ExperiencesController } from '@controllers/experience.controller';
import { AvailabilitiesController } from '@controllers/availability.controller';
import { AvailabilityService } from '@app/services/availabilities.service';
import { JobsController } from '@controllers/job.controller';
import { JobService } from '@services/job.service';
import { JobOfferStatusEntity } from '@entities/job-status.entity';
import { DataSource } from 'typeorm';
import { DatabaseReady } from './database/init.service';
import { JobCategoryEntity } from '@entities/job-categories.entity';
import { JobCategoryService } from '@services/job-categories.service';
import { ErrorEventsLogEntity } from './entities/event.entity';
import { NotificationService } from './services/notifications.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NatsModule,
    TypeOrmModule.forRootAsync(databaseConfig),
    TypeOrmModule.forFeature([
      AdEntity,
      ErrorEventsLogEntity,
      JobCategoryEntity,
      JobSubCategoryEntity,
      JobOfferStatusEntity,
    ]),
    ClientsModule.registerAsync(natsConfig),
  ],
  controllers: [
    ExperiencesController,
    AvailabilitiesController,
    JobsController,
  ],
  providers: [
    NotificationService,
    ExperienceService,
    AvailabilityService,
    JobService,
    JobCategoryService,
  ],
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {
    const database = new DatabaseReady(dataSource);
    database.populate();
  }
}
