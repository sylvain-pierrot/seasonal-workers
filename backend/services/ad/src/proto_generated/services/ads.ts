/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Ad } from '../models/ads';

export const protobufPackage = 'services';

export interface CreateExperienceRequest {
  ad: Ad | undefined;
}

export interface CreateExperienceResponse {
  id: string;
}

export interface GetExperiencesRequest {
  id: string;
}

export interface GetExperiencesResponse {
  ads: Ad[];
}

export interface GetExperienceRequest {
  id: string;
}

export interface GetExperienceResponse {
  ad: Ad | undefined;
}

export interface UpdateExperienceRequest {
  id: string;
  ad: Ad | undefined;
}

export interface UpdateExperienceResponse {
  id: string;
}

export interface DeleteExperienceRequest {
  id: string;
  ad: Ad | undefined;
}

export interface DeleteExperienceResponse {
  id: string;
}

const baseCreateExperienceRequest: object = {};

export const CreateExperienceRequest = {
  encode(
    message: CreateExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateExperienceRequest,
    } as CreateExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExperienceRequest {
    const message = {
      ...baseCreateExperienceRequest,
    } as CreateExperienceRequest;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: CreateExperienceRequest): unknown {
    const obj: any = {};
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateExperienceRequest>,
  ): CreateExperienceRequest {
    const message = {
      ...baseCreateExperienceRequest,
    } as CreateExperienceRequest;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseCreateExperienceResponse: object = { id: '' };

export const CreateExperienceResponse = {
  encode(
    message: CreateExperienceResponse,
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
  ): CreateExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateExperienceResponse,
    } as CreateExperienceResponse;
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

  fromJSON(object: any): CreateExperienceResponse {
    const message = {
      ...baseCreateExperienceResponse,
    } as CreateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: CreateExperienceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateExperienceResponse>,
  ): CreateExperienceResponse {
    const message = {
      ...baseCreateExperienceResponse,
    } as CreateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetExperiencesRequest: object = { id: '' };

export const GetExperiencesRequest = {
  encode(
    message: GetExperiencesRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperiencesRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperiencesRequest } as GetExperiencesRequest;
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

  fromJSON(object: any): GetExperiencesRequest {
    const message = { ...baseGetExperiencesRequest } as GetExperiencesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: GetExperiencesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetExperiencesRequest>,
  ): GetExperiencesRequest {
    const message = { ...baseGetExperiencesRequest } as GetExperiencesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetExperiencesResponse: object = {};

export const GetExperiencesResponse = {
  encode(
    message: GetExperiencesResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.ads) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperiencesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperiencesResponse } as GetExperiencesResponse;
    message.ads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ads.push(Ad.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExperiencesResponse {
    const message = { ...baseGetExperiencesResponse } as GetExperiencesResponse;
    message.ads = [];
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(Ad.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetExperiencesResponse): unknown {
    const obj: any = {};
    if (message.ads) {
      obj.ads = message.ads.map((e) => (e ? Ad.toJSON(e) : undefined));
    } else {
      obj.ads = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetExperiencesResponse>,
  ): GetExperiencesResponse {
    const message = { ...baseGetExperiencesResponse } as GetExperiencesResponse;
    message.ads = [];
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(Ad.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetExperienceRequest: object = { id: '' };

export const GetExperienceRequest = {
  encode(
    message: GetExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperienceRequest } as GetExperienceRequest;
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

  fromJSON(object: any): GetExperienceRequest {
    const message = { ...baseGetExperienceRequest } as GetExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: GetExperienceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetExperienceRequest>): GetExperienceRequest {
    const message = { ...baseGetExperienceRequest } as GetExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetExperienceResponse: object = {};

export const GetExperienceResponse = {
  encode(
    message: GetExperienceResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperienceResponse } as GetExperienceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExperienceResponse {
    const message = { ...baseGetExperienceResponse } as GetExperienceResponse;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: GetExperienceResponse): unknown {
    const obj: any = {};
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetExperienceResponse>,
  ): GetExperienceResponse {
    const message = { ...baseGetExperienceResponse } as GetExperienceResponse;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseUpdateExperienceRequest: object = { id: '' };

export const UpdateExperienceRequest = {
  encode(
    message: UpdateExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateExperienceRequest,
    } as UpdateExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExperienceRequest {
    const message = {
      ...baseUpdateExperienceRequest,
    } as UpdateExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: UpdateExperienceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateExperienceRequest>,
  ): UpdateExperienceRequest {
    const message = {
      ...baseUpdateExperienceRequest,
    } as UpdateExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseUpdateExperienceResponse: object = { id: '' };

export const UpdateExperienceResponse = {
  encode(
    message: UpdateExperienceResponse,
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
  ): UpdateExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateExperienceResponse,
    } as UpdateExperienceResponse;
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

  fromJSON(object: any): UpdateExperienceResponse {
    const message = {
      ...baseUpdateExperienceResponse,
    } as UpdateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: UpdateExperienceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateExperienceResponse>,
  ): UpdateExperienceResponse {
    const message = {
      ...baseUpdateExperienceResponse,
    } as UpdateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseDeleteExperienceRequest: object = { id: '' };

export const DeleteExperienceRequest = {
  encode(
    message: DeleteExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteExperienceRequest,
    } as DeleteExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExperienceRequest {
    const message = {
      ...baseDeleteExperienceRequest,
    } as DeleteExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: DeleteExperienceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteExperienceRequest>,
  ): DeleteExperienceRequest {
    const message = {
      ...baseDeleteExperienceRequest,
    } as DeleteExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseDeleteExperienceResponse: object = { id: '' };

export const DeleteExperienceResponse = {
  encode(
    message: DeleteExperienceResponse,
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
  ): DeleteExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteExperienceResponse,
    } as DeleteExperienceResponse;
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

  fromJSON(object: any): DeleteExperienceResponse {
    const message = {
      ...baseDeleteExperienceResponse,
    } as DeleteExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: DeleteExperienceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteExperienceResponse>,
  ): DeleteExperienceResponse {
    const message = {
      ...baseDeleteExperienceResponse,
    } as DeleteExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
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
