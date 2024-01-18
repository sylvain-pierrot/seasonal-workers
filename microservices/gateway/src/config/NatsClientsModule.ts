import { ConfigService } from '@nestjs/config';
import { ClientsModuleAsyncOptions, Transport } from '@nestjs/microservices';

export const NatsClientConfig: ClientsModuleAsyncOptions = [
  {
    name: 'GATEWAY_SERVICE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      transport: Transport.NATS,
      options: {
        servers: [configService.get<string>('NATS_HOST')],
        package: configService.get<string>('NATS_PACKAGE'),
        protoPath: configService.get<string>('NATS_PROTO_PATH'),
      },
    }),
  },
];
