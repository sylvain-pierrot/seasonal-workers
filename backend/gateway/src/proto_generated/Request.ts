/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
  CreateAvailabilityRequest,
  CreateExperienceRequest,
  CreateJobOfferRequest,
  DeleteAvailabilityRequest,
  DeleteExperienceRequest,
  GetAvailabilitiesRequest,
  GetExperienceRequest,
  GetExperiencesRequest,
  GetJobOfferRequest,
  UpdateAvailabilityRequest,
  UpdateExperienceRequest,
} from "./services/ads";
import {
  ApplyJobOfferRequest,
  GetJobCategoriesRequest,
  GetJobOffersStatusRequest,
  UpdateJobOfferStatusRequest,
} from "./services/jobs";
import { GetNotificationsRequest } from "./services/notifications";
import { GetJobOffersRecommendationRequest } from "./services/recommendation";

export const protobufPackage = "";

/** Message that contains a generic request */
export interface Request {
  requestId: string;
  getExperiencesRequest?: GetExperiencesRequest | undefined;
  getExperienceRequest?: GetExperienceRequest | undefined;
  createExperienceRequest?: CreateExperienceRequest | undefined;
  updateExperienceRequest?: UpdateExperienceRequest | undefined;
  deleteExperienceRequest?: DeleteExperienceRequest | undefined;
  createAvailabilityRequest?: CreateAvailabilityRequest | undefined;
  getAvailabilitiesRequest?: GetAvailabilitiesRequest | undefined;
  deleteAvailabilityRequest?: DeleteAvailabilityRequest | undefined;
  updateAvailabilityRequest?: UpdateAvailabilityRequest | undefined;
  createJobOfferRequest?: CreateJobOfferRequest | undefined;
  getJobOffersRecommendationRequest?: GetJobOffersRecommendationRequest | undefined;
  getJobOfferRequest?: GetJobOfferRequest | undefined;
  applyJobOfferRequest?: ApplyJobOfferRequest | undefined;
  getJobOffersStatusRequest?: GetJobOffersStatusRequest | undefined;
  getJobCategoriesRequest?: GetJobCategoriesRequest | undefined;
  updateJobOfferStatusRequest?: UpdateJobOfferStatusRequest | undefined;
  getNotificationsRequest?: GetNotificationsRequest | undefined;
}

function createBaseRequest(): Request {
  return {
    requestId: "",
    getExperiencesRequest: undefined,
    getExperienceRequest: undefined,
    createExperienceRequest: undefined,
    updateExperienceRequest: undefined,
    deleteExperienceRequest: undefined,
    createAvailabilityRequest: undefined,
    getAvailabilitiesRequest: undefined,
    deleteAvailabilityRequest: undefined,
    updateAvailabilityRequest: undefined,
    createJobOfferRequest: undefined,
    getJobOffersRecommendationRequest: undefined,
    getJobOfferRequest: undefined,
    applyJobOfferRequest: undefined,
    getJobOffersStatusRequest: undefined,
    getJobCategoriesRequest: undefined,
    updateJobOfferStatusRequest: undefined,
    getNotificationsRequest: undefined,
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
    if (message.createAvailabilityRequest !== undefined) {
      CreateAvailabilityRequest.encode(message.createAvailabilityRequest, writer.uint32(58).fork()).ldelim();
    }
    if (message.getAvailabilitiesRequest !== undefined) {
      GetAvailabilitiesRequest.encode(message.getAvailabilitiesRequest, writer.uint32(66).fork()).ldelim();
    }
    if (message.deleteAvailabilityRequest !== undefined) {
      DeleteAvailabilityRequest.encode(message.deleteAvailabilityRequest, writer.uint32(74).fork()).ldelim();
    }
    if (message.updateAvailabilityRequest !== undefined) {
      UpdateAvailabilityRequest.encode(message.updateAvailabilityRequest, writer.uint32(82).fork()).ldelim();
    }
    if (message.createJobOfferRequest !== undefined) {
      CreateJobOfferRequest.encode(message.createJobOfferRequest, writer.uint32(90).fork()).ldelim();
    }
    if (message.getJobOffersRecommendationRequest !== undefined) {
      GetJobOffersRecommendationRequest.encode(message.getJobOffersRecommendationRequest, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.getJobOfferRequest !== undefined) {
      GetJobOfferRequest.encode(message.getJobOfferRequest, writer.uint32(106).fork()).ldelim();
    }
    if (message.applyJobOfferRequest !== undefined) {
      ApplyJobOfferRequest.encode(message.applyJobOfferRequest, writer.uint32(114).fork()).ldelim();
    }
    if (message.getJobOffersStatusRequest !== undefined) {
      GetJobOffersStatusRequest.encode(message.getJobOffersStatusRequest, writer.uint32(122).fork()).ldelim();
    }
    if (message.getJobCategoriesRequest !== undefined) {
      GetJobCategoriesRequest.encode(message.getJobCategoriesRequest, writer.uint32(130).fork()).ldelim();
    }
    if (message.updateJobOfferStatusRequest !== undefined) {
      UpdateJobOfferStatusRequest.encode(message.updateJobOfferStatusRequest, writer.uint32(138).fork()).ldelim();
    }
    if (message.getNotificationsRequest !== undefined) {
      GetNotificationsRequest.encode(message.getNotificationsRequest, writer.uint32(146).fork()).ldelim();
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
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createAvailabilityRequest = CreateAvailabilityRequest.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getAvailabilitiesRequest = GetAvailabilitiesRequest.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.deleteAvailabilityRequest = DeleteAvailabilityRequest.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updateAvailabilityRequest = UpdateAvailabilityRequest.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.createJobOfferRequest = CreateJobOfferRequest.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.getJobOffersRecommendationRequest = GetJobOffersRecommendationRequest.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.getJobOfferRequest = GetJobOfferRequest.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.applyJobOfferRequest = ApplyJobOfferRequest.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.getJobOffersStatusRequest = GetJobOffersStatusRequest.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.getJobCategoriesRequest = GetJobCategoriesRequest.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.updateJobOfferStatusRequest = UpdateJobOfferStatusRequest.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.getNotificationsRequest = GetNotificationsRequest.decode(reader, reader.uint32());
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
      createAvailabilityRequest: isSet(object.createAvailabilityRequest)
        ? CreateAvailabilityRequest.fromJSON(object.createAvailabilityRequest)
        : undefined,
      getAvailabilitiesRequest: isSet(object.getAvailabilitiesRequest)
        ? GetAvailabilitiesRequest.fromJSON(object.getAvailabilitiesRequest)
        : undefined,
      deleteAvailabilityRequest: isSet(object.deleteAvailabilityRequest)
        ? DeleteAvailabilityRequest.fromJSON(object.deleteAvailabilityRequest)
        : undefined,
      updateAvailabilityRequest: isSet(object.updateAvailabilityRequest)
        ? UpdateAvailabilityRequest.fromJSON(object.updateAvailabilityRequest)
        : undefined,
      createJobOfferRequest: isSet(object.createJobOfferRequest)
        ? CreateJobOfferRequest.fromJSON(object.createJobOfferRequest)
        : undefined,
      getJobOffersRecommendationRequest: isSet(object.getJobOffersRecommendationRequest)
        ? GetJobOffersRecommendationRequest.fromJSON(object.getJobOffersRecommendationRequest)
        : undefined,
      getJobOfferRequest: isSet(object.getJobOfferRequest)
        ? GetJobOfferRequest.fromJSON(object.getJobOfferRequest)
        : undefined,
      applyJobOfferRequest: isSet(object.applyJobOfferRequest)
        ? ApplyJobOfferRequest.fromJSON(object.applyJobOfferRequest)
        : undefined,
      getJobOffersStatusRequest: isSet(object.getJobOffersStatusRequest)
        ? GetJobOffersStatusRequest.fromJSON(object.getJobOffersStatusRequest)
        : undefined,
      getJobCategoriesRequest: isSet(object.getJobCategoriesRequest)
        ? GetJobCategoriesRequest.fromJSON(object.getJobCategoriesRequest)
        : undefined,
      updateJobOfferStatusRequest: isSet(object.updateJobOfferStatusRequest)
        ? UpdateJobOfferStatusRequest.fromJSON(object.updateJobOfferStatusRequest)
        : undefined,
      getNotificationsRequest: isSet(object.getNotificationsRequest)
        ? GetNotificationsRequest.fromJSON(object.getNotificationsRequest)
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
    if (message.createAvailabilityRequest !== undefined) {
      obj.createAvailabilityRequest = CreateAvailabilityRequest.toJSON(message.createAvailabilityRequest);
    }
    if (message.getAvailabilitiesRequest !== undefined) {
      obj.getAvailabilitiesRequest = GetAvailabilitiesRequest.toJSON(message.getAvailabilitiesRequest);
    }
    if (message.deleteAvailabilityRequest !== undefined) {
      obj.deleteAvailabilityRequest = DeleteAvailabilityRequest.toJSON(message.deleteAvailabilityRequest);
    }
    if (message.updateAvailabilityRequest !== undefined) {
      obj.updateAvailabilityRequest = UpdateAvailabilityRequest.toJSON(message.updateAvailabilityRequest);
    }
    if (message.createJobOfferRequest !== undefined) {
      obj.createJobOfferRequest = CreateJobOfferRequest.toJSON(message.createJobOfferRequest);
    }
    if (message.getJobOffersRecommendationRequest !== undefined) {
      obj.getJobOffersRecommendationRequest = GetJobOffersRecommendationRequest.toJSON(
        message.getJobOffersRecommendationRequest,
      );
    }
    if (message.getJobOfferRequest !== undefined) {
      obj.getJobOfferRequest = GetJobOfferRequest.toJSON(message.getJobOfferRequest);
    }
    if (message.applyJobOfferRequest !== undefined) {
      obj.applyJobOfferRequest = ApplyJobOfferRequest.toJSON(message.applyJobOfferRequest);
    }
    if (message.getJobOffersStatusRequest !== undefined) {
      obj.getJobOffersStatusRequest = GetJobOffersStatusRequest.toJSON(message.getJobOffersStatusRequest);
    }
    if (message.getJobCategoriesRequest !== undefined) {
      obj.getJobCategoriesRequest = GetJobCategoriesRequest.toJSON(message.getJobCategoriesRequest);
    }
    if (message.updateJobOfferStatusRequest !== undefined) {
      obj.updateJobOfferStatusRequest = UpdateJobOfferStatusRequest.toJSON(message.updateJobOfferStatusRequest);
    }
    if (message.getNotificationsRequest !== undefined) {
      obj.getNotificationsRequest = GetNotificationsRequest.toJSON(message.getNotificationsRequest);
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
    message.createAvailabilityRequest =
      (object.createAvailabilityRequest !== undefined && object.createAvailabilityRequest !== null)
        ? CreateAvailabilityRequest.fromPartial(object.createAvailabilityRequest)
        : undefined;
    message.getAvailabilitiesRequest =
      (object.getAvailabilitiesRequest !== undefined && object.getAvailabilitiesRequest !== null)
        ? GetAvailabilitiesRequest.fromPartial(object.getAvailabilitiesRequest)
        : undefined;
    message.deleteAvailabilityRequest =
      (object.deleteAvailabilityRequest !== undefined && object.deleteAvailabilityRequest !== null)
        ? DeleteAvailabilityRequest.fromPartial(object.deleteAvailabilityRequest)
        : undefined;
    message.updateAvailabilityRequest =
      (object.updateAvailabilityRequest !== undefined && object.updateAvailabilityRequest !== null)
        ? UpdateAvailabilityRequest.fromPartial(object.updateAvailabilityRequest)
        : undefined;
    message.createJobOfferRequest =
      (object.createJobOfferRequest !== undefined && object.createJobOfferRequest !== null)
        ? CreateJobOfferRequest.fromPartial(object.createJobOfferRequest)
        : undefined;
    message.getJobOffersRecommendationRequest =
      (object.getJobOffersRecommendationRequest !== undefined && object.getJobOffersRecommendationRequest !== null)
        ? GetJobOffersRecommendationRequest.fromPartial(object.getJobOffersRecommendationRequest)
        : undefined;
    message.getJobOfferRequest = (object.getJobOfferRequest !== undefined && object.getJobOfferRequest !== null)
      ? GetJobOfferRequest.fromPartial(object.getJobOfferRequest)
      : undefined;
    message.applyJobOfferRequest = (object.applyJobOfferRequest !== undefined && object.applyJobOfferRequest !== null)
      ? ApplyJobOfferRequest.fromPartial(object.applyJobOfferRequest)
      : undefined;
    message.getJobOffersStatusRequest =
      (object.getJobOffersStatusRequest !== undefined && object.getJobOffersStatusRequest !== null)
        ? GetJobOffersStatusRequest.fromPartial(object.getJobOffersStatusRequest)
        : undefined;
    message.getJobCategoriesRequest =
      (object.getJobCategoriesRequest !== undefined && object.getJobCategoriesRequest !== null)
        ? GetJobCategoriesRequest.fromPartial(object.getJobCategoriesRequest)
        : undefined;
    message.updateJobOfferStatusRequest =
      (object.updateJobOfferStatusRequest !== undefined && object.updateJobOfferStatusRequest !== null)
        ? UpdateJobOfferStatusRequest.fromPartial(object.updateJobOfferStatusRequest)
        : undefined;
    message.getNotificationsRequest =
      (object.getNotificationsRequest !== undefined && object.getNotificationsRequest !== null)
        ? GetNotificationsRequest.fromPartial(object.getNotificationsRequest)
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
