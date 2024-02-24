/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { User } from "../models/profile";

export const protobufPackage = "services";

export interface CreateUserProfileRequest {
  profile: User | undefined;
}

export interface CreateUserProfileResponse {
  id: string;
}

export interface UpdateUserProfileRequest {
  profile: User | undefined;
}

export interface UpdateUserProfileResponse {
  id: string;
}

function createBaseCreateUserProfileRequest(): CreateUserProfileRequest {
  return { profile: undefined };
}

export const CreateUserProfileRequest = {
  encode(message: CreateUserProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      User.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserProfileRequest {
    return { profile: isSet(object.profile) ? User.fromJSON(object.profile) : undefined };
  },

  toJSON(message: CreateUserProfileRequest): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = User.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserProfileRequest>, I>>(base?: I): CreateUserProfileRequest {
    return CreateUserProfileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserProfileRequest>, I>>(object: I): CreateUserProfileRequest {
    const message = createBaseCreateUserProfileRequest();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? User.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseCreateUserProfileResponse(): CreateUserProfileResponse {
  return { id: "" };
}

export const CreateUserProfileResponse = {
  encode(message: CreateUserProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserProfileResponse();
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

  fromJSON(object: any): CreateUserProfileResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateUserProfileResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserProfileResponse>, I>>(base?: I): CreateUserProfileResponse {
    return CreateUserProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserProfileResponse>, I>>(object: I): CreateUserProfileResponse {
    const message = createBaseCreateUserProfileResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUpdateUserProfileRequest(): UpdateUserProfileRequest {
  return { profile: undefined };
}

export const UpdateUserProfileRequest = {
  encode(message: UpdateUserProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      User.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserProfileRequest {
    return { profile: isSet(object.profile) ? User.fromJSON(object.profile) : undefined };
  },

  toJSON(message: UpdateUserProfileRequest): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = User.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserProfileRequest>, I>>(base?: I): UpdateUserProfileRequest {
    return UpdateUserProfileRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserProfileRequest>, I>>(object: I): UpdateUserProfileRequest {
    const message = createBaseUpdateUserProfileRequest();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? User.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseUpdateUserProfileResponse(): UpdateUserProfileResponse {
  return { id: "" };
}

export const UpdateUserProfileResponse = {
  encode(message: UpdateUserProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserProfileResponse();
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

  fromJSON(object: any): UpdateUserProfileResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UpdateUserProfileResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserProfileResponse>, I>>(base?: I): UpdateUserProfileResponse {
    return UpdateUserProfileResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserProfileResponse>, I>>(object: I): UpdateUserProfileResponse {
    const message = createBaseUpdateUserProfileResponse();
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
