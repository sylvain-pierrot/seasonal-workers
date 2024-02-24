/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "models";

export interface User {
  id: string;
  kcId: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: string;
  createdAt: string;
  phone: string;
  country: string;
  lastAuth: string;
  deleted: boolean;
  description: string;
}

function createBaseUser(): User {
  return {
    id: "",
    kcId: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthDate: "",
    createdAt: "",
    phone: "",
    country: "",
    lastAuth: "",
    deleted: false,
    description: "",
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kcId !== "") {
      writer.uint32(18).string(message.kcId);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(34).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.gender !== "") {
      writer.uint32(50).string(message.gender);
    }
    if (message.birthDate !== "") {
      writer.uint32(58).string(message.birthDate);
    }
    if (message.createdAt !== "") {
      writer.uint32(66).string(message.createdAt);
    }
    if (message.phone !== "") {
      writer.uint32(74).string(message.phone);
    }
    if (message.country !== "") {
      writer.uint32(82).string(message.country);
    }
    if (message.lastAuth !== "") {
      writer.uint32(90).string(message.lastAuth);
    }
    if (message.deleted === true) {
      writer.uint32(96).bool(message.deleted);
    }
    if (message.description !== "") {
      writer.uint32(106).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.kcId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gender = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.birthDate = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.country = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.lastAuth = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      kcId: isSet(object.kcId) ? globalThis.String(object.kcId) : "",
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      gender: isSet(object.gender) ? globalThis.String(object.gender) : "",
      birthDate: isSet(object.birthDate) ? globalThis.String(object.birthDate) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      country: isSet(object.country) ? globalThis.String(object.country) : "",
      lastAuth: isSet(object.lastAuth) ? globalThis.String(object.lastAuth) : "",
      deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.kcId !== "") {
      obj.kcId = message.kcId;
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.gender !== "") {
      obj.gender = message.gender;
    }
    if (message.birthDate !== "") {
      obj.birthDate = message.birthDate;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.country !== "") {
      obj.country = message.country;
    }
    if (message.lastAuth !== "") {
      obj.lastAuth = message.lastAuth;
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.kcId = object.kcId ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.gender = object.gender ?? "";
    message.birthDate = object.birthDate ?? "";
    message.createdAt = object.createdAt ?? "";
    message.phone = object.phone ?? "";
    message.country = object.country ?? "";
    message.lastAuth = object.lastAuth ?? "";
    message.deleted = object.deleted ?? false;
    message.description = object.description ?? "";
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
