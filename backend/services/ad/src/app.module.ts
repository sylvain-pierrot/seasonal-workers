import { Module } from '@nestjs/common';
import { ExperienceService } from '@services/experiences.service';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@config/database.config';
import { natsConfig } from '@config/client-nats.config';
import { ConfigModule } from '@nestjs/config';
import { NatsModule } from '@nats/nats.module';
import { AdEntity } from './entities/ads.entity';
import { JobCategoriesEntity } from './entities/job-categories.entity';
import { ExperiencesController } from './controllers/experience.controller';
import { AvailabilitiesController } from './controllers/availability.controller';
import { AvailabilityService } from './services/availability.service';
import { JobsController } from './controllers/job.controller';
import { JobService } from './services/job.service';
import { JobOfferStatusEntity } from './entities/job-status.entity';

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
      JobCategoriesEntity,
      JobOfferStatusEntity,
    ]),
    ClientsModule.registerAsync(natsConfig),
  ],
  controllers: [
    ExperiencesController,
    AvailabilitiesController,
    JobsController,
  ],
  providers: [ExperienceService, AvailabilityService, JobService],
})
export class AppModule {}
