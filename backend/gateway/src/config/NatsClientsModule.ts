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
        json: false,
        serializer: {
          serialize: (data: any) => data.toString(),
        },
        deserializer: {
          deserialize: (data: any) => data.toString(),
        },
        preserveBuffers: true,
      },
    }),
  },
];
