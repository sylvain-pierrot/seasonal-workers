import {
  Ad,
  AdTypeEnum,
  Address,
  CountryEnum,
  DateRange,
  JobCategory,
  SalaireCurrencyEnum,
} from '@proto/models/ads';
import {
  IsNumber,
  ValidateNested,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsUUID,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

class JobCategoryDto {
  @IsString()
  category: string;

  @IsString()
  subCategory: string;
}

class DateRangeDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}

class AddressDto {
  @IsString()
  city: string;

  @IsString()
  zipCode: string;

  @IsEnum(CountryEnum)
  country: CountryEnum;
}

export class AdDto implements Ad {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => JobCategoryDto)
  jobCategory: JobCategory;

  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => DateRangeDto)
  dateRange: DateRange;

  @IsNotEmpty()
  @IsNumber()
  salaryAmount: number;

  @IsNotEmpty()
  @IsEnum(SalaireCurrencyEnum)
  salaryCurrency: SalaireCurrencyEnum;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  address: Address;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(AdTypeEnum)
  adType: AdTypeEnum;
}
