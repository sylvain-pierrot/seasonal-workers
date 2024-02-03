/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { JobOfferStatus } from "../models/job-status";

export const protobufPackage = "services";

export interface ApplyJobOfferRequest {
  offerId: string;
  workerId: string;
}

export interface ApplyJobOfferResponse {
  id: string;
}

export interface GetJobOffersStatusRequest {
  workerId: string;
}

export interface GetJobOffersStatusResponse {
  jobOffers: JobOfferStatus[];
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
