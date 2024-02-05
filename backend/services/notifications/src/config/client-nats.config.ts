import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModuleAsyncOptions, Transport } from '@nestjs/microservices';

export const natsConfig: ClientsModuleAsyncOptions = [
  {
    name: 'NOTIFICATIONS_SERVICE',
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      transport: Transport.NATS,
      options: {
        url: configService.get('NATS_URL'),
        queue: configService.get('NATS_QUEUE'),
        encoding: 'binary',
        serializer: {
          serialize: (TInput) => TInput.toString(),
        },
        deserializer: {
          deserialize: (data: any) => data.toString(),
        },
        preserveBuffers: true,
      },
    }),
    inject: [ConfigService],
  },
];
