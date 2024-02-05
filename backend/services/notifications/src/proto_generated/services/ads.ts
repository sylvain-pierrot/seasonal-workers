/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Ad } from '../models/ad';

export const protobufPackage = 'services';

export interface CreateExperienceRequest {
  ad: Ad | undefined;
}

export interface CreateExperienceResponse {
  id: string;
}

export interface GetExperiencesRequest {
  id: string;
}

export interface GetExperiencesResponse {
  ads: Ad[];
}

export interface GetExperienceRequest {
  id: string;
}

export interface GetExperienceResponse {
  ad: Ad | undefined;
}

export interface UpdateExperienceRequest {
  id: string;
  ad: Ad | undefined;
}

export interface UpdateExperienceResponse {
  id: string;
}

export interface DeleteExperienceRequest {
  id: string;
  experienceId: string;
}

export interface DeleteExperienceResponse {
  id: string;
}

export interface CreateAvailabilityRequest {
  availability: Ad | undefined;
}

export interface CreateAvailabilityResponse {
  id: string;
}

export interface GetAvailabilitiesRequest {
  id: string;
}

export interface GetAvailabilitiesResponse {
  ads: Ad[];
}

export interface UpdateAvailabilityRequest {
  id: string;
  availability: Ad | undefined;
}

export interface UpdateAvailabilityResponse {
  id: string;
}

export interface DeleteAvailabilityRequest {
  id: string;
  availabilityId: string;
}

export interface DeleteAvailabilityResponse {
  id: string;
}

export interface CreateJobOfferRequest {
  jobOffer: Ad | undefined;
}

export interface CreateJobOfferRequestResponse {
  offerId: string;
}

export interface GetJobOfferRequest {
  offerId: string;
}

export interface GetJobOfferResponse {
  jobOffer: Ad | undefined;
}

const baseCreateExperienceRequest: object = {};

export const CreateExperienceRequest = {
  encode(
    message: CreateExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateExperienceRequest,
    } as CreateExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExperienceRequest {
    const message = {
      ...baseCreateExperienceRequest,
    } as CreateExperienceRequest;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: CreateExperienceRequest): unknown {
    const obj: any = {};
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateExperienceRequest>,
  ): CreateExperienceRequest {
    const message = {
      ...baseCreateExperienceRequest,
    } as CreateExperienceRequest;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseCreateExperienceResponse: object = { id: '' };

export const CreateExperienceResponse = {
  encode(
    message: CreateExperienceResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): CreateExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateExperienceResponse,
    } as CreateExperienceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateExperienceResponse {
    const message = {
      ...baseCreateExperienceResponse,
    } as CreateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: CreateExperienceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateExperienceResponse>,
  ): CreateExperienceResponse {
    const message = {
      ...baseCreateExperienceResponse,
    } as CreateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetExperiencesRequest: object = { id: '' };

export const GetExperiencesRequest = {
  encode(
    message: GetExperiencesRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperiencesRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperiencesRequest } as GetExperiencesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExperiencesRequest {
    const message = { ...baseGetExperiencesRequest } as GetExperiencesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: GetExperiencesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetExperiencesRequest>,
  ): GetExperiencesRequest {
    const message = { ...baseGetExperiencesRequest } as GetExperiencesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetExperiencesResponse: object = {};

export const GetExperiencesResponse = {
  encode(
    message: GetExperiencesResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.ads) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperiencesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperiencesResponse } as GetExperiencesResponse;
    message.ads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ads.push(Ad.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExperiencesResponse {
    const message = { ...baseGetExperiencesResponse } as GetExperiencesResponse;
    message.ads = [];
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(Ad.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetExperiencesResponse): unknown {
    const obj: any = {};
    if (message.ads) {
      obj.ads = message.ads.map((e) => (e ? Ad.toJSON(e) : undefined));
    } else {
      obj.ads = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetExperiencesResponse>,
  ): GetExperiencesResponse {
    const message = { ...baseGetExperiencesResponse } as GetExperiencesResponse;
    message.ads = [];
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(Ad.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetExperienceRequest: object = { id: '' };

export const GetExperienceRequest = {
  encode(
    message: GetExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperienceRequest } as GetExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExperienceRequest {
    const message = { ...baseGetExperienceRequest } as GetExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: GetExperienceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetExperienceRequest>): GetExperienceRequest {
    const message = { ...baseGetExperienceRequest } as GetExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetExperienceResponse: object = {};

export const GetExperienceResponse = {
  encode(
    message: GetExperienceResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExperienceResponse } as GetExperienceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExperienceResponse {
    const message = { ...baseGetExperienceResponse } as GetExperienceResponse;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: GetExperienceResponse): unknown {
    const obj: any = {};
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetExperienceResponse>,
  ): GetExperienceResponse {
    const message = { ...baseGetExperienceResponse } as GetExperienceResponse;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseUpdateExperienceRequest: object = { id: '' };

export const UpdateExperienceRequest = {
  encode(
    message: UpdateExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdateExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateExperienceRequest,
    } as UpdateExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExperienceRequest {
    const message = {
      ...baseUpdateExperienceRequest,
    } as UpdateExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: UpdateExperienceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateExperienceRequest>,
  ): UpdateExperienceRequest {
    const message = {
      ...baseUpdateExperienceRequest,
    } as UpdateExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseUpdateExperienceResponse: object = { id: '' };

export const UpdateExperienceResponse = {
  encode(
    message: UpdateExperienceResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): UpdateExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateExperienceResponse,
    } as UpdateExperienceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateExperienceResponse {
    const message = {
      ...baseUpdateExperienceResponse,
    } as UpdateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: UpdateExperienceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateExperienceResponse>,
  ): UpdateExperienceResponse {
    const message = {
      ...baseUpdateExperienceResponse,
    } as UpdateExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseDeleteExperienceRequest: object = { id: '', experienceId: '' };

export const DeleteExperienceRequest = {
  encode(
    message: DeleteExperienceRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.experienceId !== '') {
      writer.uint32(18).string(message.experienceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DeleteExperienceRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteExperienceRequest,
    } as DeleteExperienceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.experienceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExperienceRequest {
    const message = {
      ...baseDeleteExperienceRequest,
    } as DeleteExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.experienceId !== undefined && object.experienceId !== null) {
      message.experienceId = String(object.experienceId);
    } else {
      message.experienceId = '';
    }
    return message;
  },

  toJSON(message: DeleteExperienceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.experienceId !== undefined &&
      (obj.experienceId = message.experienceId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteExperienceRequest>,
  ): DeleteExperienceRequest {
    const message = {
      ...baseDeleteExperienceRequest,
    } as DeleteExperienceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.experienceId !== undefined && object.experienceId !== null) {
      message.experienceId = object.experienceId;
    } else {
      message.experienceId = '';
    }
    return message;
  },
};

const baseDeleteExperienceResponse: object = { id: '' };

export const DeleteExperienceResponse = {
  encode(
    message: DeleteExperienceResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): DeleteExperienceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteExperienceResponse,
    } as DeleteExperienceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteExperienceResponse {
    const message = {
      ...baseDeleteExperienceResponse,
    } as DeleteExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: DeleteExperienceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteExperienceResponse>,
  ): DeleteExperienceResponse {
    const message = {
      ...baseDeleteExperienceResponse,
    } as DeleteExperienceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseCreateAvailabilityRequest: object = {};

export const CreateAvailabilityRequest = {
  encode(
    message: CreateAvailabilityRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.availability !== undefined) {
      Ad.encode(message.availability, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): CreateAvailabilityRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateAvailabilityRequest,
    } as CreateAvailabilityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availability = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAvailabilityRequest {
    const message = {
      ...baseCreateAvailabilityRequest,
    } as CreateAvailabilityRequest;
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = Ad.fromJSON(object.availability);
    } else {
      message.availability = undefined;
    }
    return message;
  },

  toJSON(message: CreateAvailabilityRequest): unknown {
    const obj: any = {};
    message.availability !== undefined &&
      (obj.availability = message.availability
        ? Ad.toJSON(message.availability)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateAvailabilityRequest>,
  ): CreateAvailabilityRequest {
    const message = {
      ...baseCreateAvailabilityRequest,
    } as CreateAvailabilityRequest;
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = Ad.fromPartial(object.availability);
    } else {
      message.availability = undefined;
    }
    return message;
  },
};

const baseCreateAvailabilityResponse: object = { id: '' };

export const CreateAvailabilityResponse = {
  encode(
    message: CreateAvailabilityResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): CreateAvailabilityResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateAvailabilityResponse,
    } as CreateAvailabilityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAvailabilityResponse {
    const message = {
      ...baseCreateAvailabilityResponse,
    } as CreateAvailabilityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: CreateAvailabilityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateAvailabilityResponse>,
  ): CreateAvailabilityResponse {
    const message = {
      ...baseCreateAvailabilityResponse,
    } as CreateAvailabilityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetAvailabilitiesRequest: object = { id: '' };

export const GetAvailabilitiesRequest = {
  encode(
    message: GetAvailabilitiesRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetAvailabilitiesRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetAvailabilitiesRequest,
    } as GetAvailabilitiesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAvailabilitiesRequest {
    const message = {
      ...baseGetAvailabilitiesRequest,
    } as GetAvailabilitiesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: GetAvailabilitiesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetAvailabilitiesRequest>,
  ): GetAvailabilitiesRequest {
    const message = {
      ...baseGetAvailabilitiesRequest,
    } as GetAvailabilitiesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseGetAvailabilitiesResponse: object = {};

export const GetAvailabilitiesResponse = {
  encode(
    message: GetAvailabilitiesResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    for (const v of message.ads) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): GetAvailabilitiesResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetAvailabilitiesResponse,
    } as GetAvailabilitiesResponse;
    message.ads = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ads.push(Ad.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAvailabilitiesResponse {
    const message = {
      ...baseGetAvailabilitiesResponse,
    } as GetAvailabilitiesResponse;
    message.ads = [];
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(Ad.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetAvailabilitiesResponse): unknown {
    const obj: any = {};
    if (message.ads) {
      obj.ads = message.ads.map((e) => (e ? Ad.toJSON(e) : undefined));
    } else {
      obj.ads = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetAvailabilitiesResponse>,
  ): GetAvailabilitiesResponse {
    const message = {
      ...baseGetAvailabilitiesResponse,
    } as GetAvailabilitiesResponse;
    message.ads = [];
    if (object.ads !== undefined && object.ads !== null) {
      for (const e of object.ads) {
        message.ads.push(Ad.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUpdateAvailabilityRequest: object = { id: '' };

export const UpdateAvailabilityRequest = {
  encode(
    message: UpdateAvailabilityRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.availability !== undefined) {
      Ad.encode(message.availability, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): UpdateAvailabilityRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAvailabilityRequest,
    } as UpdateAvailabilityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.availability = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAvailabilityRequest {
    const message = {
      ...baseUpdateAvailabilityRequest,
    } as UpdateAvailabilityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = Ad.fromJSON(object.availability);
    } else {
      message.availability = undefined;
    }
    return message;
  },

  toJSON(message: UpdateAvailabilityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.availability !== undefined &&
      (obj.availability = message.availability
        ? Ad.toJSON(message.availability)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateAvailabilityRequest>,
  ): UpdateAvailabilityRequest {
    const message = {
      ...baseUpdateAvailabilityRequest,
    } as UpdateAvailabilityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = Ad.fromPartial(object.availability);
    } else {
      message.availability = undefined;
    }
    return message;
  },
};

const baseUpdateAvailabilityResponse: object = { id: '' };

export const UpdateAvailabilityResponse = {
  encode(
    message: UpdateAvailabilityResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): UpdateAvailabilityResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAvailabilityResponse,
    } as UpdateAvailabilityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAvailabilityResponse {
    const message = {
      ...baseUpdateAvailabilityResponse,
    } as UpdateAvailabilityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: UpdateAvailabilityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateAvailabilityResponse>,
  ): UpdateAvailabilityResponse {
    const message = {
      ...baseUpdateAvailabilityResponse,
    } as UpdateAvailabilityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseDeleteAvailabilityRequest: object = { id: '', availabilityId: '' };

export const DeleteAvailabilityRequest = {
  encode(
    message: DeleteAvailabilityRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.availabilityId !== '') {
      writer.uint32(18).string(message.availabilityId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): DeleteAvailabilityRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAvailabilityRequest,
    } as DeleteAvailabilityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.availabilityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAvailabilityRequest {
    const message = {
      ...baseDeleteAvailabilityRequest,
    } as DeleteAvailabilityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.availabilityId !== undefined && object.availabilityId !== null) {
      message.availabilityId = String(object.availabilityId);
    } else {
      message.availabilityId = '';
    }
    return message;
  },

  toJSON(message: DeleteAvailabilityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.availabilityId !== undefined &&
      (obj.availabilityId = message.availabilityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteAvailabilityRequest>,
  ): DeleteAvailabilityRequest {
    const message = {
      ...baseDeleteAvailabilityRequest,
    } as DeleteAvailabilityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.availabilityId !== undefined && object.availabilityId !== null) {
      message.availabilityId = object.availabilityId;
    } else {
      message.availabilityId = '';
    }
    return message;
  },
};

const baseDeleteAvailabilityResponse: object = { id: '' };

export const DeleteAvailabilityResponse = {
  encode(
    message: DeleteAvailabilityResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): DeleteAvailabilityResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAvailabilityResponse,
    } as DeleteAvailabilityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAvailabilityResponse {
    const message = {
      ...baseDeleteAvailabilityResponse,
    } as DeleteAvailabilityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },

  toJSON(message: DeleteAvailabilityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteAvailabilityResponse>,
  ): DeleteAvailabilityResponse {
    const message = {
      ...baseDeleteAvailabilityResponse,
    } as DeleteAvailabilityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
};

const baseCreateJobOfferRequest: object = {};

export const CreateJobOfferRequest = {
  encode(
    message: CreateJobOfferRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.jobOffer !== undefined) {
      Ad.encode(message.jobOffer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreateJobOfferRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateJobOfferRequest } as CreateJobOfferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobOffer = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateJobOfferRequest {
    const message = { ...baseCreateJobOfferRequest } as CreateJobOfferRequest;
    if (object.jobOffer !== undefined && object.jobOffer !== null) {
      message.jobOffer = Ad.fromJSON(object.jobOffer);
    } else {
      message.jobOffer = undefined;
    }
    return message;
  },

  toJSON(message: CreateJobOfferRequest): unknown {
    const obj: any = {};
    message.jobOffer !== undefined &&
      (obj.jobOffer = message.jobOffer
        ? Ad.toJSON(message.jobOffer)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateJobOfferRequest>,
  ): CreateJobOfferRequest {
    const message = { ...baseCreateJobOfferRequest } as CreateJobOfferRequest;
    if (object.jobOffer !== undefined && object.jobOffer !== null) {
      message.jobOffer = Ad.fromPartial(object.jobOffer);
    } else {
      message.jobOffer = undefined;
    }
    return message;
  },
};

const baseCreateJobOfferRequestResponse: object = { offerId: '' };

export const CreateJobOfferRequestResponse = {
  encode(
    message: CreateJobOfferRequestResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.offerId !== '') {
      writer.uint32(10).string(message.offerId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number,
  ): CreateJobOfferRequestResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateJobOfferRequestResponse,
    } as CreateJobOfferRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateJobOfferRequestResponse {
    const message = {
      ...baseCreateJobOfferRequestResponse,
    } as CreateJobOfferRequestResponse;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId);
    } else {
      message.offerId = '';
    }
    return message;
  },

  toJSON(message: CreateJobOfferRequestResponse): unknown {
    const obj: any = {};
    message.offerId !== undefined && (obj.offerId = message.offerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateJobOfferRequestResponse>,
  ): CreateJobOfferRequestResponse {
    const message = {
      ...baseCreateJobOfferRequestResponse,
    } as CreateJobOfferRequestResponse;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId;
    } else {
      message.offerId = '';
    }
    return message;
  },
};

const baseGetJobOfferRequest: object = { offerId: '' };

export const GetJobOfferRequest = {
  encode(
    message: GetJobOfferRequest,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.offerId !== '') {
      writer.uint32(10).string(message.offerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetJobOfferRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetJobOfferRequest } as GetJobOfferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobOfferRequest {
    const message = { ...baseGetJobOfferRequest } as GetJobOfferRequest;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = String(object.offerId);
    } else {
      message.offerId = '';
    }
    return message;
  },

  toJSON(message: GetJobOfferRequest): unknown {
    const obj: any = {};
    message.offerId !== undefined && (obj.offerId = message.offerId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetJobOfferRequest>): GetJobOfferRequest {
    const message = { ...baseGetJobOfferRequest } as GetJobOfferRequest;
    if (object.offerId !== undefined && object.offerId !== null) {
      message.offerId = object.offerId;
    } else {
      message.offerId = '';
    }
    return message;
  },
};

const baseGetJobOfferResponse: object = {};

export const GetJobOfferResponse = {
  encode(
    message: GetJobOfferResponse,
    writer: Writer = Writer.create(),
  ): Writer {
    if (message.jobOffer !== undefined) {
      Ad.encode(message.jobOffer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetJobOfferResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetJobOfferResponse } as GetJobOfferResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobOffer = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetJobOfferResponse {
    const message = { ...baseGetJobOfferResponse } as GetJobOfferResponse;
    if (object.jobOffer !== undefined && object.jobOffer !== null) {
      message.jobOffer = Ad.fromJSON(object.jobOffer);
    } else {
      message.jobOffer = undefined;
    }
    return message;
  },

  toJSON(message: GetJobOfferResponse): unknown {
    const obj: any = {};
    message.jobOffer !== undefined &&
      (obj.jobOffer = message.jobOffer
        ? Ad.toJSON(message.jobOffer)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetJobOfferResponse>): GetJobOfferResponse {
    const message = { ...baseGetJobOfferResponse } as GetJobOfferResponse;
    if (object.jobOffer !== undefined && object.jobOffer !== null) {
      message.jobOffer = Ad.fromPartial(object.jobOffer);
    } else {
      message.jobOffer = undefined;
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
