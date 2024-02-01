/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
  CreateExperienceRequest,
  DeleteExperienceRequest,
  GetExperienceRequest,
  GetExperiencesRequest,
  UpdateExperienceRequest,
} from "./services/ads";

export const protobufPackage = "";

/** Message that contains a generic request */
export interface Request {
  requestId: string;
  getExperiencesRequest?: GetExperiencesRequest | undefined;
  getExperienceRequest?: GetExperienceRequest | undefined;
  createExperienceRequest?: CreateExperienceRequest | undefined;
  updateExperienceRequest?: UpdateExperienceRequest | undefined;
  deleteExperienceRequest?: DeleteExperienceRequest | undefined;
}

function createBaseRequest(): Request {
  return {
    requestId: "",
    getExperiencesRequest: undefined,
    getExperienceRequest: undefined,
    createExperienceRequest: undefined,
    updateExperienceRequest: undefined,
    deleteExperienceRequest: undefined,
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.getExperiencesRequest !== undefined) {
      GetExperiencesRequest.encode(message.getExperiencesRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.getExperienceRequest !== undefined) {
      GetExperienceRequest.encode(message.getExperienceRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.createExperienceRequest !== undefined) {
      CreateExperienceRequest.encode(message.createExperienceRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.updateExperienceRequest !== undefined) {
      UpdateExperienceRequest.encode(message.updateExperienceRequest, writer.uint32(42).fork()).ldelim();
    }
    if (message.deleteExperienceRequest !== undefined) {
      DeleteExperienceRequest.encode(message.deleteExperienceRequest, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
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

          message.getExperiencesRequest = GetExperiencesRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getExperienceRequest = GetExperienceRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createExperienceRequest = CreateExperienceRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updateExperienceRequest = UpdateExperienceRequest.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deleteExperienceRequest = DeleteExperienceRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      getExperiencesRequest: isSet(object.getExperiencesRequest)
        ? GetExperiencesRequest.fromJSON(object.getExperiencesRequest)
        : undefined,
      getExperienceRequest: isSet(object.getExperienceRequest)
        ? GetExperienceRequest.fromJSON(object.getExperienceRequest)
        : undefined,
      createExperienceRequest: isSet(object.createExperienceRequest)
        ? CreateExperienceRequest.fromJSON(object.createExperienceRequest)
        : undefined,
      updateExperienceRequest: isSet(object.updateExperienceRequest)
        ? UpdateExperienceRequest.fromJSON(object.updateExperienceRequest)
        : undefined,
      deleteExperienceRequest: isSet(object.deleteExperienceRequest)
        ? DeleteExperienceRequest.fromJSON(object.deleteExperienceRequest)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.getExperiencesRequest !== undefined) {
      obj.getExperiencesRequest = GetExperiencesRequest.toJSON(message.getExperiencesRequest);
    }
    if (message.getExperienceRequest !== undefined) {
      obj.getExperienceRequest = GetExperienceRequest.toJSON(message.getExperienceRequest);
    }
    if (message.createExperienceRequest !== undefined) {
      obj.createExperienceRequest = CreateExperienceRequest.toJSON(message.createExperienceRequest);
    }
    if (message.updateExperienceRequest !== undefined) {
      obj.updateExperienceRequest = UpdateExperienceRequest.toJSON(message.updateExperienceRequest);
    }
    if (message.deleteExperienceRequest !== undefined) {
      obj.deleteExperienceRequest = DeleteExperienceRequest.toJSON(message.deleteExperienceRequest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.requestId = object.requestId ?? "";
    message.getExperiencesRequest =
      (object.getExperiencesRequest !== undefined && object.getExperiencesRequest !== null)
        ? GetExperiencesRequest.fromPartial(object.getExperiencesRequest)
        : undefined;
    message.getExperienceRequest = (object.getExperienceRequest !== undefined && object.getExperienceRequest !== null)
      ? GetExperienceRequest.fromPartial(object.getExperienceRequest)
      : undefined;
    message.createExperienceRequest =
      (object.createExperienceRequest !== undefined && object.createExperienceRequest !== null)
        ? CreateExperienceRequest.fromPartial(object.createExperienceRequest)
        : undefined;
    message.updateExperienceRequest =
      (object.updateExperienceRequest !== undefined && object.updateExperienceRequest !== null)
        ? UpdateExperienceRequest.fromPartial(object.updateExperienceRequest)
        : undefined;
    message.deleteExperienceRequest =
      (object.deleteExperienceRequest !== undefined && object.deleteExperienceRequest !== null)
        ? DeleteExperienceRequest.fromPartial(object.deleteExperienceRequest)
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
