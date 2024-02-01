/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
  CreateExperienceResponse,
  DeleteExperienceResponse,
  GetExperienceResponse,
  GetExperiencesResponse,
  UpdateExperienceResponse,
} from "./services/ads";

export const protobufPackage = "";

export interface Error {
  errorMessage: string;
  errorCode: number;
}

export interface Response {
  requestId: string;
  error?: Error | undefined;
  getExperiencesResponse?: GetExperiencesResponse | undefined;
  getExperienceResponse?: GetExperienceResponse | undefined;
  createExperienceResponse?: CreateExperienceResponse | undefined;
  updateExperienceResponse?: UpdateExperienceResponse | undefined;
  deleteExperienceResponse?: DeleteExperienceResponse | undefined;
}

function createBaseError(): Error {
  return { errorMessage: "", errorCode: 0 };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorMessage !== "") {
      writer.uint32(10).string(message.errorMessage);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).uint32(message.errorCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.errorCode = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
      errorCode: isSet(object.errorCode) ? globalThis.Number(object.errorCode) : 0,
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.errorCode !== 0) {
      obj.errorCode = Math.round(message.errorCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.errorMessage = object.errorMessage ?? "";
    message.errorCode = object.errorCode ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    requestId: "",
    error: undefined,
    getExperiencesResponse: undefined,
    getExperienceResponse: undefined,
    createExperienceResponse: undefined,
    updateExperienceResponse: undefined,
    deleteExperienceResponse: undefined,
  };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.getExperiencesResponse !== undefined) {
      GetExperiencesResponse.encode(message.getExperiencesResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.getExperienceResponse !== undefined) {
      GetExperienceResponse.encode(message.getExperienceResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.createExperienceResponse !== undefined) {
      CreateExperienceResponse.encode(message.createExperienceResponse, writer.uint32(42).fork()).ldelim();
    }
    if (message.updateExperienceResponse !== undefined) {
      UpdateExperienceResponse.encode(message.updateExperienceResponse, writer.uint32(50).fork()).ldelim();
    }
    if (message.deleteExperienceResponse !== undefined) {
      DeleteExperienceResponse.encode(message.deleteExperienceResponse, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getExperiencesResponse = GetExperiencesResponse.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getExperienceResponse = GetExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createExperienceResponse = CreateExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateExperienceResponse = UpdateExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteExperienceResponse = DeleteExperienceResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      getExperiencesResponse: isSet(object.getExperiencesResponse)
        ? GetExperiencesResponse.fromJSON(object.getExperiencesResponse)
        : undefined,
      getExperienceResponse: isSet(object.getExperienceResponse)
        ? GetExperienceResponse.fromJSON(object.getExperienceResponse)
        : undefined,
      createExperienceResponse: isSet(object.createExperienceResponse)
        ? CreateExperienceResponse.fromJSON(object.createExperienceResponse)
        : undefined,
      updateExperienceResponse: isSet(object.updateExperienceResponse)
        ? UpdateExperienceResponse.fromJSON(object.updateExperienceResponse)
        : undefined,
      deleteExperienceResponse: isSet(object.deleteExperienceResponse)
        ? DeleteExperienceResponse.fromJSON(object.deleteExperienceResponse)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.getExperiencesResponse !== undefined) {
      obj.getExperiencesResponse = GetExperiencesResponse.toJSON(message.getExperiencesResponse);
    }
    if (message.getExperienceResponse !== undefined) {
      obj.getExperienceResponse = GetExperienceResponse.toJSON(message.getExperienceResponse);
    }
    if (message.createExperienceResponse !== undefined) {
      obj.createExperienceResponse = CreateExperienceResponse.toJSON(message.createExperienceResponse);
    }
    if (message.updateExperienceResponse !== undefined) {
      obj.updateExperienceResponse = UpdateExperienceResponse.toJSON(message.updateExperienceResponse);
    }
    if (message.deleteExperienceResponse !== undefined) {
      obj.deleteExperienceResponse = DeleteExperienceResponse.toJSON(message.deleteExperienceResponse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.requestId = object.requestId ?? "";
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.getExperiencesResponse =
      (object.getExperiencesResponse !== undefined && object.getExperiencesResponse !== null)
        ? GetExperiencesResponse.fromPartial(object.getExperiencesResponse)
        : undefined;
    message.getExperienceResponse =
      (object.getExperienceResponse !== undefined && object.getExperienceResponse !== null)
        ? GetExperienceResponse.fromPartial(object.getExperienceResponse)
        : undefined;
    message.createExperienceResponse =
      (object.createExperienceResponse !== undefined && object.createExperienceResponse !== null)
        ? CreateExperienceResponse.fromPartial(object.createExperienceResponse)
        : undefined;
    message.updateExperienceResponse =
      (object.updateExperienceResponse !== undefined && object.updateExperienceResponse !== null)
        ? UpdateExperienceResponse.fromPartial(object.updateExperienceResponse)
        : undefined;
    message.deleteExperienceResponse =
      (object.deleteExperienceResponse !== undefined && object.deleteExperienceResponse !== null)
        ? DeleteExperienceResponse.fromPartial(object.deleteExperienceResponse)
        : undefined;
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
