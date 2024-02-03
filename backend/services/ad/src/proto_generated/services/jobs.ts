/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
  JobOfferStatusEnum,
  JobOfferStatus,
  jobOfferStatusEnumFromJSON,
  jobOfferStatusEnumToJSON,
} from '../models/job-status';
import { JobCategory } from '../models/job-category';

export const protobufPackage = 'services';

export interface ApplyJobOfferRequest {
  offerId: string;
  workerId: string;
}

export interface ApplyJobOfferResponse {
  id: string;
}

export interface UpdateJobOfferStatusRequest {
  offerId: string;
  workerId: string;
  status: JobOfferStatusEnum;
}

export interface UpdateJobOfferStatusResponse {
  id: string;
}

export interface GetJobOffersStatusRequest {
  workerId: string;
}

export interface GetJobOffersStatusResponse {
  jobOffers: JobOfferStatus[];
}

export interface GetJobCategoriesRequest {}

export interface GetJobCategoriesResponse {
  categories: JobCategory[];
}

const baseApplyJobOfferRequest: object = { offerId: '', workerId: '' };

export const ApplyJobOfferRequest = {
  encode(
    message: ApplyJobOfferRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.offerId !== '') {
      writer.uint32(10).string(message.offerId);
    }
    if (message.workerId !== '') {
      writer.uint32(18).string(message.workerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApplyJobOfferRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplyJobOfferRequest } as ApplyJobOfferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplyJobOfferRequest {
    const message = { ...baseApplyJobOfferRequest } as ApplyJobOfferRequest;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId);
    } else {
      message.offerId = '';
    }
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = String(object.workerId);
    } else {
      message.workerId = '';
    }
    return message;
  },

  toJSON(message: ApplyJobOfferRequest): unknown {
    const obj: any = {};
    message.offerId !== undefined && (obj.offerId = message.offerId);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    return obj;
  },

  fromPartial(object: DeepPartial<ApplyJobOfferRequest>): ApplyJobOfferRequest {
    const message = { ...baseApplyJobOfferRequest } as ApplyJobOfferRequest;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId;
    } else {
      message.offerId = '';
    }
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = object.workerId;
    } else {
      message.workerId = '';
    }
    return message;
  },
};

const baseApplyJobOfferResponse: object = { id: '' };

export const ApplyJobOfferResponse = {
  encode(
    message: ApplyJobOfferResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApplyJobOfferResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApplyJobOfferResponse } as ApplyJobOfferResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApplyJobOfferResponse {
    const message = { ...baseApplyJobOfferResponse } as ApplyJobOfferResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: ApplyJobOfferResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ApplyJobOfferResponse>,
  ): ApplyJobOfferResponse {
    const message = { ...baseApplyJobOfferResponse } as ApplyJobOfferResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseUpdateJobOfferStatusRequest: object = {
  offerId: '',
  workerId: '',
  status: 0,
};

export const UpdateJobOfferStatusRequest = {
  encode(
    message: UpdateJobOfferStatusRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.offerId !== '') {
      writer.uint32(10).string(message.offerId);
    }
    if (message.workerId !== '') {
      writer.uint32(18).string(message.workerId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): UpdateJobOfferStatusRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateJobOfferStatusRequest,
    } as UpdateJobOfferStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.string();
          break;
        case 2:
          message.workerId = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateJobOfferStatusRequest {
    const message = {
      ...baseUpdateJobOfferStatusRequest,
    } as UpdateJobOfferStatusRequest;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId);
    } else {
      message.offerId = '';
    }
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = String(object.workerId);
    } else {
      message.workerId = '';
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = jobOfferStatusEnumFromJSON(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: UpdateJobOfferStatusRequest): unknown {
    const obj: any = {};
    message.offerId !== undefined && (obj.offerId = message.offerId);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.status !== undefined &&
      (obj.status = jobOfferStatusEnumToJSON(message.status));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateJobOfferStatusRequest>,
  ): UpdateJobOfferStatusRequest {
    const message = {
      ...baseUpdateJobOfferStatusRequest,
    } as UpdateJobOfferStatusRequest;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId;
    } else {
      message.offerId = '';
    }
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = object.workerId;
    } else {
      message.workerId = '';
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseUpdateJobOfferStatusResponse: object = { id: '' };

export const UpdateJobOfferStatusResponse = {
  encode(
    message: UpdateJobOfferStatusResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): UpdateJobOfferStatusResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateJobOfferStatusResponse,
    } as UpdateJobOfferStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateJobOfferStatusResponse {
    const message = {
      ...baseUpdateJobOfferStatusResponse,
    } as UpdateJobOfferStatusResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: UpdateJobOfferStatusResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateJobOfferStatusResponse>,
  ): UpdateJobOfferStatusResponse {
    const message = {
      ...baseUpdateJobOfferStatusResponse,
    } as UpdateJobOfferStatusResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetJobOffersStatusRequest: object = { workerId: '' };

export const GetJobOffersStatusRequest = {
  encode(
    message: GetJobOffersStatusRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.workerId !== '') {
      writer.uint32(10).string(message.workerId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetJobOffersStatusRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetJobOffersStatusRequest,
    } as GetJobOffersStatusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersStatusRequest {
    const message = {
      ...baseGetJobOffersStatusRequest,
    } as GetJobOffersStatusRequest;
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = String(object.workerId);
    } else {
      message.workerId = '';
    }
    return message;
  },

  toJSON(message: GetJobOffersStatusRequest): unknown {
    const obj: any = {};
    message.workerId !== undefined && (obj.workerId = message.workerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetJobOffersStatusRequest>,
  ): GetJobOffersStatusRequest {
    const message = {
      ...baseGetJobOffersStatusRequest,
    } as GetJobOffersStatusRequest;
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = object.workerId;
    } else {
      message.workerId = '';
    }
    return message;
  },
};

const baseGetJobOffersStatusResponse: object = {};

export const GetJobOffersStatusResponse = {
  encode(
    message: GetJobOffersStatusResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.jobOffers) {
      JobOfferStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetJobOffersStatusResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetJobOffersStatusResponse,
    } as GetJobOffersStatusResponse;
    message.jobOffers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobOffers.push(
            JobOfferStatus.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersStatusResponse {
    const message = {
      ...baseGetJobOffersStatusResponse,
    } as GetJobOffersStatusResponse;
    message.jobOffers = [];
    if (object.jobOffers !== undefined && object.jobOffers !== null) {
      for (const e of object.jobOffers) {
        message.jobOffers.push(JobOfferStatus.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetJobOffersStatusResponse): unknown {
    const obj: any = {};
    if (message.jobOffers) {
      obj.jobOffers = message.jobOffers.map((e) =>
        e ? JobOfferStatus.toJSON(e) : undefined,
      );
    } else {
      obj.jobOffers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetJobOffersStatusResponse>,
  ): GetJobOffersStatusResponse {
    const message = {
      ...baseGetJobOffersStatusResponse,
    } as GetJobOffersStatusResponse;
    message.jobOffers = [];
    if (object.jobOffers !== undefined && object.jobOffers !== null) {
      for (const e of object.jobOffers) {
        message.jobOffers.push(JobOfferStatus.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetJobCategoriesRequest: object = {};

export const GetJobCategoriesRequest = {
  encode(_: GetJobCategoriesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetJobCategoriesRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetJobCategoriesRequest,
    } as GetJobCategoriesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetJobCategoriesRequest {
    const message = {
      ...baseGetJobCategoriesRequest,
    } as GetJobCategoriesRequest;
    return message;
  },

  toJSON(_: GetJobCategoriesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<GetJobCategoriesRequest>,
  ): GetJobCategoriesRequest {
    const message = {
      ...baseGetJobCategoriesRequest,
    } as GetJobCategoriesRequest;
    return message;
  },
};

const baseGetJobCategoriesResponse: object = {};

export const GetJobCategoriesResponse = {
  encode(
    message: GetJobCategoriesResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.categories) {
      JobCategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetJobCategoriesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetJobCategoriesResponse,
    } as GetJobCategoriesResponse;
    message.categories = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categories.push(JobCategory.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobCategoriesResponse {
    const message = {
      ...baseGetJobCategoriesResponse,
    } as GetJobCategoriesResponse;
    message.categories = [];
    if (object.categories !== undefined && object.categories !== null) {
      for (const e of object.categories) {
        message.categories.push(JobCategory.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetJobCategoriesResponse): unknown {
    const obj: any = {};
    if (message.categories) {
      obj.categories = message.categories.map((e) =>
        e ? JobCategory.toJSON(e) : undefined,
      );
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetJobCategoriesResponse>,
  ): GetJobCategoriesResponse {
    const message = {
      ...baseGetJobCategoriesResponse,
    } as GetJobCategoriesResponse;
    message.categories = [];
    if (object.categories !== undefined && object.categories !== null) {
      for (const e of object.categories) {
        message.categories.push(JobCategory.fromPartial(e));
      }
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
