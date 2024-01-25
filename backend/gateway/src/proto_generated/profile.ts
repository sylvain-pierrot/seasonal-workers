/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  nationality: string;
  phone: string;
  description: string;
  cvPath: string;
  picurePath: string;
  deleted: boolean;
}

function createBaseProfile(): Profile {
  return {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    nationality: "",
    phone: "",
    description: "",
    cvPath: "",
    picurePath: "",
    deleted: false,
  };
}

export const Profile = {
  encode(message: Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.gender !== "") {
      writer.uint32(42).string(message.gender);
    }
    if (message.nationality !== "") {
      writer.uint32(50).string(message.nationality);
    }
    if (message.phone !== "") {
      writer.uint32(58).string(message.phone);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.cvPath !== "") {
      writer.uint32(74).string(message.cvPath);
    }
    if (message.picurePath !== "") {
      writer.uint32(82).string(message.picurePath);
    }
    if (message.deleted === true) {
      writer.uint32(88).bool(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
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

          message.firstName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gender = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nationality = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cvPath = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.picurePath = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.deleted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Profile {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      gender: isSet(object.gender) ? globalThis.String(object.gender) : "",
      nationality: isSet(object.nationality) ? globalThis.String(object.nationality) : "",
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      cvPath: isSet(object.cvPath) ? globalThis.String(object.cvPath) : "",
      picurePath: isSet(object.picurePath) ? globalThis.String(object.picurePath) : "",
      deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
    };
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
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
    if (message.nationality !== "") {
      obj.nationality = message.nationality;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.cvPath !== "") {
      obj.cvPath = message.cvPath;
    }
    if (message.picurePath !== "") {
      obj.picurePath = message.picurePath;
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Profile>, I>>(base?: I): Profile {
    return Profile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Profile>, I>>(object: I): Profile {
    const message = createBaseProfile();
    message.id = object.id ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.gender = object.gender ?? "";
    message.nationality = object.nationality ?? "";
    message.phone = object.phone ?? "";
    message.description = object.description ?? "";
    message.cvPath = object.cvPath ?? "";
    message.picurePath = object.picurePath ?? "";
    message.deleted = object.deleted ?? false;
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
