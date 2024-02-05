/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Notification } from '../models/notification';

export const protobufPackage = 'services';

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

const baseGetNotificationsRequest: object = { userId: '' };

export const GetNotificationsRequest = {
  encode(
    message: GetNotificationsRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetNotificationsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetNotificationsRequest,
    } as GetNotificationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotificationsRequest {
    const message = {
      ...baseGetNotificationsRequest,
    } as GetNotificationsRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = '';
    }
    return message;
  },

  toJSON(message: GetNotificationsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetNotificationsRequest>,
  ): GetNotificationsRequest {
    const message = {
      ...baseGetNotificationsRequest,
    } as GetNotificationsRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = '';
    }
    return message;
  },
};

const baseGetNotificationsResponse: object = {};

export const GetNotificationsResponse = {
  encode(
    message: GetNotificationsResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetNotificationsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetNotificationsResponse,
    } as GetNotificationsResponse;
    message.notifications = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications.push(
            Notification.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNotificationsResponse {
    const message = {
      ...baseGetNotificationsResponse,
    } as GetNotificationsResponse;
    message.notifications = [];
    if (object.notifications !== undefined && object.notifications !== null) {
      for (const e of object.notifications) {
        message.notifications.push(Notification.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetNotificationsResponse): unknown {
    const obj: any = {};
    if (message.notifications) {
      obj.notifications = message.notifications.map((e) =>
        e ? Notification.toJSON(e) : undefined,
      );
    } else {
      obj.notifications = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetNotificationsResponse>,
  ): GetNotificationsResponse {
    const message = {
      ...baseGetNotificationsResponse,
    } as GetNotificationsResponse;
    message.notifications = [];
    if (object.notifications !== undefined && object.notifications !== null) {
      for (const e of object.notifications) {
        message.notifications.push(Notification.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCreateNotificationRequest: object = {};

export const CreateNotificationRequest = {
  encode(
    message: CreateNotificationRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.notification !== undefined) {
      Notification.encode(
        message.notification,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): CreateNotificationRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNotificationRequest,
    } as CreateNotificationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.notification = Notification.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNotificationRequest {
    const message = {
      ...baseCreateNotificationRequest,
    } as CreateNotificationRequest;
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromJSON(object.notification);
    } else {
      message.notification = undefined;
    }
    return message;
  },

  toJSON(message: CreateNotificationRequest): unknown {
    const obj: any = {};
    message.notification !== undefined &&
      (obj.notification = message.notification
        ? Notification.toJSON(message.notification)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateNotificationRequest>,
  ): CreateNotificationRequest {
    const message = {
      ...baseCreateNotificationRequest,
    } as CreateNotificationRequest;
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromPartial(object.notification);
    } else {
      message.notification = undefined;
    }
    return message;
  },
};

const baseCreateNotificationResponse: object = {};

export const CreateNotificationResponse = {
  encode(
    message: CreateNotificationResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.notification !== undefined) {
      Notification.encode(
        message.notification,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): CreateNotificationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateNotificationResponse,
    } as CreateNotificationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notification = Notification.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNotificationResponse {
    const message = {
      ...baseCreateNotificationResponse,
    } as CreateNotificationResponse;
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromJSON(object.notification);
    } else {
      message.notification = undefined;
    }
    return message;
  },

  toJSON(message: CreateNotificationResponse): unknown {
    const obj: any = {};
    message.notification !== undefined &&
      (obj.notification = message.notification
        ? Notification.toJSON(message.notification)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateNotificationResponse>,
  ): CreateNotificationResponse {
    const message = {
      ...baseCreateNotificationResponse,
    } as CreateNotificationResponse;
    if (object.notification !== undefined && object.notification !== null) {
      message.notification = Notification.fromPartial(object.notification);
    } else {
      message.notification = undefined;
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
