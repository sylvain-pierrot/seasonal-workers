/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { JobCategory } from "../models/job-category";
import {
  JobOfferStatus,
  JobOfferStatusEnum,
  jobOfferStatusEnumFromJSON,
  jobOfferStatusEnumToJSON,
} from "../models/job-status";

export const protobufPackage = "services";

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

export interface GetJobCategoriesRequest {
}

export interface GetJobCategoriesResponse {
  categories: JobCategory[];
}

function createBaseApplyJobOfferRequest(): ApplyJobOfferRequest {
  return { offerId: "", workerId: "" };
}

export const ApplyJobOfferRequest = {
  encode(message: ApplyJobOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offerId !== "") {
      writer.uint32(10).string(message.offerId);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplyJobOfferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyJobOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.offerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyJobOfferRequest {
    return {
      offerId: isSet(object.offerId) ? globalThis.String(object.offerId) : "",
      workerId: isSet(object.workerId) ? globalThis.String(object.workerId) : "",
    };
  },

  toJSON(message: ApplyJobOfferRequest): unknown {
    const obj: any = {};
    if (message.offerId !== "") {
      obj.offerId = message.offerId;
    }
    if (message.workerId !== "") {
      obj.workerId = message.workerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplyJobOfferRequest>, I>>(base?: I): ApplyJobOfferRequest {
    return ApplyJobOfferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplyJobOfferRequest>, I>>(object: I): ApplyJobOfferRequest {
    const message = createBaseApplyJobOfferRequest();
    message.offerId = object.offerId ?? "";
    message.workerId = object.workerId ?? "";
    return message;
  },
};

function createBaseApplyJobOfferResponse(): ApplyJobOfferResponse {
  return { id: "" };
}

export const ApplyJobOfferResponse = {
  encode(message: ApplyJobOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplyJobOfferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplyJobOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplyJobOfferResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: ApplyJobOfferResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplyJobOfferResponse>, I>>(base?: I): ApplyJobOfferResponse {
    return ApplyJobOfferResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplyJobOfferResponse>, I>>(object: I): ApplyJobOfferResponse {
    const message = createBaseApplyJobOfferResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUpdateJobOfferStatusRequest(): UpdateJobOfferStatusRequest {
  return { offerId: "", workerId: "", status: 0 };
}

export const UpdateJobOfferStatusRequest = {
  encode(message: UpdateJobOfferStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offerId !== "") {
      writer.uint32(10).string(message.offerId);
    }
    if (message.workerId !== "") {
      writer.uint32(18).string(message.workerId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJobOfferStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateJobOfferStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.offerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workerId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateJobOfferStatusRequest {
    return {
      offerId: isSet(object.offerId) ? globalThis.String(object.offerId) : "",
      workerId: isSet(object.workerId) ? globalThis.String(object.workerId) : "",
      status: isSet(object.status) ? jobOfferStatusEnumFromJSON(object.status) : 0,
    };
  },

  toJSON(message: UpdateJobOfferStatusRequest): unknown {
    const obj: any = {};
    if (message.offerId !== "") {
      obj.offerId = message.offerId;
    }
    if (message.workerId !== "") {
      obj.workerId = message.workerId;
    }
    if (message.status !== 0) {
      obj.status = jobOfferStatusEnumToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateJobOfferStatusRequest>, I>>(base?: I): UpdateJobOfferStatusRequest {
    return UpdateJobOfferStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateJobOfferStatusRequest>, I>>(object: I): UpdateJobOfferStatusRequest {
    const message = createBaseUpdateJobOfferStatusRequest();
    message.offerId = object.offerId ?? "";
    message.workerId = object.workerId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseUpdateJobOfferStatusResponse(): UpdateJobOfferStatusResponse {
  return { id: "" };
}

export const UpdateJobOfferStatusResponse = {
  encode(message: UpdateJobOfferStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateJobOfferStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateJobOfferStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateJobOfferStatusResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UpdateJobOfferStatusResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateJobOfferStatusResponse>, I>>(base?: I): UpdateJobOfferStatusResponse {
    return UpdateJobOfferStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateJobOfferStatusResponse>, I>>(object: I): UpdateJobOfferStatusResponse {
    const message = createBaseUpdateJobOfferStatusResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetJobOffersStatusRequest(): GetJobOffersStatusRequest {
  return { workerId: "" };
}

export const GetJobOffersStatusRequest = {
  encode(message: GetJobOffersStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workerId !== "") {
      writer.uint32(10).string(message.workerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOffersStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOffersStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.workerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersStatusRequest {
    return { workerId: isSet(object.workerId) ? globalThis.String(object.workerId) : "" };
  },

  toJSON(message: GetJobOffersStatusRequest): unknown {
    const obj: any = {};
    if (message.workerId !== "") {
      obj.workerId = message.workerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOffersStatusRequest>, I>>(base?: I): GetJobOffersStatusRequest {
    return GetJobOffersStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOffersStatusRequest>, I>>(object: I): GetJobOffersStatusRequest {
    const message = createBaseGetJobOffersStatusRequest();
    message.workerId = object.workerId ?? "";
    return message;
  },
};

function createBaseGetJobOffersStatusResponse(): GetJobOffersStatusResponse {
  return { jobOffers: [] };
}

export const GetJobOffersStatusResponse = {
  encode(message: GetJobOffersStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.jobOffers) {
      JobOfferStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOffersStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOffersStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobOffers.push(JobOfferStatus.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersStatusResponse {
    return {
      jobOffers: globalThis.Array.isArray(object?.jobOffers)
        ? object.jobOffers.map((e: any) => JobOfferStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetJobOffersStatusResponse): unknown {
    const obj: any = {};
    if (message.jobOffers?.length) {
      obj.jobOffers = message.jobOffers.map((e) => JobOfferStatus.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOffersStatusResponse>, I>>(base?: I): GetJobOffersStatusResponse {
    return GetJobOffersStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOffersStatusResponse>, I>>(object: I): GetJobOffersStatusResponse {
    const message = createBaseGetJobOffersStatusResponse();
    message.jobOffers = object.jobOffers?.map((e) => JobOfferStatus.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetJobCategoriesRequest(): GetJobCategoriesRequest {
  return {};
}

export const GetJobCategoriesRequest = {
  encode(_: GetJobCategoriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobCategoriesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobCategoriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetJobCategoriesRequest {
    return {};
  },

  toJSON(_: GetJobCategoriesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobCategoriesRequest>, I>>(base?: I): GetJobCategoriesRequest {
    return GetJobCategoriesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobCategoriesRequest>, I>>(_: I): GetJobCategoriesRequest {
    const message = createBaseGetJobCategoriesRequest();
    return message;
  },
};

function createBaseGetJobCategoriesResponse(): GetJobCategoriesResponse {
  return { categories: [] };
}

export const GetJobCategoriesResponse = {
  encode(message: GetJobCategoriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.categories) {
      JobCategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobCategoriesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobCategoriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.categories.push(JobCategory.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobCategoriesResponse {
    return {
      categories: globalThis.Array.isArray(object?.categories)
        ? object.categories.map((e: any) => JobCategory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetJobCategoriesResponse): unknown {
    const obj: any = {};
    if (message.categories?.length) {
      obj.categories = message.categories.map((e) => JobCategory.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobCategoriesResponse>, I>>(base?: I): GetJobCategoriesResponse {
    return GetJobCategoriesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobCategoriesResponse>, I>>(object: I): GetJobCategoriesResponse {
    const message = createBaseGetJobCategoriesResponse();
    message.categories = object.categories?.map((e) => JobCategory.fromPartial(e)) || [];
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
