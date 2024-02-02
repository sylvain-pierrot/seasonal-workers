/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'models';

export enum AdTypeEnum {
  EXPERIENCE = 0,
  AVAILABILITY = 1,
  JOB_OFFER = 2,
  UNRECOGNIZED = -1,
}

export function adTypeEnumFromJSON(object: any): AdTypeEnum {
  switch (object) {
    case 0:
    case 'EXPERIENCE':
      return AdTypeEnum.EXPERIENCE;
    case 1:
    case 'AVAILABILITY':
      return AdTypeEnum.AVAILABILITY;
    case 2:
    case 'JOB_OFFER':
      return AdTypeEnum.JOB_OFFER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AdTypeEnum.UNRECOGNIZED;
  }
}

export function adTypeEnumToJSON(object: AdTypeEnum): string {
  switch (object) {
    case AdTypeEnum.EXPERIENCE:
      return 'EXPERIENCE';
    case AdTypeEnum.AVAILABILITY:
      return 'AVAILABILITY';
    case AdTypeEnum.JOB_OFFER:
      return 'JOB_OFFER';
    default:
      return 'UNKNOWN';
  }
}

export enum CountryEnum {
  FRANCE = 0,
  GERMANY = 1,
  SPAIN = 2,
  ITALY = 3,
  UNITED_KINGDOM = 4,
  UNITED_STATES = 5,
  UNRECOGNIZED = -1,
}

export function countryEnumFromJSON(object: any): CountryEnum {
  switch (object) {
    case 0:
    case 'FRANCE':
      return CountryEnum.FRANCE;
    case 1:
    case 'GERMANY':
      return CountryEnum.GERMANY;
    case 2:
    case 'SPAIN':
      return CountryEnum.SPAIN;
    case 3:
    case 'ITALY':
      return CountryEnum.ITALY;
    case 4:
    case 'UNITED_KINGDOM':
      return CountryEnum.UNITED_KINGDOM;
    case 5:
    case 'UNITED_STATES':
      return CountryEnum.UNITED_STATES;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CountryEnum.UNRECOGNIZED;
  }
}

export function countryEnumToJSON(object: CountryEnum): string {
  switch (object) {
    case CountryEnum.FRANCE:
      return 'FRANCE';
    case CountryEnum.GERMANY:
      return 'GERMANY';
    case CountryEnum.SPAIN:
      return 'SPAIN';
    case CountryEnum.ITALY:
      return 'ITALY';
    case CountryEnum.UNITED_KINGDOM:
      return 'UNITED_KINGDOM';
    case CountryEnum.UNITED_STATES:
      return 'UNITED_STATES';
    default:
      return 'UNKNOWN';
  }
}

export enum SalaireCurrencyEnum {
  EU = 0,
  DOLLAR = 1,
  UNRECOGNIZED = -1,
}

export function salaireCurrencyEnumFromJSON(object: any): SalaireCurrencyEnum {
  switch (object) {
    case 0:
    case 'EU':
      return SalaireCurrencyEnum.EU;
    case 1:
    case 'DOLLAR':
      return SalaireCurrencyEnum.DOLLAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SalaireCurrencyEnum.UNRECOGNIZED;
  }
}

export function salaireCurrencyEnumToJSON(object: SalaireCurrencyEnum): string {
  switch (object) {
    case SalaireCurrencyEnum.EU:
      return 'EU';
    case SalaireCurrencyEnum.DOLLAR:
      return 'DOLLAR';
    default:
      return 'UNKNOWN';
  }
}

export enum JobOfferStatusEnum {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
  UNRECOGNIZED = -1,
}

export function jobOfferStatusEnumFromJSON(object: any): JobOfferStatusEnum {
  switch (object) {
    case 0:
    case 'PENDING':
      return JobOfferStatusEnum.PENDING;
    case 1:
    case 'APPROVED':
      return JobOfferStatusEnum.APPROVED;
    case 2:
    case 'REJECTED':
      return JobOfferStatusEnum.REJECTED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return JobOfferStatusEnum.UNRECOGNIZED;
  }
}

export function jobOfferStatusEnumToJSON(object: JobOfferStatusEnum): string {
  switch (object) {
    case JobOfferStatusEnum.PENDING:
      return 'PENDING';
    case JobOfferStatusEnum.APPROVED:
      return 'APPROVED';
    case JobOfferStatusEnum.REJECTED:
      return 'REJECTED';
    default:
      return 'UNKNOWN';
  }
}

export interface Address {
  city: string;
  zipCode: string;
  country: CountryEnum;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface JobCategory {
  category: string;
  subCategory: string;
}

export interface Ad {
  id: string;
  title: string;
  userId: string;
  dateRange: DateRange | undefined;
  salaryAmount: number;
  salaryCurrency: SalaireCurrencyEnum;
  address: Address | undefined;
  description: string;
  adType: AdTypeEnum;
  jobCategory: JobCategory | undefined;
}

const baseAddress: object = { city: '', zipCode: '', country: 0 };

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.city !== '') {
      writer.uint32(10).string(message.city);
    }
    if (message.zipCode !== '') {
      writer.uint32(18).string(message.zipCode);
    }
    if (message.country !== 0) {
      writer.uint32(24).int32(message.country);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.city = reader.string();
          break;
        case 2:
          message.zipCode = reader.string();
          break;
        case 3:
          message.country = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
    if (object.city !== undefined && object.city !== null) {
      message.city = String(object.city);
    } else {
      message.city = '';
    }
    if (object.zipCode !== undefined && object.zipCode !== null) {
      message.zipCode = String(object.zipCode);
    } else {
      message.zipCode = '';
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = countryEnumFromJSON(object.country);
    } else {
      message.country = 0;
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.city !== undefined && (obj.city = message.city);
    message.zipCode !== undefined && (obj.zipCode = message.zipCode);
    message.country !== undefined &&
      (obj.country = countryEnumToJSON(message.country));
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city;
    } else {
      message.city = '';
    }
    if (object.zipCode !== undefined && object.zipCode !== null) {
      message.zipCode = object.zipCode;
    } else {
      message.zipCode = '';
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = 0;
    }
    return message;
  },
};

const baseDateRange: object = { startDate: '', endDate: '' };

export const DateRange = {
  encode(message: DateRange, writer: Writer = Writer.create()): Writer {
    if (message.startDate !== '') {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== '') {
      writer.uint32(18).string(message.endDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DateRange {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDateRange } as DateRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DateRange {
    const message = { ...baseDateRange } as DateRange;
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = String(object.startDate);
    } else {
      message.startDate = '';
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = String(object.endDate);
    } else {
      message.endDate = '';
    }
    return message;
  },

  toJSON(message: DateRange): unknown {
    const obj: any = {};
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    return obj;
  },

  fromPartial(object: DeepPartial<DateRange>): DateRange {
    const message = { ...baseDateRange } as DateRange;
    if (object.startDate !== undefined && object.startDate !== null) {
      message.startDate = object.startDate;
    } else {
      message.startDate = '';
    }
    if (object.endDate !== undefined && object.endDate !== null) {
      message.endDate = object.endDate;
    } else {
      message.endDate = '';
    }
    return message;
  },
};

const baseJobCategory: object = { category: '', subCategory: '' };

export const JobCategory = {
  encode(message: JobCategory, writer: Writer = Writer.create()): Writer {
    if (message.category !== '') {
      writer.uint32(10).string(message.category);
    }
    if (message.subCategory !== '') {
      writer.uint32(18).string(message.subCategory);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobCategory {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobCategory } as JobCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.string();
          break;
        case 2:
          message.subCategory = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobCategory {
    const message = { ...baseJobCategory } as JobCategory;
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = '';
    }
    if (object.subCategory !== undefined && object.subCategory !== null) {
      message.subCategory = String(object.subCategory);
    } else {
      message.subCategory = '';
    }
    return message;
  },

  toJSON(message: JobCategory): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = message.category);
    message.subCategory !== undefined &&
      (obj.subCategory = message.subCategory);
    return obj;
  },

  fromPartial(object: DeepPartial<JobCategory>): JobCategory {
    const message = { ...baseJobCategory } as JobCategory;
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = '';
    }
    if (object.subCategory !== undefined && object.subCategory !== null) {
      message.subCategory = object.subCategory;
    } else {
      message.subCategory = '';
    }
    return message;
  },
};

const baseAd: object = {
  id: '',
  title: '',
  userId: '',
  salaryAmount: 0,
  salaryCurrency: 0,
  description: '',
  adType: 0,
};

export const Ad = {
  encode(message: Ad, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title);
    }
    if (message.userId !== '') {
      writer.uint32(26).string(message.userId);
    }
    if (message.dateRange !== undefined) {
      DateRange.encode(message.dateRange, writer.uint32(34).fork()).ldelim();
    }
    if (message.salaryAmount !== 0) {
      writer.uint32(41).double(message.salaryAmount);
    }
    if (message.salaryCurrency !== 0) {
      writer.uint32(48).int32(message.salaryCurrency);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(58).fork()).ldelim();
    }
    if (message.description !== '') {
      writer.uint32(66).string(message.description);
    }
    if (message.adType !== 0) {
      writer.uint32(72).int32(message.adType);
    }
    if (message.jobCategory !== undefined) {
      JobCategory.encode(
        message.jobCategory,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Ad {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAd } as Ad;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.userId = reader.string();
          break;
        case 4:
          message.dateRange = DateRange.decode(reader, reader.uint32());
          break;
        case 5:
          message.salaryAmount = reader.double();
          break;
        case 6:
          message.salaryCurrency = reader.int32() as any;
          break;
        case 7:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.adType = reader.int32() as any;
          break;
        case 10:
          message.jobCategory = JobCategory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ad {
    const message = { ...baseAd } as Ad;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = '';
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = '';
    }
    if (object.dateRange !== undefined && object.dateRange !== null) {
      message.dateRange = DateRange.fromJSON(object.dateRange);
    } else {
      message.dateRange = undefined;
    }
    if (object.salaryAmount !== undefined && object.salaryAmount !== null) {
      message.salaryAmount = Number(object.salaryAmount);
    } else {
      message.salaryAmount = 0;
    }
    if (object.salaryCurrency !== undefined && object.salaryCurrency !== null) {
      message.salaryCurrency = salaireCurrencyEnumFromJSON(
        object.salaryCurrency,
      );
    } else {
      message.salaryCurrency = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address.fromJSON(object.address);
    } else {
      message.address = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }
    if (object.adType !== undefined && object.adType !== null) {
      message.adType = adTypeEnumFromJSON(object.adType);
    } else {
      message.adType = 0;
    }
    if (object.jobCategory !== undefined && object.jobCategory !== null) {
      message.jobCategory = JobCategory.fromJSON(object.jobCategory);
    } else {
      message.jobCategory = undefined;
    }
    return message;
  },

  toJSON(message: Ad): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.userId !== undefined && (obj.userId = message.userId);
    message.dateRange !== undefined &&
      (obj.dateRange = message.dateRange
        ? DateRange.toJSON(message.dateRange)
        : undefined);
    message.salaryAmount !== undefined &&
      (obj.salaryAmount = message.salaryAmount);
    message.salaryCurrency !== undefined &&
      (obj.salaryCurrency = salaireCurrencyEnumToJSON(message.salaryCurrency));
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    message.description !== undefined &&
      (obj.description = message.description);
    message.adType !== undefined &&
      (obj.adType = adTypeEnumToJSON(message.adType));
    message.jobCategory !== undefined &&
      (obj.jobCategory = message.jobCategory
        ? JobCategory.toJSON(message.jobCategory)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Ad>): Ad {
    const message = { ...baseAd } as Ad;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = '';
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = '';
    }
    if (object.dateRange !== undefined && object.dateRange !== null) {
      message.dateRange = DateRange.fromPartial(object.dateRange);
    } else {
      message.dateRange = undefined;
    }
    if (object.salaryAmount !== undefined && object.salaryAmount !== null) {
      message.salaryAmount = object.salaryAmount;
    } else {
      message.salaryAmount = 0;
    }
    if (object.salaryCurrency !== undefined && object.salaryCurrency !== null) {
      message.salaryCurrency = object.salaryCurrency;
    } else {
      message.salaryCurrency = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }
    if (object.adType !== undefined && object.adType !== null) {
      message.adType = object.adType;
    } else {
      message.adType = 0;
    }
    if (object.jobCategory !== undefined && object.jobCategory !== null) {
      message.jobCategory = JobCategory.fromPartial(object.jobCategory);
    } else {
      message.jobCategory = undefined;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
