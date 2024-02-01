import { Module } from '@nestjs/common';
import { AdService } from '@services/ads.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@config/database.config';
import { natsConfig } from '@config/client-nats.config';
import { ConfigModule } from '@nestjs/config';
import { NatsModule } from '@nats/nats.module';
import { AdEntity } from './entities/ads.entity';
import { JobCategoriesEntity } from './entities/job-categories.entity';
import { ExperiencesController } from './controllers/experience.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NatsModule,
    TypeOrmModule.forRootAsync(databaseConfig),
    TypeOrmModule.forFeature([AdEntity, JobCategoriesEntity]),
    ClientsModule.registerAsync(natsConfig),
  ],
  controllers: [ExperiencesController],
  providers: [AdService],
})
export class AppModule {}
