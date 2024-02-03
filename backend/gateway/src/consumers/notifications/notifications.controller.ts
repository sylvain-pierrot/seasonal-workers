import { Controller } from '@nestjs/common';
import { Roles } from 'nest-keycloak-connect';
// import { NatsSubjects, AdsService } from '../ads.service';
import { Request } from '@proto/Request';
import { Response } from '@proto/Response';
import { v4 as uuidv4 } from 'uuid';

@Controller('notifications')
export class NotificationsController {
  // logger = new Logger(JobsController.name);
  // constructor(private readonly notificationService: NotificationService) {}
  // @Get('/job-offers')
  // @Roles({
  //   roles: ['realm:app-user'],
  // })
  // async getNotifications(): Promise<Response> {
  //   const requestType: Request = {
  //     requestId: uuidv4(),
  //     getJobCategoriesRequest: {},
  //   };
  //   return this.notificationService.performRequest(
  //     requestType,
  //     NatsSubjects.JOB_GET_CATEGORIES,
  //   );
  // }
}
