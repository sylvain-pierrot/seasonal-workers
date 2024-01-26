import {
  Ad,
  AdTypeEnum,
  Address,
  CountryEnum,
  DateRange,
  JobCategory,
  SalaireCurrencyEnum,
} from '@app/proto_generated/ad';
import {
  IsNumber,
  ValidateNested,
  IsString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

class JobCategoryDto {
  @IsString()
  category: string;

  @IsString()
  subCategory: string;
}

class DateRangeDto {
  @IsString()
  startDate: string;

  @IsString()
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
  @IsString()
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
