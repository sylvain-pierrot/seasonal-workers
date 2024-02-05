/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'models';

export enum NotificationType {
  APPLICATION = 0,
  MESSAGE = 1,
  JOB = 2,
  UNRECOGNIZED = -1,
}

export function notificationTypeFromJSON(object: any): NotificationType {
  switch (object) {
    case 0:
    case 'APPLICATION':
      return NotificationType.APPLICATION;
    case 1:
    case 'MESSAGE':
      return NotificationType.MESSAGE;
    case 2:
    case 'JOB':
      return NotificationType.JOB;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NotificationType.UNRECOGNIZED;
  }
}

export function notificationTypeToJSON(object: NotificationType): string {
  switch (object) {
    case NotificationType.APPLICATION:
      return 'APPLICATION';
    case NotificationType.MESSAGE:
      return 'MESSAGE';
    case NotificationType.JOB:
      return 'JOB';
    default:
      return 'UNKNOWN';
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

const baseNotification: object = {
  id: '',
  userId: '',
  title: '',
  content: '',
  type: 0,
  isRead: false,
  createdAt: '',
};

export const Notification = {
  encode(message: Notification, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId);
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title);
    }
    if (message.content !== '') {
      writer.uint32(34).string(message.content);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.isRead === true) {
      writer.uint32(48).bool(message.isRead);
    }
    if (message.createdAt !== '') {
      writer.uint32(58).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNotification } as Notification;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.userId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.content = reader.string();
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.isRead = reader.bool();
          break;
        case 7:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    } else {
      message.userId = '';
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = '';
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = '';
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = notificationTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.isRead !== undefined && object.isRead !== null) {
      message.isRead = Boolean(object.isRead);
    } else {
      message.isRead = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = '';
    }
    return message;
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userId !== undefined && (obj.userId = message.userId);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    message.type !== undefined &&
      (obj.type = notificationTypeToJSON(message.type));
    message.isRead !== undefined && (obj.isRead = message.isRead);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Notification>): Notification {
    const message = { ...baseNotification } as Notification;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = '';
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = '';
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = '';
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.isRead !== undefined && object.isRead !== null) {
      message.isRead = object.isRead;
    } else {
      message.isRead = false;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = '';
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
