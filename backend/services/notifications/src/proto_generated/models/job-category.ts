/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'models';

export interface JobCategory {
  jobId: string;
  jobTitle: string;
  category: JobSubCategory | undefined;
}

export interface JobSubCategory {
  categoryId: number;
  categoryTitle: string;
}

const baseJobCategory: object = { jobId: '', jobTitle: '' };

export const JobCategory = {
  encode(message: JobCategory, writer: Writer = Writer.create()): Writer {
    if (message.jobId !== '') {
      writer.uint32(10).string(message.jobId);
    }
    if (message.jobTitle !== '') {
      writer.uint32(18).string(message.jobTitle);
    }
    if (message.category !== undefined) {
      JobSubCategory.encode(
        message.category,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobCategory {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobCategory } as JobCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobId = reader.string();
          break;
        case 2:
          message.jobTitle = reader.string();
          break;
        case 3:
          message.category = JobSubCategory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobCategory {
    const message = { ...baseJobCategory } as JobCategory;
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = String(object.jobId);
    } else {
      message.jobId = '';
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = '';
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = JobSubCategory.fromJSON(object.category);
    } else {
      message.category = undefined;
    }
    return message;
  },

  toJSON(message: JobCategory): unknown {
    const obj: any = {};
    message.jobId !== undefined && (obj.jobId = message.jobId);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.category !== undefined &&
      (obj.category = message.category
        ? JobSubCategory.toJSON(message.category)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<JobCategory>): JobCategory {
    const message = { ...baseJobCategory } as JobCategory;
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = object.jobId;
    } else {
      message.jobId = '';
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = '';
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = JobSubCategory.fromPartial(object.category);
    } else {
      message.category = undefined;
    }
    return message;
  },
};

const baseJobSubCategory: object = { categoryId: 0, categoryTitle: '' };

export const JobSubCategory = {
  encode(message: JobSubCategory, writer: Writer = Writer.create()): Writer {
    if (message.categoryId !== 0) {
      writer.uint32(9).double(message.categoryId);
    }
    if (message.categoryTitle !== '') {
      writer.uint32(18).string(message.categoryTitle);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): JobSubCategory {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJobSubCategory } as JobSubCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.double();
          break;
        case 2:
          message.categoryTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JobSubCategory {
    const message = { ...baseJobSubCategory } as JobSubCategory;
    if (object.categoryId !== undefined && object.categoryId !== null) {
      message.categoryId = Number(object.categoryId);
    } else {
      message.categoryId = 0;
    }
    if (object.categoryTitle !== undefined && object.categoryTitle !== null) {
      message.categoryTitle = String(object.categoryTitle);
    } else {
      message.categoryTitle = '';
    }
    return message;
  },

  toJSON(message: JobSubCategory): unknown {
    const obj: any = {};
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.categoryTitle !== undefined &&
      (obj.categoryTitle = message.categoryTitle);
    return obj;
  },

  fromPartial(object: DeepPartial<JobSubCategory>): JobSubCategory {
    const message = { ...baseJobSubCategory } as JobSubCategory;
    if (object.categoryId !== undefined && object.categoryId !== null) {
      message.categoryId = object.categoryId;
    } else {
      message.categoryId = 0;
    }
    if (object.categoryTitle !== undefined && object.categoryTitle !== null) {
      message.categoryTitle = object.categoryTitle;
    } else {
      message.categoryTitle = '';
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
