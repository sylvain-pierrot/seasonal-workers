/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Ad } from '../models/ads';

export const protobufPackage = 'services';

export interface GetJobOffersRecommendationRequest {
  userId: string;
}

export interface GetJobOffersRecommendationResponse {
  jobOffers: Ad[];
}

const baseGetJobOffersRecommendationRequest: object = { userId: '' };

export const GetJobOffersRecommendationRequest = {
  encode(
    message: GetJobOffersRecommendationRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetJobOffersRecommendationRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetJobOffersRecommendationRequest,
    } as GetJobOffersRecommendationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersRecommendationRequest {
    const message = {
      ...baseGetJobOffersRecommendationRequest,
    } as GetJobOffersRecommendationRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = '';
    }
    return message;
  },

  toJSON(message: GetJobOffersRecommendationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetJobOffersRecommendationRequest>,
  ): GetJobOffersRecommendationRequest {
    const message = {
      ...baseGetJobOffersRecommendationRequest,
    } as GetJobOffersRecommendationRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = '';
    }
    return message;
  },
};

const baseGetJobOffersRecommendationResponse: object = {};

export const GetJobOffersRecommendationResponse = {
  encode(
    message: GetJobOffersRecommendationResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.jobOffers) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetJobOffersRecommendationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetJobOffersRecommendationResponse,
    } as GetJobOffersRecommendationResponse;
    message.jobOffers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobOffers.push(Ad.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersRecommendationResponse {
    const message = {
      ...baseGetJobOffersRecommendationResponse,
    } as GetJobOffersRecommendationResponse;
    message.jobOffers = [];
    if (object.jobOffers !== undefined && object.jobOffers !== null) {
      for (const e of object.jobOffers) {
        message.jobOffers.push(Ad.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetJobOffersRecommendationResponse): unknown {
    const obj: any = {};
    if (message.jobOffers) {
      obj.jobOffers = message.jobOffers.map((e) =>
        e ? Ad.toJSON(e) : undefined,
      );
    } else {
      obj.jobOffers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetJobOffersRecommendationResponse>,
  ): GetJobOffersRecommendationResponse {
    const message = {
      ...baseGetJobOffersRecommendationResponse,
    } as GetJobOffersRecommendationResponse;
    message.jobOffers = [];
    if (object.jobOffers !== undefined && object.jobOffers !== null) {
      for (const e of object.jobOffers) {
        message.jobOffers.push(Ad.fromPartial(e));
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
