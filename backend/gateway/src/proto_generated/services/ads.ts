/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Ad } from "../models/ads";

export const protobufPackage = "services";

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
  ad: Ad | undefined;
}

export interface GetJobOffersRecommendationRequest {
  userId: string;
}

export interface GetJobOffersRecommendationResponse {
  jobOffer: Ad[];
}

function createBaseCreateExperienceRequest(): CreateExperienceRequest {
  return { ad: undefined };
}

export const CreateExperienceRequest = {
  encode(message: CreateExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExperienceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExperienceRequest {
    return { ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined };
  },

  toJSON(message: CreateExperienceRequest): unknown {
    const obj: any = {};
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExperienceRequest>, I>>(base?: I): CreateExperienceRequest {
    return CreateExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExperienceRequest>, I>>(object: I): CreateExperienceRequest {
    const message = createBaseCreateExperienceRequest();
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseCreateExperienceResponse(): CreateExperienceResponse {
  return { id: "" };
}

export const CreateExperienceResponse = {
  encode(message: CreateExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExperienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateExperienceResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateExperienceResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateExperienceResponse>, I>>(base?: I): CreateExperienceResponse {
    return CreateExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateExperienceResponse>, I>>(object: I): CreateExperienceResponse {
    const message = createBaseCreateExperienceResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetExperiencesRequest(): GetExperiencesRequest {
  return { id: "" };
}

export const GetExperiencesRequest = {
  encode(message: GetExperiencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperiencesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperiencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExperiencesRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetExperiencesRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperiencesRequest>, I>>(base?: I): GetExperiencesRequest {
    return GetExperiencesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperiencesRequest>, I>>(object: I): GetExperiencesRequest {
    const message = createBaseGetExperiencesRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetExperiencesResponse(): GetExperiencesResponse {
  return { ads: [] };
}

export const GetExperiencesResponse = {
  encode(message: GetExperiencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ads) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperiencesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperiencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ads.push(Ad.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExperiencesResponse {
    return { ads: globalThis.Array.isArray(object?.ads) ? object.ads.map((e: any) => Ad.fromJSON(e)) : [] };
  },

  toJSON(message: GetExperiencesResponse): unknown {
    const obj: any = {};
    if (message.ads?.length) {
      obj.ads = message.ads.map((e) => Ad.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperiencesResponse>, I>>(base?: I): GetExperiencesResponse {
    return GetExperiencesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperiencesResponse>, I>>(object: I): GetExperiencesResponse {
    const message = createBaseGetExperiencesResponse();
    message.ads = object.ads?.map((e) => Ad.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetExperienceRequest(): GetExperienceRequest {
  return { id: "" };
}

export const GetExperienceRequest = {
  encode(message: GetExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperienceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExperienceRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetExperienceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperienceRequest>, I>>(base?: I): GetExperienceRequest {
    return GetExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperienceRequest>, I>>(object: I): GetExperienceRequest {
    const message = createBaseGetExperienceRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetExperienceResponse(): GetExperienceResponse {
  return { ad: undefined };
}

export const GetExperienceResponse = {
  encode(message: GetExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExperienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExperienceResponse {
    return { ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined };
  },

  toJSON(message: GetExperienceResponse): unknown {
    const obj: any = {};
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExperienceResponse>, I>>(base?: I): GetExperienceResponse {
    return GetExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExperienceResponse>, I>>(object: I): GetExperienceResponse {
    const message = createBaseGetExperienceResponse();
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseUpdateExperienceRequest(): UpdateExperienceRequest {
  return { id: "", ad: undefined };
}

export const UpdateExperienceRequest = {
  encode(message: UpdateExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExperienceRequest();
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

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExperienceRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined,
    };
  },

  toJSON(message: UpdateExperienceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExperienceRequest>, I>>(base?: I): UpdateExperienceRequest {
    return UpdateExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExperienceRequest>, I>>(object: I): UpdateExperienceRequest {
    const message = createBaseUpdateExperienceRequest();
    message.id = object.id ?? "";
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseUpdateExperienceResponse(): UpdateExperienceResponse {
  return { id: "" };
}

export const UpdateExperienceResponse = {
  encode(message: UpdateExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExperienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateExperienceResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UpdateExperienceResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateExperienceResponse>, I>>(base?: I): UpdateExperienceResponse {
    return UpdateExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateExperienceResponse>, I>>(object: I): UpdateExperienceResponse {
    const message = createBaseUpdateExperienceResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteExperienceRequest(): DeleteExperienceRequest {
  return { id: "", experienceId: "" };
}

export const DeleteExperienceRequest = {
  encode(message: DeleteExperienceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.experienceId !== "") {
      writer.uint32(18).string(message.experienceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExperienceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExperienceRequest();
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

          message.experienceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExperienceRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      experienceId: isSet(object.experienceId) ? globalThis.String(object.experienceId) : "",
    };
  },

  toJSON(message: DeleteExperienceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.experienceId !== "") {
      obj.experienceId = message.experienceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExperienceRequest>, I>>(base?: I): DeleteExperienceRequest {
    return DeleteExperienceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExperienceRequest>, I>>(object: I): DeleteExperienceRequest {
    const message = createBaseDeleteExperienceRequest();
    message.id = object.id ?? "";
    message.experienceId = object.experienceId ?? "";
    return message;
  },
};

function createBaseDeleteExperienceResponse(): DeleteExperienceResponse {
  return { id: "" };
}

export const DeleteExperienceResponse = {
  encode(message: DeleteExperienceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteExperienceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExperienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteExperienceResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteExperienceResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteExperienceResponse>, I>>(base?: I): DeleteExperienceResponse {
    return DeleteExperienceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteExperienceResponse>, I>>(object: I): DeleteExperienceResponse {
    const message = createBaseDeleteExperienceResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCreateAvailabilityRequest(): CreateAvailabilityRequest {
  return { availability: undefined };
}

export const CreateAvailabilityRequest = {
  encode(message: CreateAvailabilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availability !== undefined) {
      Ad.encode(message.availability, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAvailabilityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAvailabilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.availability = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAvailabilityRequest {
    return { availability: isSet(object.availability) ? Ad.fromJSON(object.availability) : undefined };
  },

  toJSON(message: CreateAvailabilityRequest): unknown {
    const obj: any = {};
    if (message.availability !== undefined) {
      obj.availability = Ad.toJSON(message.availability);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAvailabilityRequest>, I>>(base?: I): CreateAvailabilityRequest {
    return CreateAvailabilityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAvailabilityRequest>, I>>(object: I): CreateAvailabilityRequest {
    const message = createBaseCreateAvailabilityRequest();
    message.availability = (object.availability !== undefined && object.availability !== null)
      ? Ad.fromPartial(object.availability)
      : undefined;
    return message;
  },
};

function createBaseCreateAvailabilityResponse(): CreateAvailabilityResponse {
  return { id: "" };
}

export const CreateAvailabilityResponse = {
  encode(message: CreateAvailabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAvailabilityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAvailabilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAvailabilityResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateAvailabilityResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAvailabilityResponse>, I>>(base?: I): CreateAvailabilityResponse {
    return CreateAvailabilityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAvailabilityResponse>, I>>(object: I): CreateAvailabilityResponse {
    const message = createBaseCreateAvailabilityResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetAvailabilitiesRequest(): GetAvailabilitiesRequest {
  return { id: "" };
}

export const GetAvailabilitiesRequest = {
  encode(message: GetAvailabilitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAvailabilitiesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAvailabilitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAvailabilitiesRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetAvailabilitiesRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAvailabilitiesRequest>, I>>(base?: I): GetAvailabilitiesRequest {
    return GetAvailabilitiesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAvailabilitiesRequest>, I>>(object: I): GetAvailabilitiesRequest {
    const message = createBaseGetAvailabilitiesRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetAvailabilitiesResponse(): GetAvailabilitiesResponse {
  return { ads: [] };
}

export const GetAvailabilitiesResponse = {
  encode(message: GetAvailabilitiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ads) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAvailabilitiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAvailabilitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ads.push(Ad.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAvailabilitiesResponse {
    return { ads: globalThis.Array.isArray(object?.ads) ? object.ads.map((e: any) => Ad.fromJSON(e)) : [] };
  },

  toJSON(message: GetAvailabilitiesResponse): unknown {
    const obj: any = {};
    if (message.ads?.length) {
      obj.ads = message.ads.map((e) => Ad.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAvailabilitiesResponse>, I>>(base?: I): GetAvailabilitiesResponse {
    return GetAvailabilitiesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAvailabilitiesResponse>, I>>(object: I): GetAvailabilitiesResponse {
    const message = createBaseGetAvailabilitiesResponse();
    message.ads = object.ads?.map((e) => Ad.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAvailabilityRequest(): UpdateAvailabilityRequest {
  return { id: "", availability: undefined };
}

export const UpdateAvailabilityRequest = {
  encode(message: UpdateAvailabilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.availability !== undefined) {
      Ad.encode(message.availability, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAvailabilityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAvailabilityRequest();
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

          message.availability = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAvailabilityRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      availability: isSet(object.availability) ? Ad.fromJSON(object.availability) : undefined,
    };
  },

  toJSON(message: UpdateAvailabilityRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.availability !== undefined) {
      obj.availability = Ad.toJSON(message.availability);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAvailabilityRequest>, I>>(base?: I): UpdateAvailabilityRequest {
    return UpdateAvailabilityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAvailabilityRequest>, I>>(object: I): UpdateAvailabilityRequest {
    const message = createBaseUpdateAvailabilityRequest();
    message.id = object.id ?? "";
    message.availability = (object.availability !== undefined && object.availability !== null)
      ? Ad.fromPartial(object.availability)
      : undefined;
    return message;
  },
};

function createBaseUpdateAvailabilityResponse(): UpdateAvailabilityResponse {
  return { id: "" };
}

export const UpdateAvailabilityResponse = {
  encode(message: UpdateAvailabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAvailabilityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAvailabilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAvailabilityResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UpdateAvailabilityResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAvailabilityResponse>, I>>(base?: I): UpdateAvailabilityResponse {
    return UpdateAvailabilityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAvailabilityResponse>, I>>(object: I): UpdateAvailabilityResponse {
    const message = createBaseUpdateAvailabilityResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteAvailabilityRequest(): DeleteAvailabilityRequest {
  return { id: "", availabilityId: "" };
}

export const DeleteAvailabilityRequest = {
  encode(message: DeleteAvailabilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.availabilityId !== "") {
      writer.uint32(18).string(message.availabilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAvailabilityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAvailabilityRequest();
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

          message.availabilityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAvailabilityRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      availabilityId: isSet(object.availabilityId) ? globalThis.String(object.availabilityId) : "",
    };
  },

  toJSON(message: DeleteAvailabilityRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.availabilityId !== "") {
      obj.availabilityId = message.availabilityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAvailabilityRequest>, I>>(base?: I): DeleteAvailabilityRequest {
    return DeleteAvailabilityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAvailabilityRequest>, I>>(object: I): DeleteAvailabilityRequest {
    const message = createBaseDeleteAvailabilityRequest();
    message.id = object.id ?? "";
    message.availabilityId = object.availabilityId ?? "";
    return message;
  },
};

function createBaseDeleteAvailabilityResponse(): DeleteAvailabilityResponse {
  return { id: "" };
}

export const DeleteAvailabilityResponse = {
  encode(message: DeleteAvailabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAvailabilityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAvailabilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAvailabilityResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteAvailabilityResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAvailabilityResponse>, I>>(base?: I): DeleteAvailabilityResponse {
    return DeleteAvailabilityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAvailabilityResponse>, I>>(object: I): DeleteAvailabilityResponse {
    const message = createBaseDeleteAvailabilityResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCreateJobOfferRequest(): CreateJobOfferRequest {
  return { jobOffer: undefined };
}

export const CreateJobOfferRequest = {
  encode(message: CreateJobOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobOffer !== undefined) {
      Ad.encode(message.jobOffer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobOfferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobOffer = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateJobOfferRequest {
    return { jobOffer: isSet(object.jobOffer) ? Ad.fromJSON(object.jobOffer) : undefined };
  },

  toJSON(message: CreateJobOfferRequest): unknown {
    const obj: any = {};
    if (message.jobOffer !== undefined) {
      obj.jobOffer = Ad.toJSON(message.jobOffer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobOfferRequest>, I>>(base?: I): CreateJobOfferRequest {
    return CreateJobOfferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateJobOfferRequest>, I>>(object: I): CreateJobOfferRequest {
    const message = createBaseCreateJobOfferRequest();
    message.jobOffer = (object.jobOffer !== undefined && object.jobOffer !== null)
      ? Ad.fromPartial(object.jobOffer)
      : undefined;
    return message;
  },
};

function createBaseCreateJobOfferRequestResponse(): CreateJobOfferRequestResponse {
  return { offerId: "" };
}

export const CreateJobOfferRequestResponse = {
  encode(message: CreateJobOfferRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offerId !== "") {
      writer.uint32(10).string(message.offerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateJobOfferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateJobOfferRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.offerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateJobOfferRequestResponse {
    return { offerId: isSet(object.offerId) ? globalThis.String(object.offerId) : "" };
  },

  toJSON(message: CreateJobOfferRequestResponse): unknown {
    const obj: any = {};
    if (message.offerId !== "") {
      obj.offerId = message.offerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateJobOfferRequestResponse>, I>>(base?: I): CreateJobOfferRequestResponse {
    return CreateJobOfferRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateJobOfferRequestResponse>, I>>(
    object: I,
  ): CreateJobOfferRequestResponse {
    const message = createBaseCreateJobOfferRequestResponse();
    message.offerId = object.offerId ?? "";
    return message;
  },
};

function createBaseGetJobOfferRequest(): GetJobOfferRequest {
  return { offerId: "" };
}

export const GetJobOfferRequest = {
  encode(message: GetJobOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offerId !== "") {
      writer.uint32(10).string(message.offerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOfferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOfferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.offerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOfferRequest {
    return { offerId: isSet(object.offerId) ? globalThis.String(object.offerId) : "" };
  },

  toJSON(message: GetJobOfferRequest): unknown {
    const obj: any = {};
    if (message.offerId !== "") {
      obj.offerId = message.offerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOfferRequest>, I>>(base?: I): GetJobOfferRequest {
    return GetJobOfferRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOfferRequest>, I>>(object: I): GetJobOfferRequest {
    const message = createBaseGetJobOfferRequest();
    message.offerId = object.offerId ?? "";
    return message;
  },
};

function createBaseGetJobOfferResponse(): GetJobOfferResponse {
  return { ad: undefined };
}

export const GetJobOfferResponse = {
  encode(message: GetJobOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOfferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOfferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ad = Ad.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOfferResponse {
    return { ad: isSet(object.ad) ? Ad.fromJSON(object.ad) : undefined };
  },

  toJSON(message: GetJobOfferResponse): unknown {
    const obj: any = {};
    if (message.ad !== undefined) {
      obj.ad = Ad.toJSON(message.ad);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOfferResponse>, I>>(base?: I): GetJobOfferResponse {
    return GetJobOfferResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOfferResponse>, I>>(object: I): GetJobOfferResponse {
    const message = createBaseGetJobOfferResponse();
    message.ad = (object.ad !== undefined && object.ad !== null) ? Ad.fromPartial(object.ad) : undefined;
    return message;
  },
};

function createBaseGetJobOffersRecommendationRequest(): GetJobOffersRecommendationRequest {
  return { userId: "" };
}

export const GetJobOffersRecommendationRequest = {
  encode(message: GetJobOffersRecommendationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOffersRecommendationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOffersRecommendationRequest();
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

  fromJSON(object: any): GetJobOffersRecommendationRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: GetJobOffersRecommendationRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOffersRecommendationRequest>, I>>(
    base?: I,
  ): GetJobOffersRecommendationRequest {
    return GetJobOffersRecommendationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOffersRecommendationRequest>, I>>(
    object: I,
  ): GetJobOffersRecommendationRequest {
    const message = createBaseGetJobOffersRecommendationRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetJobOffersRecommendationResponse(): GetJobOffersRecommendationResponse {
  return { jobOffer: [] };
}

export const GetJobOffersRecommendationResponse = {
  encode(message: GetJobOffersRecommendationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.jobOffer) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetJobOffersRecommendationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetJobOffersRecommendationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobOffer.push(Ad.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetJobOffersRecommendationResponse {
    return {
      jobOffer: globalThis.Array.isArray(object?.jobOffer) ? object.jobOffer.map((e: any) => Ad.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetJobOffersRecommendationResponse): unknown {
    const obj: any = {};
    if (message.jobOffer?.length) {
      obj.jobOffer = message.jobOffer.map((e) => Ad.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetJobOffersRecommendationResponse>, I>>(
    base?: I,
  ): GetJobOffersRecommendationResponse {
    return GetJobOffersRecommendationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetJobOffersRecommendationResponse>, I>>(
    object: I,
  ): GetJobOffersRecommendationResponse {
    const message = createBaseGetJobOffersRecommendationResponse();
    message.jobOffer = object.jobOffer?.map((e) => Ad.fromPartial(e)) || [];
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
