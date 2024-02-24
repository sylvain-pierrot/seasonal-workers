import { IsString, IsEmail, IsBoolean, IsDate, IsEmpty } from 'class-validator';
import { User } from '@app/proto_generated/models/profile';

export class CreateUserDto implements User {
  @IsEmpty()
  readonly id: string;

  @IsEmpty()
  kcId: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly birthDate: string;

  @IsEmpty()
  readonly createdAt: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly country: string;

  @IsEmpty()
  readonly lastAuth: string;

  @IsEmpty()
  readonly deleted: boolean;

  @IsString()
  readonly description: string;
}
