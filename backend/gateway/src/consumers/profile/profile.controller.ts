import { Body, Controller, Get, Logger, Post, Put } from '@nestjs/common';
import { AuthenticatedUser, Roles } from 'nest-keycloak-connect';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';
import { NatsSubjects } from '@app/nats/nats.enum';
import { NatsService } from '@app/nats/nats.service';
import { CreateUserDto } from './profile.dto';

@Controller('profile')
export class ProfileController {
  logger = new Logger(ProfileController.name);
  constructor(private readonly natsService: NatsService) {}
  @Post('/workers')
  @Roles({
    roles: ['realm:app-user'],
  })
  async createWorker(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: CreateUserDto,
  ): Promise<Response> {
    message.kcId = user.sub;
    const requestType: Request = {
      requestId: uuidv4(),
      createUserProfileRequest: {
        profile: message,
      },
    };
    return this.natsService.performRequest(
      requestType,
      NatsSubjects.PROFILE_WORKERS_CREATE,
    );
  }

  @Put('/workers')
  @Roles({
    roles: ['realm:app-user'],
  })
  async updateWorker(
    @AuthenticatedUser()
    user: any,
    @Body()
    message: CreateUserDto,
  ): Promise<Response> {
    message.kcId = user.sub;
    const requestType: Request = {
      requestId: uuidv4(),
      updateUserProfileRequest: {
        profile: message,
      },
    };
    return this.natsService.performRequest(
      requestType,
      NatsSubjects.PROFILE_WORKERS_UPDATE,
    );
  }
}
