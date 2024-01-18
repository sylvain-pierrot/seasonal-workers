import { Module } from '@nestjs/common';
import { AppController } from '@services/ads/ads.controller';
import { AppService } from '@services/ads/ads.service';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakConnectConfig } from '@config/KeycloakConnectModule';
import { NatsClientConfig } from '@config/NatsClientsModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    KeycloakConnectModule.registerAsync(KeycloakConnectConfig),
    ClientsModule.registerAsync(NatsClientConfig),
  ],
  controllers: [AppController],
  providers: [
    AppService,
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
