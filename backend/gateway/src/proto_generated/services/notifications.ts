/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Notification } from "../models/notification";

export const protobufPackage = "services";

export interface GetNotificationsRequest {
  userId: string;
}

export interface GetNotificationsResponse {
  notifications: Notification[];
}

export interface CreateNotificationRequest {
  notification: Notification | undefined;
}

export interface CreateNotificationResponse {
  notification: Notification | undefined;
}

function createBaseGetNotificationsRequest(): GetNotificationsRequest {
  return { userId: "" };
}

export const GetNotificationsRequest = {
  encode(message: GetNotificationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotificationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNotificationsRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: GetNotificationsRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNotificationsRequest>, I>>(base?: I): GetNotificationsRequest {
    return GetNotificationsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNotificationsRequest>, I>>(object: I): GetNotificationsRequest {
    const message = createBaseGetNotificationsRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetNotificationsResponse(): GetNotificationsResponse {
  return { notifications: [] };
}

export const GetNotificationsResponse = {
  encode(message: GetNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNotificationsResponse {
    return {
      notifications: globalThis.Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notification.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNotificationsResponse>, I>>(base?: I): GetNotificationsResponse {
    return GetNotificationsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetNotificationsResponse>, I>>(object: I): GetNotificationsResponse {
    const message = createBaseGetNotificationsResponse();
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateNotificationRequest(): CreateNotificationRequest {
  return { notification: undefined };
}

export const CreateNotificationRequest = {
  encode(message: CreateNotificationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notification !== undefined) {
      Notification.encode(message.notification, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNotificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notification = Notification.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateNotificationRequest {
    return { notification: isSet(object.notification) ? Notification.fromJSON(object.notification) : undefined };
  },

  toJSON(message: CreateNotificationRequest): unknown {
    const obj: any = {};
    if (message.notification !== undefined) {
      obj.notification = Notification.toJSON(message.notification);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNotificationRequest>, I>>(base?: I): CreateNotificationRequest {
    return CreateNotificationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNotificationRequest>, I>>(object: I): CreateNotificationRequest {
    const message = createBaseCreateNotificationRequest();
    message.notification = (object.notification !== undefined && object.notification !== null)
      ? Notification.fromPartial(object.notification)
      : undefined;
    return message;
  },
};

function createBaseCreateNotificationResponse(): CreateNotificationResponse {
  return { notification: undefined };
}

export const CreateNotificationResponse = {
  encode(message: CreateNotificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notification !== undefined) {
      Notification.encode(message.notification, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNotificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notification = Notification.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateNotificationResponse {
    return { notification: isSet(object.notification) ? Notification.fromJSON(object.notification) : undefined };
  },

  toJSON(message: CreateNotificationResponse): unknown {
    const obj: any = {};
    if (message.notification !== undefined) {
      obj.notification = Notification.toJSON(message.notification);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNotificationResponse>, I>>(base?: I): CreateNotificationResponse {
    return CreateNotificationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateNotificationResponse>, I>>(object: I): CreateNotificationResponse {
    const message = createBaseCreateNotificationResponse();
    message.notification = (object.notification !== undefined && object.notification !== null)
      ? Notification.fromPartial(object.notification)
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
