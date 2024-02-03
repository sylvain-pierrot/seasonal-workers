/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Ad } from "../models/ads";

export const protobufPackage = "services";

export interface GetJobOffersRecommendationRequest {
  userId: string;
}

export interface GetJobOffersRecommendationResponse {
  jobOffers: Ad[];
}

function createBaseGetJobOffersRecommendationRequest(): GetJobOffersRecommendationRequest {
  return { userId: "" };
}

export const GetJobOffersRecommendationRequest = {
  encode(message: GetJobOffersRecommendationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOffersRecommendationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOffersRecommendationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersRecommendationRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: GetJobOffersRecommendationRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOffersRecommendationRequest>, I>>(
    base?: I,
  ): GetJobOffersRecommendationRequest {
    return GetJobOffersRecommendationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOffersRecommendationRequest>, I>>(
    object: I,
  ): GetJobOffersRecommendationRequest {
    const message = createBaseGetJobOffersRecommendationRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetJobOffersRecommendationResponse(): GetJobOffersRecommendationResponse {
  return { jobOffers: [] };
}

export const GetJobOffersRecommendationResponse = {
  encode(message: GetJobOffersRecommendationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.jobOffers) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOffersRecommendationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOffersRecommendationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobOffers.push(Ad.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersRecommendationResponse {
    return {
      jobOffers: globalThis.Array.isArray(object?.jobOffers) ? object.jobOffers.map((e: any) => Ad.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetJobOffersRecommendationResponse): unknown {
    const obj: any = {};
    if (message.jobOffers?.length) {
      obj.jobOffers = message.jobOffers.map((e) => Ad.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOffersRecommendationResponse>, I>>(
    base?: I,
  ): GetJobOffersRecommendationResponse {
    return GetJobOffersRecommendationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOffersRecommendationResponse>, I>>(
    object: I,
  ): GetJobOffersRecommendationResponse {
    const message = createBaseGetJobOffersRecommendationResponse();
    message.jobOffers = object.jobOffers?.map((e) => Ad.fromPartial(e)) || [];
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
