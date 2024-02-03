/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "models";

export interface JobCategory {
  jobId: string;
  jobTitle: string;
  category: JobSubCategory | undefined;
}

export interface JobSubCategory {
  categoryId: number;
  categoryTitle: string;
}

function createBaseJobCategory(): JobCategory {
  return { jobId: "", jobTitle: "", category: undefined };
}

export const JobCategory = {
  encode(message: JobCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    if (message.jobTitle !== "") {
      writer.uint32(18).string(message.jobTitle);
    }
    if (message.category !== undefined) {
      JobSubCategory.encode(message.category, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jobTitle = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.category = JobSubCategory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobCategory {
    return {
      jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "",
      jobTitle: isSet(object.jobTitle) ? globalThis.String(object.jobTitle) : "",
      category: isSet(object.category) ? JobSubCategory.fromJSON(object.category) : undefined,
    };
  },

  toJSON(message: JobCategory): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    if (message.jobTitle !== "") {
      obj.jobTitle = message.jobTitle;
    }
    if (message.category !== undefined) {
      obj.category = JobSubCategory.toJSON(message.category);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobCategory>, I>>(base?: I): JobCategory {
    return JobCategory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobCategory>, I>>(object: I): JobCategory {
    const message = createBaseJobCategory();
    message.jobId = object.jobId ?? "";
    message.jobTitle = object.jobTitle ?? "";
    message.category = (object.category !== undefined && object.category !== null)
      ? JobSubCategory.fromPartial(object.category)
      : undefined;
    return message;
  },
};

function createBaseJobSubCategory(): JobSubCategory {
  return { categoryId: 0, categoryTitle: "" };
}

export const JobSubCategory = {
  encode(message: JobSubCategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.categoryId !== 0) {
      writer.uint32(9).double(message.categoryId);
    }
    if (message.categoryTitle !== "") {
      writer.uint32(18).string(message.categoryTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JobSubCategory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJobSubCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.categoryId = reader.double();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.categoryTitle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JobSubCategory {
    return {
      categoryId: isSet(object.categoryId) ? globalThis.Number(object.categoryId) : 0,
      categoryTitle: isSet(object.categoryTitle) ? globalThis.String(object.categoryTitle) : "",
    };
  },

  toJSON(message: JobSubCategory): unknown {
    const obj: any = {};
    if (message.categoryId !== 0) {
      obj.categoryId = message.categoryId;
    }
    if (message.categoryTitle !== "") {
      obj.categoryTitle = message.categoryTitle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JobSubCategory>, I>>(base?: I): JobSubCategory {
    return JobSubCategory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JobSubCategory>, I>>(object: I): JobSubCategory {
    const message = createBaseJobSubCategory();
    message.categoryId = object.categoryId ?? 0;
    message.categoryTitle = object.categoryTitle ?? "";
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
