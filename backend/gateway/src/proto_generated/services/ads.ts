/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Ad } from "../models/ads";

export const protobufPackage = "services";

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

function createBaseCreateExperienceRequest(): CreateExperienceRequest {
  return { ad: undefined };
}

export const CreateExperienceRequest = {
  encode(message: CreateExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExperienceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExperienceRequest {
    return { ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined };
  },

  toJSON(message: CreateExperienceRequest): unknown {
    const obj: any = {};
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExperienceRequest>, I>>(base?: I): CreateExperienceRequest {
    return CreateExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExperienceRequest>, I>>(object: I): CreateExperienceRequest {
    const message = createBaseCreateExperienceRequest();
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseCreateExperienceResponse(): CreateExperienceResponse {
  return { id: "" };
}

export const CreateExperienceResponse = {
  encode(message: CreateExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExperienceResponse();
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

  fromJSON(object: any): CreateExperienceResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateExperienceResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExperienceResponse>, I>>(base?: I): CreateExperienceResponse {
    return CreateExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExperienceResponse>, I>>(object: I): CreateExperienceResponse {
    const message = createBaseCreateExperienceResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetExperiencesRequest(): GetExperiencesRequest {
  return { id: "" };
}

export const GetExperiencesRequest = {
  encode(message: GetExperiencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperiencesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperiencesRequest();
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

  fromJSON(object: any): GetExperiencesRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetExperiencesRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperiencesRequest>, I>>(base?: I): GetExperiencesRequest {
    return GetExperiencesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperiencesRequest>, I>>(object: I): GetExperiencesRequest {
    const message = createBaseGetExperiencesRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetExperiencesResponse(): GetExperiencesResponse {
  return { ads: [] };
}

export const GetExperiencesResponse = {
  encode(message: GetExperiencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ads) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperiencesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperiencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ads.push(Ad.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExperiencesResponse {
    return { ads: globalThis.Array.isArray(object?.ads) ? object.ads.map((e: any) => Ad.fromJSON(e)) : [] };
  },

  toJSON(message: GetExperiencesResponse): unknown {
    const obj: any = {};
    if (message.ads?.length) {
      obj.ads = message.ads.map((e) => Ad.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperiencesResponse>, I>>(base?: I): GetExperiencesResponse {
    return GetExperiencesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperiencesResponse>, I>>(object: I): GetExperiencesResponse {
    const message = createBaseGetExperiencesResponse();
    message.ads = object.ads?.map((e) => Ad.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetExperienceRequest(): GetExperienceRequest {
  return { id: "" };
}

export const GetExperienceRequest = {
  encode(message: GetExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperienceRequest();
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

  fromJSON(object: any): GetExperienceRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetExperienceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperienceRequest>, I>>(base?: I): GetExperienceRequest {
    return GetExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperienceRequest>, I>>(object: I): GetExperienceRequest {
    const message = createBaseGetExperienceRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetExperienceResponse(): GetExperienceResponse {
  return { ad: undefined };
}

export const GetExperienceResponse = {
  encode(message: GetExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExperienceResponse {
    return { ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined };
  },

  toJSON(message: GetExperienceResponse): unknown {
    const obj: any = {};
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperienceResponse>, I>>(base?: I): GetExperienceResponse {
    return GetExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperienceResponse>, I>>(object: I): GetExperienceResponse {
    const message = createBaseGetExperienceResponse();
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseUpdateExperienceRequest(): UpdateExperienceRequest {
  return { id: "", ad: undefined };
}

export const UpdateExperienceRequest = {
  encode(message: UpdateExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExperienceRequest();
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

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExperienceRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined,
    };
  },

  toJSON(message: UpdateExperienceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExperienceRequest>, I>>(base?: I): UpdateExperienceRequest {
    return UpdateExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExperienceRequest>, I>>(object: I): UpdateExperienceRequest {
    const message = createBaseUpdateExperienceRequest();
    message.id = object.id ?? "";
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseUpdateExperienceResponse(): UpdateExperienceResponse {
  return { id: "" };
}

export const UpdateExperienceResponse = {
  encode(message: UpdateExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExperienceResponse();
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

  fromJSON(object: any): UpdateExperienceResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UpdateExperienceResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExperienceResponse>, I>>(base?: I): UpdateExperienceResponse {
    return UpdateExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExperienceResponse>, I>>(object: I): UpdateExperienceResponse {
    const message = createBaseUpdateExperienceResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteExperienceRequest(): DeleteExperienceRequest {
  return { id: "", ad: undefined };
}

export const DeleteExperienceRequest = {
  encode(message: DeleteExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExperienceRequest();
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

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExperienceRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined,
    };
  },

  toJSON(message: DeleteExperienceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExperienceRequest>, I>>(base?: I): DeleteExperienceRequest {
    return DeleteExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExperienceRequest>, I>>(object: I): DeleteExperienceRequest {
    const message = createBaseDeleteExperienceRequest();
    message.id = object.id ?? "";
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseDeleteExperienceResponse(): DeleteExperienceResponse {
  return { id: "" };
}

export const DeleteExperienceResponse = {
  encode(message: DeleteExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExperienceResponse();
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

  fromJSON(object: any): DeleteExperienceResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteExperienceResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExperienceResponse>, I>>(base?: I): DeleteExperienceResponse {
    return DeleteExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExperienceResponse>, I>>(object: I): DeleteExperienceResponse {
    const message = createBaseDeleteExperienceResponse();
    message.id = object.id ?? "";
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
