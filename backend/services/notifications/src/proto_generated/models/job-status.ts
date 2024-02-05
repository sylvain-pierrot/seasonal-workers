/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Ad } from './ad';

export const protobufPackage = 'models';

export enum JobOfferStatusEnum {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
  UNRECOGNIZED = -1,
}

export function jobOfferStatusEnumFromJSON(object: any): JobOfferStatusEnum {
  switch (object) {
    case 0:
    case 'PENDING':
      return JobOfferStatusEnum.PENDING;
    case 1:
    case 'APPROVED':
      return JobOfferStatusEnum.APPROVED;
    case 2:
    case 'REJECTED':
      return JobOfferStatusEnum.REJECTED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return JobOfferStatusEnum.UNRECOGNIZED;
  }
}

export function jobOfferStatusEnumToJSON(object: JobOfferStatusEnum): string {
  switch (object) {
    case JobOfferStatusEnum.PENDING:
      return 'PENDING';
    case JobOfferStatusEnum.APPROVED:
      return 'APPROVED';
    case JobOfferStatusEnum.REJECTED:
      return 'REJECTED';
    default:
      return 'UNKNOWN';
  }
}

export interface JobOfferStatus {
  statusId: string;
  createdAt: string;
  workerId: string;
  offerId: string;
  status: JobOfferStatusEnum;
  offer: Ad | undefined;
}

const baseJobOfferStatus: object = {
  statusId: '',
  createdAt: '',
  workerId: '',
  offerId: '',
  status: 0,
};

export const JobOfferStatus = {
  encode(message: JobOfferStatus, writer: Writer = Writer.create()): Writer {
    if (message.statusId !== '') {
      writer.uint32(10).string(message.statusId);
    }
    if (message.createdAt !== '') {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.workerId !== '') {
      writer.uint32(26).string(message.workerId);
    }
    if (message.offerId !== '') {
      writer.uint32(34).string(message.offerId);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.offer !== undefined) {
      Ad.encode(message.offer, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobOfferStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobOfferStatus } as JobOfferStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusId = reader.string();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.workerId = reader.string();
          break;
        case 4:
          message.offerId = reader.string();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.offer = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobOfferStatus {
    const message = { ...baseJobOfferStatus } as JobOfferStatus;
    if (object.statusId !== undefined && object.statusId !== null) {
      message.statusId = String(object.statusId);
    } else {
      message.statusId = '';
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = '';
    }
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = String(object.workerId);
    } else {
      message.workerId = '';
    }
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId);
    } else {
      message.offerId = '';
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = jobOfferStatusEnumFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Ad.fromJSON(object.offer);
    } else {
      message.offer = undefined;
    }
    return message;
  },

  toJSON(message: JobOfferStatus): unknown {
    const obj: any = {};
    message.statusId !== undefined && (obj.statusId = message.statusId);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.workerId !== undefined && (obj.workerId = message.workerId);
    message.offerId !== undefined && (obj.offerId = message.offerId);
    message.status !== undefined &&
      (obj.status = jobOfferStatusEnumToJSON(message.status));
    message.offer !== undefined &&
      (obj.offer = message.offer ? Ad.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<JobOfferStatus>): JobOfferStatus {
    const message = { ...baseJobOfferStatus } as JobOfferStatus;
    if (object.statusId !== undefined && object.statusId !== null) {
      message.statusId = object.statusId;
    } else {
      message.statusId = '';
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = '';
    }
    if (object.workerId !== undefined && object.workerId !== null) {
      message.workerId = object.workerId;
    } else {
      message.workerId = '';
    }
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId;
    } else {
      message.offerId = '';
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Ad.fromPartial(object.offer);
    } else {
      message.offer = undefined;
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
