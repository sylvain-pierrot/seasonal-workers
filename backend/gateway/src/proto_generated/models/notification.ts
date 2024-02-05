/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "models";

export enum NotificationType {
  APPLICATION = 0,
  MESSAGE = 1,
  JOB = 2,
  UNRECOGNIZED = -1,
}

export function notificationTypeFromJSON(object: any): NotificationType {
  switch (object) {
    case 0:
    case "APPLICATION":
      return NotificationType.APPLICATION;
    case 1:
    case "MESSAGE":
      return NotificationType.MESSAGE;
    case 2:
    case "JOB":
      return NotificationType.JOB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NotificationType.UNRECOGNIZED;
  }
}

export function notificationTypeToJSON(object: NotificationType): string {
  switch (object) {
    case NotificationType.APPLICATION:
      return "APPLICATION";
    case NotificationType.MESSAGE:
      return "MESSAGE";
    case NotificationType.JOB:
      return "JOB";
    case NotificationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  content: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
}

function createBaseNotification(): Notification {
  return { id: "", userId: "", title: "", content: "", type: 0, isRead: false, createdAt: "" };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.isRead === true) {
      writer.uint32(48).bool(message.isRead);
    }
    if (message.createdAt !== "") {
      writer.uint32(58).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
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

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.content = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isRead = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notification {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      type: isSet(object.type) ? notificationTypeFromJSON(object.type) : 0,
      isRead: isSet(object.isRead) ? globalThis.Boolean(object.isRead) : false,
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
    };
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.type !== 0) {
      obj.type = notificationTypeToJSON(message.type);
    }
    if (message.isRead === true) {
      obj.isRead = message.isRead;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notification>, I>>(base?: I): Notification {
    return Notification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notification>, I>>(object: I): Notification {
    const message = createBaseNotification();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.type = object.type ?? 0;
    message.isRead = object.isRead ?? false;
    message.createdAt = object.createdAt ?? "";
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
