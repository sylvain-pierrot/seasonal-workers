/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = '';

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

const baseProfile: object = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  nationality: '',
  phone: '',
  description: '',
  cvPath: '',
  picurePath: '',
  deleted: false,
};

export const Profile = {
  encode(message: Profile, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== '') {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(26).string(message.lastName);
    }
    if (message.email !== '') {
      writer.uint32(34).string(message.email);
    }
    if (message.gender !== '') {
      writer.uint32(42).string(message.gender);
    }
    if (message.nationality !== '') {
      writer.uint32(50).string(message.nationality);
    }
    if (message.phone !== '') {
      writer.uint32(58).string(message.phone);
    }
    if (message.description !== '') {
      writer.uint32(66).string(message.description);
    }
    if (message.cvPath !== '') {
      writer.uint32(74).string(message.cvPath);
    }
    if (message.picurePath !== '') {
      writer.uint32(82).string(message.picurePath);
    }
    if (message.deleted === true) {
      writer.uint32(88).bool(message.deleted);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.gender = reader.string();
          break;
        case 6:
          message.nationality = reader.string();
          break;
        case 7:
          message.phone = reader.string();
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.cvPath = reader.string();
          break;
        case 10:
          message.picurePath = reader.string();
          break;
        case 11:
          message.deleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = '';
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = '';
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender);
    } else {
      message.gender = '';
    }
    if (object.nationality !== undefined && object.nationality !== null) {
      message.nationality = String(object.nationality);
    } else {
      message.nationality = '';
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = '';
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }
    if (object.cvPath !== undefined && object.cvPath !== null) {
      message.cvPath = String(object.cvPath);
    } else {
      message.cvPath = '';
    }
    if (object.picurePath !== undefined && object.picurePath !== null) {
      message.picurePath = String(object.picurePath);
    } else {
      message.picurePath = '';
    }
    if (object.deleted !== undefined && object.deleted !== null) {
      message.deleted = Boolean(object.deleted);
    } else {
      message.deleted = false;
    }
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.gender !== undefined && (obj.gender = message.gender);
    message.nationality !== undefined &&
      (obj.nationality = message.nationality);
    message.phone !== undefined && (obj.phone = message.phone);
    message.description !== undefined &&
      (obj.description = message.description);
    message.cvPath !== undefined && (obj.cvPath = message.cvPath);
    message.picurePath !== undefined && (obj.picurePath = message.picurePath);
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = '';
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = '';
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = '';
    }
    if (object.nationality !== undefined && object.nationality !== null) {
      message.nationality = object.nationality;
    } else {
      message.nationality = '';
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = '';
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }
    if (object.cvPath !== undefined && object.cvPath !== null) {
      message.cvPath = object.cvPath;
    } else {
      message.cvPath = '';
    }
    if (object.picurePath !== undefined && object.picurePath !== null) {
      message.picurePath = object.picurePath;
    } else {
      message.picurePath = '';
    }
    if (object.deleted !== undefined && object.deleted !== null) {
      message.deleted = object.deleted;
    } else {
      message.deleted = false;
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
