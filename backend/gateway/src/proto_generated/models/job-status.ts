/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Ad } from "./ads";

export const protobufPackage = "models";

export enum JobOfferStatusEnum {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
  UNRECOGNIZED = -1,
}

export function jobOfferStatusEnumFromJSON(object: any): JobOfferStatusEnum {
  switch (object) {
    case 0:
    case "PENDING":
      return JobOfferStatusEnum.PENDING;
    case 1:
    case "APPROVED":
      return JobOfferStatusEnum.APPROVED;
    case 2:
    case "REJECTED":
      return JobOfferStatusEnum.REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JobOfferStatusEnum.UNRECOGNIZED;
  }
}

export function jobOfferStatusEnumToJSON(object: JobOfferStatusEnum): string {
  switch (object) {
    case JobOfferStatusEnum.PENDING:
      return "PENDING";
    case JobOfferStatusEnum.APPROVED:
      return "APPROVED";
    case JobOfferStatusEnum.REJECTED:
      return "REJECTED";
    case JobOfferStatusEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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

function createBaseJobOfferStatus(): JobOfferStatus {
  return { statusId: "", createdAt: "", workerId: "", offerId: "", status: 0, offer: undefined };
}

export const JobOfferStatus = {
  encode(message: JobOfferStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusId !== "") {
      writer.uint32(10).string(message.statusId);
    }
    if (message.createdAt !== "") {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.workerId !== "") {
      writer.uint32(26).string(message.workerId);
    }
    if (message.offerId !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): JobOfferStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobOfferStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.statusId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.workerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.offerId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.offer = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobOfferStatus {
    return {
      statusId: isSet(object.statusId) ? globalThis.String(object.statusId) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      workerId: isSet(object.workerId) ? globalThis.String(object.workerId) : "",
      offerId: isSet(object.offerId) ? globalThis.String(object.offerId) : "",
      status: isSet(object.status) ? jobOfferStatusEnumFromJSON(object.status) : 0,
      offer: isSet(object.offer) ? Ad.fromJSON(object.offer) : undefined,
    };
  },

  toJSON(message: JobOfferStatus): unknown {
    const obj: any = {};
    if (message.statusId !== "") {
      obj.statusId = message.statusId;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.workerId !== "") {
      obj.workerId = message.workerId;
    }
    if (message.offerId !== "") {
      obj.offerId = message.offerId;
    }
    if (message.status !== 0) {
      obj.status = jobOfferStatusEnumToJSON(message.status);
    }
    if (message.offer !== undefined) {
      obj.offer = Ad.toJSON(message.offer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobOfferStatus>, I>>(base?: I): JobOfferStatus {
    return JobOfferStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobOfferStatus>, I>>(object: I): JobOfferStatus {
    const message = createBaseJobOfferStatus();
    message.statusId = object.statusId ?? "";
    message.createdAt = object.createdAt ?? "";
    message.workerId = object.workerId ?? "";
    message.offerId = object.offerId ?? "";
    message.status = object.status ?? 0;
    message.offer = (object.offer !== undefined && object.offer !== null) ? Ad.fromPartial(object.offer) : undefined;
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
