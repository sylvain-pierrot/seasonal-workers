/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "models";

export enum AdTypeEnum {
  EXPERIENCE = 0,
  AVAILABILITY = 1,
  JOB_OFFER = 2,
  UNRECOGNIZED = -1,
}

export function adTypeEnumFromJSON(object: any): AdTypeEnum {
  switch (object) {
    case 0:
    case "EXPERIENCE":
      return AdTypeEnum.EXPERIENCE;
    case 1:
    case "AVAILABILITY":
      return AdTypeEnum.AVAILABILITY;
    case 2:
    case "JOB_OFFER":
      return AdTypeEnum.JOB_OFFER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AdTypeEnum.UNRECOGNIZED;
  }
}

export function adTypeEnumToJSON(object: AdTypeEnum): string {
  switch (object) {
    case AdTypeEnum.EXPERIENCE:
      return "EXPERIENCE";
    case AdTypeEnum.AVAILABILITY:
      return "AVAILABILITY";
    case AdTypeEnum.JOB_OFFER:
      return "JOB_OFFER";
    case AdTypeEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case "FRANCE":
      return CountryEnum.FRANCE;
    case 1:
    case "GERMANY":
      return CountryEnum.GERMANY;
    case 2:
    case "SPAIN":
      return CountryEnum.SPAIN;
    case 3:
    case "ITALY":
      return CountryEnum.ITALY;
    case 4:
    case "UNITED_KINGDOM":
      return CountryEnum.UNITED_KINGDOM;
    case 5:
    case "UNITED_STATES":
      return CountryEnum.UNITED_STATES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CountryEnum.UNRECOGNIZED;
  }
}

export function countryEnumToJSON(object: CountryEnum): string {
  switch (object) {
    case CountryEnum.FRANCE:
      return "FRANCE";
    case CountryEnum.GERMANY:
      return "GERMANY";
    case CountryEnum.SPAIN:
      return "SPAIN";
    case CountryEnum.ITALY:
      return "ITALY";
    case CountryEnum.UNITED_KINGDOM:
      return "UNITED_KINGDOM";
    case CountryEnum.UNITED_STATES:
      return "UNITED_STATES";
    case CountryEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case "EU":
      return SalaireCurrencyEnum.EU;
    case 1:
    case "DOLLAR":
      return SalaireCurrencyEnum.DOLLAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SalaireCurrencyEnum.UNRECOGNIZED;
  }
}

export function salaireCurrencyEnumToJSON(object: SalaireCurrencyEnum): string {
  switch (object) {
    case SalaireCurrencyEnum.EU:
      return "EU";
    case SalaireCurrencyEnum.DOLLAR:
      return "DOLLAR";
    case SalaireCurrencyEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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

export interface JobOfferCategory {
  jobTitle: string;
  categoryTitle: string;
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
  jobCategory: JobOfferCategory | undefined;
}

function createBaseAddress(): Address {
  return { city: "", zipCode: "", country: 0 };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.city !== "") {
      writer.uint32(10).string(message.city);
    }
    if (message.zipCode !== "") {
      writer.uint32(18).string(message.zipCode);
    }
    if (message.country !== 0) {
      writer.uint32(24).int32(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.city = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.zipCode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.country = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      city: isSet(object.city) ? globalThis.String(object.city) : "",
      zipCode: isSet(object.zipCode) ? globalThis.String(object.zipCode) : "",
      country: isSet(object.country) ? countryEnumFromJSON(object.country) : 0,
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    if (message.city !== "") {
      obj.city = message.city;
    }
    if (message.zipCode !== "") {
      obj.zipCode = message.zipCode;
    }
    if (message.country !== 0) {
      obj.country = countryEnumToJSON(message.country);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.city = object.city ?? "";
    message.zipCode = object.zipCode ?? "";
    message.country = object.country ?? 0;
    return message;
  },
};

function createBaseDateRange(): DateRange {
  return { startDate: "", endDate: "" };
}

export const DateRange = {
  encode(message: DateRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DateRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DateRange {
    return {
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : "",
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
    };
  },

  toJSON(message: DateRange): unknown {
    const obj: any = {};
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DateRange>, I>>(base?: I): DateRange {
    return DateRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DateRange>, I>>(object: I): DateRange {
    const message = createBaseDateRange();
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    return message;
  },
};

function createBaseJobOfferCategory(): JobOfferCategory {
  return { jobTitle: "", categoryTitle: "" };
}

export const JobOfferCategory = {
  encode(message: JobOfferCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobTitle !== "") {
      writer.uint32(10).string(message.jobTitle);
    }
    if (message.categoryTitle !== "") {
      writer.uint32(18).string(message.categoryTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobOfferCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobOfferCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobTitle = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.categoryTitle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobOfferCategory {
    return {
      jobTitle: isSet(object.jobTitle) ? globalThis.String(object.jobTitle) : "",
      categoryTitle: isSet(object.categoryTitle) ? globalThis.String(object.categoryTitle) : "",
    };
  },

  toJSON(message: JobOfferCategory): unknown {
    const obj: any = {};
    if (message.jobTitle !== "") {
      obj.jobTitle = message.jobTitle;
    }
    if (message.categoryTitle !== "") {
      obj.categoryTitle = message.categoryTitle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobOfferCategory>, I>>(base?: I): JobOfferCategory {
    return JobOfferCategory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobOfferCategory>, I>>(object: I): JobOfferCategory {
    const message = createBaseJobOfferCategory();
    message.jobTitle = object.jobTitle ?? "";
    message.categoryTitle = object.categoryTitle ?? "";
    return message;
  },
};

function createBaseAd(): Ad {
  return {
    id: "",
    title: "",
    userId: "",
    dateRange: undefined,
    salaryAmount: 0,
    salaryCurrency: 0,
    address: undefined,
    description: "",
    adType: 0,
    jobCategory: undefined,
  };
}

export const Ad = {
  encode(message: Ad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.userId !== "") {
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
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.adType !== 0) {
      writer.uint32(72).int32(message.adType);
    }
    if (message.jobCategory !== undefined) {
      JobOfferCategory.encode(message.jobCategory, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ad {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateRange = DateRange.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.salaryAmount = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.salaryCurrency = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.adType = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.jobCategory = JobOfferCategory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ad {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      dateRange: isSet(object.dateRange) ? DateRange.fromJSON(object.dateRange) : undefined,
      salaryAmount: isSet(object.salaryAmount) ? globalThis.Number(object.salaryAmount) : 0,
      salaryCurrency: isSet(object.salaryCurrency) ? salaireCurrencyEnumFromJSON(object.salaryCurrency) : 0,
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      adType: isSet(object.adType) ? adTypeEnumFromJSON(object.adType) : 0,
      jobCategory: isSet(object.jobCategory) ? JobOfferCategory.fromJSON(object.jobCategory) : undefined,
    };
  },

  toJSON(message: Ad): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.dateRange !== undefined) {
      obj.dateRange = DateRange.toJSON(message.dateRange);
    }
    if (message.salaryAmount !== 0) {
      obj.salaryAmount = message.salaryAmount;
    }
    if (message.salaryCurrency !== 0) {
      obj.salaryCurrency = salaireCurrencyEnumToJSON(message.salaryCurrency);
    }
    if (message.address !== undefined) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.adType !== 0) {
      obj.adType = adTypeEnumToJSON(message.adType);
    }
    if (message.jobCategory !== undefined) {
      obj.jobCategory = JobOfferCategory.toJSON(message.jobCategory);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ad>, I>>(base?: I): Ad {
    return Ad.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ad>, I>>(object: I): Ad {
    const message = createBaseAd();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.userId = object.userId ?? "";
    message.dateRange = (object.dateRange !== undefined && object.dateRange !== null)
      ? DateRange.fromPartial(object.dateRange)
      : undefined;
    message.salaryAmount = object.salaryAmount ?? 0;
    message.salaryCurrency = object.salaryCurrency ?? 0;
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.description = object.description ?? "";
    message.adType = object.adType ?? 0;
    message.jobCategory = (object.jobCategory !== undefined && object.jobCategory !== null)
      ? JobOfferCategory.fromPartial(object.jobCategory)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
