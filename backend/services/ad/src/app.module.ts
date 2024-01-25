import { Module } from '@nestjs/common';
import { AdController } from '@controllers/ads.controller';
import { AdService } from '@services/ads.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@config/database.config';
import { natsConfig } from './config/client-nats.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
    ClientsModule.registerAsync(natsConfig),
  ],
  controllers: [AdController],
  providers: [AdService],
})
export class AppModule {}
