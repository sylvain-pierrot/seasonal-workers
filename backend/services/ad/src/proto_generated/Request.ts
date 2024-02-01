/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
  GetExperiencesRequest,
  GetExperienceRequest,
  CreateExperienceRequest,
  UpdateExperienceRequest,
  DeleteExperienceRequest,
} from './services/ads';

export const protobufPackage = '';

/** Message that contains a generic request */
export interface Request {
  requestId: string;
  getExperiencesRequest: GetExperiencesRequest | undefined;
  getExperienceRequest: GetExperienceRequest | undefined;
  createExperienceRequest: CreateExperienceRequest | undefined;
  updateExperienceRequest: UpdateExperienceRequest | undefined;
  deleteExperienceRequest: DeleteExperienceRequest | undefined;
}

const baseRequest: object = { requestId: '' };

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== '') {
      writer.uint32(10).string(message.requestId);
    }
    if (message.getExperiencesRequest !== undefined) {
      GetExperiencesRequest.encode(
        message.getExperiencesRequest,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getExperienceRequest !== undefined) {
      GetExperienceRequest.encode(
        message.getExperienceRequest,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.createExperienceRequest !== undefined) {
      CreateExperienceRequest.encode(
        message.createExperienceRequest,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.updateExperienceRequest !== undefined) {
      UpdateExperienceRequest.encode(
        message.updateExperienceRequest,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.deleteExperienceRequest !== undefined) {
      DeleteExperienceRequest.encode(
        message.deleteExperienceRequest,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.getExperiencesRequest = GetExperiencesRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.getExperienceRequest = GetExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.createExperienceRequest = CreateExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.updateExperienceRequest = UpdateExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.deleteExperienceRequest = DeleteExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    const message = { ...baseRequest } as Request;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = '';
    }
    if (
      object.getExperiencesRequest !== undefined &&
      object.getExperiencesRequest !== null
    ) {
      message.getExperiencesRequest = GetExperiencesRequest.fromJSON(
        object.getExperiencesRequest,
      );
    } else {
      message.getExperiencesRequest = undefined;
    }
    if (
      object.getExperienceRequest !== undefined &&
      object.getExperienceRequest !== null
    ) {
      message.getExperienceRequest = GetExperienceRequest.fromJSON(
        object.getExperienceRequest,
      );
    } else {
      message.getExperienceRequest = undefined;
    }
    if (
      object.createExperienceRequest !== undefined &&
      object.createExperienceRequest !== null
    ) {
      message.createExperienceRequest = CreateExperienceRequest.fromJSON(
        object.createExperienceRequest,
      );
    } else {
      message.createExperienceRequest = undefined;
    }
    if (
      object.updateExperienceRequest !== undefined &&
      object.updateExperienceRequest !== null
    ) {
      message.updateExperienceRequest = UpdateExperienceRequest.fromJSON(
        object.updateExperienceRequest,
      );
    } else {
      message.updateExperienceRequest = undefined;
    }
    if (
      object.deleteExperienceRequest !== undefined &&
      object.deleteExperienceRequest !== null
    ) {
      message.deleteExperienceRequest = DeleteExperienceRequest.fromJSON(
        object.deleteExperienceRequest,
      );
    } else {
      message.deleteExperienceRequest = undefined;
    }
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.getExperiencesRequest !== undefined &&
      (obj.getExperiencesRequest = message.getExperiencesRequest
        ? GetExperiencesRequest.toJSON(message.getExperiencesRequest)
        : undefined);
    message.getExperienceRequest !== undefined &&
      (obj.getExperienceRequest = message.getExperienceRequest
        ? GetExperienceRequest.toJSON(message.getExperienceRequest)
        : undefined);
    message.createExperienceRequest !== undefined &&
      (obj.createExperienceRequest = message.createExperienceRequest
        ? CreateExperienceRequest.toJSON(message.createExperienceRequest)
        : undefined);
    message.updateExperienceRequest !== undefined &&
      (obj.updateExperienceRequest = message.updateExperienceRequest
        ? UpdateExperienceRequest.toJSON(message.updateExperienceRequest)
        : undefined);
    message.deleteExperienceRequest !== undefined &&
      (obj.deleteExperienceRequest = message.deleteExperienceRequest
        ? DeleteExperienceRequest.toJSON(message.deleteExperienceRequest)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = '';
    }
    if (
      object.getExperiencesRequest !== undefined &&
      object.getExperiencesRequest !== null
    ) {
      message.getExperiencesRequest = GetExperiencesRequest.fromPartial(
        object.getExperiencesRequest,
      );
    } else {
      message.getExperiencesRequest = undefined;
    }
    if (
      object.getExperienceRequest !== undefined &&
      object.getExperienceRequest !== null
    ) {
      message.getExperienceRequest = GetExperienceRequest.fromPartial(
        object.getExperienceRequest,
      );
    } else {
      message.getExperienceRequest = undefined;
    }
    if (
      object.createExperienceRequest !== undefined &&
      object.createExperienceRequest !== null
    ) {
      message.createExperienceRequest = CreateExperienceRequest.fromPartial(
        object.createExperienceRequest,
      );
    } else {
      message.createExperienceRequest = undefined;
    }
    if (
      object.updateExperienceRequest !== undefined &&
      object.updateExperienceRequest !== null
    ) {
      message.updateExperienceRequest = UpdateExperienceRequest.fromPartial(
        object.updateExperienceRequest,
      );
    } else {
      message.updateExperienceRequest = undefined;
    }
    if (
      object.deleteExperienceRequest !== undefined &&
      object.deleteExperienceRequest !== null
    ) {
      message.deleteExperienceRequest = DeleteExperienceRequest.fromPartial(
        object.deleteExperienceRequest,
      );
    } else {
      message.deleteExperienceRequest = undefined;
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
