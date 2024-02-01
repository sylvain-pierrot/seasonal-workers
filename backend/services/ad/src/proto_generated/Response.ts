/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
  GetExperiencesResponse,
  GetExperienceResponse,
  CreateExperienceResponse,
  UpdateExperienceResponse,
  DeleteExperienceResponse,
} from './services/ads';

export const protobufPackage = '';

export interface Error {
  errorMessage: string;
  errorCode: number;
}

export interface Response {
  requestId: string;
  error: Error | undefined;
  getExperiencesResponse: GetExperiencesResponse | undefined;
  getExperienceResponse: GetExperienceResponse | undefined;
  createExperienceResponse: CreateExperienceResponse | undefined;
  updateExperienceResponse: UpdateExperienceResponse | undefined;
  deleteExperienceResponse: DeleteExperienceResponse | undefined;
}

const baseError: object = { errorMessage: '', errorCode: 0 };

export const Error = {
  encode(message: Error, writer: Writer = Writer.create()): Writer {
    if (message.errorMessage !== '') {
      writer.uint32(10).string(message.errorMessage);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).uint32(message.errorCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseError } as Error;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorMessage = reader.string();
          break;
        case 2:
          message.errorCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    const message = { ...baseError } as Error;
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = String(object.errorMessage);
    } else {
      message.errorMessage = '';
    }
    if (object.errorCode !== undefined && object.errorCode !== null) {
      message.errorCode = Number(object.errorCode);
    } else {
      message.errorCode = 0;
    }
    return message;
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    message.errorCode !== undefined && (obj.errorCode = message.errorCode);
    return obj;
  },

  fromPartial(object: DeepPartial<Error>): Error {
    const message = { ...baseError } as Error;
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = object.errorMessage;
    } else {
      message.errorMessage = '';
    }
    if (object.errorCode !== undefined && object.errorCode !== null) {
      message.errorCode = object.errorCode;
    } else {
      message.errorCode = 0;
    }
    return message;
  },
};

const baseResponse: object = { requestId: '' };

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== '') {
      writer.uint32(10).string(message.requestId);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.getExperiencesResponse !== undefined) {
      GetExperiencesResponse.encode(
        message.getExperiencesResponse,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getExperienceResponse !== undefined) {
      GetExperienceResponse.encode(
        message.getExperienceResponse,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.createExperienceResponse !== undefined) {
      CreateExperienceResponse.encode(
        message.createExperienceResponse,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.updateExperienceResponse !== undefined) {
      UpdateExperienceResponse.encode(
        message.updateExperienceResponse,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteExperienceResponse !== undefined) {
      DeleteExperienceResponse.encode(
        message.deleteExperienceResponse,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 3:
          message.getExperiencesResponse = GetExperiencesResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.getExperienceResponse = GetExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.createExperienceResponse = CreateExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.updateExperienceResponse = UpdateExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.deleteExperienceResponse = DeleteExperienceResponse.decode(
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

  fromJSON(object: any): Response {
    const message = { ...baseResponse } as Response;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = '';
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    if (
      object.getExperiencesResponse !== undefined &&
      object.getExperiencesResponse !== null
    ) {
      message.getExperiencesResponse = GetExperiencesResponse.fromJSON(
        object.getExperiencesResponse,
      );
    } else {
      message.getExperiencesResponse = undefined;
    }
    if (
      object.getExperienceResponse !== undefined &&
      object.getExperienceResponse !== null
    ) {
      message.getExperienceResponse = GetExperienceResponse.fromJSON(
        object.getExperienceResponse,
      );
    } else {
      message.getExperienceResponse = undefined;
    }
    if (
      object.createExperienceResponse !== undefined &&
      object.createExperienceResponse !== null
    ) {
      message.createExperienceResponse = CreateExperienceResponse.fromJSON(
        object.createExperienceResponse,
      );
    } else {
      message.createExperienceResponse = undefined;
    }
    if (
      object.updateExperienceResponse !== undefined &&
      object.updateExperienceResponse !== null
    ) {
      message.updateExperienceResponse = UpdateExperienceResponse.fromJSON(
        object.updateExperienceResponse,
      );
    } else {
      message.updateExperienceResponse = undefined;
    }
    if (
      object.deleteExperienceResponse !== undefined &&
      object.deleteExperienceResponse !== null
    ) {
      message.deleteExperienceResponse = DeleteExperienceResponse.fromJSON(
        object.deleteExperienceResponse,
      );
    } else {
      message.deleteExperienceResponse = undefined;
    }
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.getExperiencesResponse !== undefined &&
      (obj.getExperiencesResponse = message.getExperiencesResponse
        ? GetExperiencesResponse.toJSON(message.getExperiencesResponse)
        : undefined);
    message.getExperienceResponse !== undefined &&
      (obj.getExperienceResponse = message.getExperienceResponse
        ? GetExperienceResponse.toJSON(message.getExperienceResponse)
        : undefined);
    message.createExperienceResponse !== undefined &&
      (obj.createExperienceResponse = message.createExperienceResponse
        ? CreateExperienceResponse.toJSON(message.createExperienceResponse)
        : undefined);
    message.updateExperienceResponse !== undefined &&
      (obj.updateExperienceResponse = message.updateExperienceResponse
        ? UpdateExperienceResponse.toJSON(message.updateExperienceResponse)
        : undefined);
    message.deleteExperienceResponse !== undefined &&
      (obj.deleteExperienceResponse = message.deleteExperienceResponse
        ? DeleteExperienceResponse.toJSON(message.deleteExperienceResponse)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = { ...baseResponse } as Response;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = '';
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    if (
      object.getExperiencesResponse !== undefined &&
      object.getExperiencesResponse !== null
    ) {
      message.getExperiencesResponse = GetExperiencesResponse.fromPartial(
        object.getExperiencesResponse,
      );
    } else {
      message.getExperiencesResponse = undefined;
    }
    if (
      object.getExperienceResponse !== undefined &&
      object.getExperienceResponse !== null
    ) {
      message.getExperienceResponse = GetExperienceResponse.fromPartial(
        object.getExperienceResponse,
      );
    } else {
      message.getExperienceResponse = undefined;
    }
    if (
      object.createExperienceResponse !== undefined &&
      object.createExperienceResponse !== null
    ) {
      message.createExperienceResponse = CreateExperienceResponse.fromPartial(
        object.createExperienceResponse,
      );
    } else {
      message.createExperienceResponse = undefined;
    }
    if (
      object.updateExperienceResponse !== undefined &&
      object.updateExperienceResponse !== null
    ) {
      message.updateExperienceResponse = UpdateExperienceResponse.fromPartial(
        object.updateExperienceResponse,
      );
    } else {
      message.updateExperienceResponse = undefined;
    }
    if (
      object.deleteExperienceResponse !== undefined &&
      object.deleteExperienceResponse !== null
    ) {
      message.deleteExperienceResponse = DeleteExperienceResponse.fromPartial(
        object.deleteExperienceResponse,
      );
    } else {
      message.deleteExperienceResponse = undefined;
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
