/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
  CreateAvailabilityResponse,
  CreateExperienceResponse,
  CreateJobOfferRequestResponse,
  DeleteAvailabilityResponse,
  DeleteExperienceResponse,
  GetAvailabilitiesResponse,
  GetExperienceResponse,
  GetExperiencesResponse,
  GetJobOfferResponse,
  UpdateAvailabilityResponse,
  UpdateExperienceResponse,
} from "./services/ads";
import {
  ApplyJobOfferResponse,
  GetJobCategoriesResponse,
  GetJobOffersStatusResponse,
  UpdateJobOfferStatusResponse,
} from "./services/jobs";
import { CreateNotificationResponse, GetNotificationsResponse } from "./services/notifications";
import { CreateUserProfileResponse, UpdateUserProfileResponse } from "./services/profile";
import { GetJobOffersRecommendationResponse } from "./services/recommendation";

export const protobufPackage = "response";

export interface Error {
  errorMessage: string;
  errorCode: number;
}

export interface Response {
  requestId: string;
  error?: Error | undefined;
  getExperiencesResponse?: GetExperiencesResponse | undefined;
  getExperienceResponse?: GetExperienceResponse | undefined;
  createExperienceResponse?: CreateExperienceResponse | undefined;
  updateExperienceResponse?: UpdateExperienceResponse | undefined;
  deleteExperienceResponse?: DeleteExperienceResponse | undefined;
  createAvailabilityResponse?: CreateAvailabilityResponse | undefined;
  getAvailabilitiesResponse?: GetAvailabilitiesResponse | undefined;
  updateAvailabilityResponse?: UpdateAvailabilityResponse | undefined;
  deleteAvailabilityResponse?: DeleteAvailabilityResponse | undefined;
  createJobOfferResponse?: CreateJobOfferRequestResponse | undefined;
  getJobOffersRecommendationResponse?: GetJobOffersRecommendationResponse | undefined;
  getJobOfferResponse?: GetJobOfferResponse | undefined;
  applyJobOfferResponse?: ApplyJobOfferResponse | undefined;
  getJobOfferStatusResponse?: GetJobOffersStatusResponse | undefined;
  getJobCategoriesResponse?: GetJobCategoriesResponse | undefined;
  updateJobOfferStatusResponse?: UpdateJobOfferStatusResponse | undefined;
  getNotificationsResponse?: GetNotificationsResponse | undefined;
  createNotificationResponse?: CreateNotificationResponse | undefined;
  createUserProfileResponse?: CreateUserProfileResponse | undefined;
  updateUserProfileResponse?: UpdateUserProfileResponse | undefined;
}

function createBaseError(): Error {
  return { errorMessage: "", errorCode: 0 };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorMessage !== "") {
      writer.uint32(10).string(message.errorMessage);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).uint32(message.errorCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.errorCode = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
      errorCode: isSet(object.errorCode) ? globalThis.Number(object.errorCode) : 0,
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.errorCode !== 0) {
      obj.errorCode = Math.round(message.errorCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.errorMessage = object.errorMessage ?? "";
    message.errorCode = object.errorCode ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    requestId: "",
    error: undefined,
    getExperiencesResponse: undefined,
    getExperienceResponse: undefined,
    createExperienceResponse: undefined,
    updateExperienceResponse: undefined,
    deleteExperienceResponse: undefined,
    createAvailabilityResponse: undefined,
    getAvailabilitiesResponse: undefined,
    updateAvailabilityResponse: undefined,
    deleteAvailabilityResponse: undefined,
    createJobOfferResponse: undefined,
    getJobOffersRecommendationResponse: undefined,
    getJobOfferResponse: undefined,
    applyJobOfferResponse: undefined,
    getJobOfferStatusResponse: undefined,
    getJobCategoriesResponse: undefined,
    updateJobOfferStatusResponse: undefined,
    getNotificationsResponse: undefined,
    createNotificationResponse: undefined,
    createUserProfileResponse: undefined,
    updateUserProfileResponse: undefined,
  };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.getExperiencesResponse !== undefined) {
      GetExperiencesResponse.encode(message.getExperiencesResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.getExperienceResponse !== undefined) {
      GetExperienceResponse.encode(message.getExperienceResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.createExperienceResponse !== undefined) {
      CreateExperienceResponse.encode(message.createExperienceResponse, writer.uint32(42).fork()).ldelim();
    }
    if (message.updateExperienceResponse !== undefined) {
      UpdateExperienceResponse.encode(message.updateExperienceResponse, writer.uint32(50).fork()).ldelim();
    }
    if (message.deleteExperienceResponse !== undefined) {
      DeleteExperienceResponse.encode(message.deleteExperienceResponse, writer.uint32(58).fork()).ldelim();
    }
    if (message.createAvailabilityResponse !== undefined) {
      CreateAvailabilityResponse.encode(message.createAvailabilityResponse, writer.uint32(66).fork()).ldelim();
    }
    if (message.getAvailabilitiesResponse !== undefined) {
      GetAvailabilitiesResponse.encode(message.getAvailabilitiesResponse, writer.uint32(74).fork()).ldelim();
    }
    if (message.updateAvailabilityResponse !== undefined) {
      UpdateAvailabilityResponse.encode(message.updateAvailabilityResponse, writer.uint32(82).fork()).ldelim();
    }
    if (message.deleteAvailabilityResponse !== undefined) {
      DeleteAvailabilityResponse.encode(message.deleteAvailabilityResponse, writer.uint32(90).fork()).ldelim();
    }
    if (message.createJobOfferResponse !== undefined) {
      CreateJobOfferRequestResponse.encode(message.createJobOfferResponse, writer.uint32(98).fork()).ldelim();
    }
    if (message.getJobOffersRecommendationResponse !== undefined) {
      GetJobOffersRecommendationResponse.encode(message.getJobOffersRecommendationResponse, writer.uint32(106).fork())
        .ldelim();
    }
    if (message.getJobOfferResponse !== undefined) {
      GetJobOfferResponse.encode(message.getJobOfferResponse, writer.uint32(114).fork()).ldelim();
    }
    if (message.applyJobOfferResponse !== undefined) {
      ApplyJobOfferResponse.encode(message.applyJobOfferResponse, writer.uint32(122).fork()).ldelim();
    }
    if (message.getJobOfferStatusResponse !== undefined) {
      GetJobOffersStatusResponse.encode(message.getJobOfferStatusResponse, writer.uint32(130).fork()).ldelim();
    }
    if (message.getJobCategoriesResponse !== undefined) {
      GetJobCategoriesResponse.encode(message.getJobCategoriesResponse, writer.uint32(138).fork()).ldelim();
    }
    if (message.updateJobOfferStatusResponse !== undefined) {
      UpdateJobOfferStatusResponse.encode(message.updateJobOfferStatusResponse, writer.uint32(146).fork()).ldelim();
    }
    if (message.getNotificationsResponse !== undefined) {
      GetNotificationsResponse.encode(message.getNotificationsResponse, writer.uint32(154).fork()).ldelim();
    }
    if (message.createNotificationResponse !== undefined) {
      CreateNotificationResponse.encode(message.createNotificationResponse, writer.uint32(162).fork()).ldelim();
    }
    if (message.createUserProfileResponse !== undefined) {
      CreateUserProfileResponse.encode(message.createUserProfileResponse, writer.uint32(170).fork()).ldelim();
    }
    if (message.updateUserProfileResponse !== undefined) {
      UpdateUserProfileResponse.encode(message.updateUserProfileResponse, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
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

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getExperiencesResponse = GetExperiencesResponse.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getExperienceResponse = GetExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createExperienceResponse = CreateExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateExperienceResponse = UpdateExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteExperienceResponse = DeleteExperienceResponse.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createAvailabilityResponse = CreateAvailabilityResponse.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getAvailabilitiesResponse = GetAvailabilitiesResponse.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updateAvailabilityResponse = UpdateAvailabilityResponse.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.deleteAvailabilityResponse = DeleteAvailabilityResponse.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createJobOfferResponse = CreateJobOfferRequestResponse.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.getJobOffersRecommendationResponse = GetJobOffersRecommendationResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.getJobOfferResponse = GetJobOfferResponse.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.applyJobOfferResponse = ApplyJobOfferResponse.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.getJobOfferStatusResponse = GetJobOffersStatusResponse.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.getJobCategoriesResponse = GetJobCategoriesResponse.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.updateJobOfferStatusResponse = UpdateJobOfferStatusResponse.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.getNotificationsResponse = GetNotificationsResponse.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.createNotificationResponse = CreateNotificationResponse.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.createUserProfileResponse = CreateUserProfileResponse.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.updateUserProfileResponse = UpdateUserProfileResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      getExperiencesResponse: isSet(object.getExperiencesResponse)
        ? GetExperiencesResponse.fromJSON(object.getExperiencesResponse)
        : undefined,
      getExperienceResponse: isSet(object.getExperienceResponse)
        ? GetExperienceResponse.fromJSON(object.getExperienceResponse)
        : undefined,
      createExperienceResponse: isSet(object.createExperienceResponse)
        ? CreateExperienceResponse.fromJSON(object.createExperienceResponse)
        : undefined,
      updateExperienceResponse: isSet(object.updateExperienceResponse)
        ? UpdateExperienceResponse.fromJSON(object.updateExperienceResponse)
        : undefined,
      deleteExperienceResponse: isSet(object.deleteExperienceResponse)
        ? DeleteExperienceResponse.fromJSON(object.deleteExperienceResponse)
        : undefined,
      createAvailabilityResponse: isSet(object.createAvailabilityResponse)
        ? CreateAvailabilityResponse.fromJSON(object.createAvailabilityResponse)
        : undefined,
      getAvailabilitiesResponse: isSet(object.getAvailabilitiesResponse)
        ? GetAvailabilitiesResponse.fromJSON(object.getAvailabilitiesResponse)
        : undefined,
      updateAvailabilityResponse: isSet(object.updateAvailabilityResponse)
        ? UpdateAvailabilityResponse.fromJSON(object.updateAvailabilityResponse)
        : undefined,
      deleteAvailabilityResponse: isSet(object.deleteAvailabilityResponse)
        ? DeleteAvailabilityResponse.fromJSON(object.deleteAvailabilityResponse)
        : undefined,
      createJobOfferResponse: isSet(object.createJobOfferResponse)
        ? CreateJobOfferRequestResponse.fromJSON(object.createJobOfferResponse)
        : undefined,
      getJobOffersRecommendationResponse: isSet(object.getJobOffersRecommendationResponse)
        ? GetJobOffersRecommendationResponse.fromJSON(object.getJobOffersRecommendationResponse)
        : undefined,
      getJobOfferResponse: isSet(object.getJobOfferResponse)
        ? GetJobOfferResponse.fromJSON(object.getJobOfferResponse)
        : undefined,
      applyJobOfferResponse: isSet(object.applyJobOfferResponse)
        ? ApplyJobOfferResponse.fromJSON(object.applyJobOfferResponse)
        : undefined,
      getJobOfferStatusResponse: isSet(object.getJobOfferStatusResponse)
        ? GetJobOffersStatusResponse.fromJSON(object.getJobOfferStatusResponse)
        : undefined,
      getJobCategoriesResponse: isSet(object.getJobCategoriesResponse)
        ? GetJobCategoriesResponse.fromJSON(object.getJobCategoriesResponse)
        : undefined,
      updateJobOfferStatusResponse: isSet(object.updateJobOfferStatusResponse)
        ? UpdateJobOfferStatusResponse.fromJSON(object.updateJobOfferStatusResponse)
        : undefined,
      getNotificationsResponse: isSet(object.getNotificationsResponse)
        ? GetNotificationsResponse.fromJSON(object.getNotificationsResponse)
        : undefined,
      createNotificationResponse: isSet(object.createNotificationResponse)
        ? CreateNotificationResponse.fromJSON(object.createNotificationResponse)
        : undefined,
      createUserProfileResponse: isSet(object.createUserProfileResponse)
        ? CreateUserProfileResponse.fromJSON(object.createUserProfileResponse)
        : undefined,
      updateUserProfileResponse: isSet(object.updateUserProfileResponse)
        ? UpdateUserProfileResponse.fromJSON(object.updateUserProfileResponse)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.getExperiencesResponse !== undefined) {
      obj.getExperiencesResponse = GetExperiencesResponse.toJSON(message.getExperiencesResponse);
    }
    if (message.getExperienceResponse !== undefined) {
      obj.getExperienceResponse = GetExperienceResponse.toJSON(message.getExperienceResponse);
    }
    if (message.createExperienceResponse !== undefined) {
      obj.createExperienceResponse = CreateExperienceResponse.toJSON(message.createExperienceResponse);
    }
    if (message.updateExperienceResponse !== undefined) {
      obj.updateExperienceResponse = UpdateExperienceResponse.toJSON(message.updateExperienceResponse);
    }
    if (message.deleteExperienceResponse !== undefined) {
      obj.deleteExperienceResponse = DeleteExperienceResponse.toJSON(message.deleteExperienceResponse);
    }
    if (message.createAvailabilityResponse !== undefined) {
      obj.createAvailabilityResponse = CreateAvailabilityResponse.toJSON(message.createAvailabilityResponse);
    }
    if (message.getAvailabilitiesResponse !== undefined) {
      obj.getAvailabilitiesResponse = GetAvailabilitiesResponse.toJSON(message.getAvailabilitiesResponse);
    }
    if (message.updateAvailabilityResponse !== undefined) {
      obj.updateAvailabilityResponse = UpdateAvailabilityResponse.toJSON(message.updateAvailabilityResponse);
    }
    if (message.deleteAvailabilityResponse !== undefined) {
      obj.deleteAvailabilityResponse = DeleteAvailabilityResponse.toJSON(message.deleteAvailabilityResponse);
    }
    if (message.createJobOfferResponse !== undefined) {
      obj.createJobOfferResponse = CreateJobOfferRequestResponse.toJSON(message.createJobOfferResponse);
    }
    if (message.getJobOffersRecommendationResponse !== undefined) {
      obj.getJobOffersRecommendationResponse = GetJobOffersRecommendationResponse.toJSON(
        message.getJobOffersRecommendationResponse,
      );
    }
    if (message.getJobOfferResponse !== undefined) {
      obj.getJobOfferResponse = GetJobOfferResponse.toJSON(message.getJobOfferResponse);
    }
    if (message.applyJobOfferResponse !== undefined) {
      obj.applyJobOfferResponse = ApplyJobOfferResponse.toJSON(message.applyJobOfferResponse);
    }
    if (message.getJobOfferStatusResponse !== undefined) {
      obj.getJobOfferStatusResponse = GetJobOffersStatusResponse.toJSON(message.getJobOfferStatusResponse);
    }
    if (message.getJobCategoriesResponse !== undefined) {
      obj.getJobCategoriesResponse = GetJobCategoriesResponse.toJSON(message.getJobCategoriesResponse);
    }
    if (message.updateJobOfferStatusResponse !== undefined) {
      obj.updateJobOfferStatusResponse = UpdateJobOfferStatusResponse.toJSON(message.updateJobOfferStatusResponse);
    }
    if (message.getNotificationsResponse !== undefined) {
      obj.getNotificationsResponse = GetNotificationsResponse.toJSON(message.getNotificationsResponse);
    }
    if (message.createNotificationResponse !== undefined) {
      obj.createNotificationResponse = CreateNotificationResponse.toJSON(message.createNotificationResponse);
    }
    if (message.createUserProfileResponse !== undefined) {
      obj.createUserProfileResponse = CreateUserProfileResponse.toJSON(message.createUserProfileResponse);
    }
    if (message.updateUserProfileResponse !== undefined) {
      obj.updateUserProfileResponse = UpdateUserProfileResponse.toJSON(message.updateUserProfileResponse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.requestId = object.requestId ?? "";
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.getExperiencesResponse =
      (object.getExperiencesResponse !== undefined && object.getExperiencesResponse !== null)
        ? GetExperiencesResponse.fromPartial(object.getExperiencesResponse)
        : undefined;
    message.getExperienceResponse =
      (object.getExperienceResponse !== undefined && object.getExperienceResponse !== null)
        ? GetExperienceResponse.fromPartial(object.getExperienceResponse)
        : undefined;
    message.createExperienceResponse =
      (object.createExperienceResponse !== undefined && object.createExperienceResponse !== null)
        ? CreateExperienceResponse.fromPartial(object.createExperienceResponse)
        : undefined;
    message.updateExperienceResponse =
      (object.updateExperienceResponse !== undefined && object.updateExperienceResponse !== null)
        ? UpdateExperienceResponse.fromPartial(object.updateExperienceResponse)
        : undefined;
    message.deleteExperienceResponse =
      (object.deleteExperienceResponse !== undefined && object.deleteExperienceResponse !== null)
        ? DeleteExperienceResponse.fromPartial(object.deleteExperienceResponse)
        : undefined;
    message.createAvailabilityResponse =
      (object.createAvailabilityResponse !== undefined && object.createAvailabilityResponse !== null)
        ? CreateAvailabilityResponse.fromPartial(object.createAvailabilityResponse)
        : undefined;
    message.getAvailabilitiesResponse =
      (object.getAvailabilitiesResponse !== undefined && object.getAvailabilitiesResponse !== null)
        ? GetAvailabilitiesResponse.fromPartial(object.getAvailabilitiesResponse)
        : undefined;
    message.updateAvailabilityResponse =
      (object.updateAvailabilityResponse !== undefined && object.updateAvailabilityResponse !== null)
        ? UpdateAvailabilityResponse.fromPartial(object.updateAvailabilityResponse)
        : undefined;
    message.deleteAvailabilityResponse =
      (object.deleteAvailabilityResponse !== undefined && object.deleteAvailabilityResponse !== null)
        ? DeleteAvailabilityResponse.fromPartial(object.deleteAvailabilityResponse)
        : undefined;
    message.createJobOfferResponse =
      (object.createJobOfferResponse !== undefined && object.createJobOfferResponse !== null)
        ? CreateJobOfferRequestResponse.fromPartial(object.createJobOfferResponse)
        : undefined;
    message.getJobOffersRecommendationResponse =
      (object.getJobOffersRecommendationResponse !== undefined && object.getJobOffersRecommendationResponse !== null)
        ? GetJobOffersRecommendationResponse.fromPartial(object.getJobOffersRecommendationResponse)
        : undefined;
    message.getJobOfferResponse = (object.getJobOfferResponse !== undefined && object.getJobOfferResponse !== null)
      ? GetJobOfferResponse.fromPartial(object.getJobOfferResponse)
      : undefined;
    message.applyJobOfferResponse =
      (object.applyJobOfferResponse !== undefined && object.applyJobOfferResponse !== null)
        ? ApplyJobOfferResponse.fromPartial(object.applyJobOfferResponse)
        : undefined;
    message.getJobOfferStatusResponse =
      (object.getJobOfferStatusResponse !== undefined && object.getJobOfferStatusResponse !== null)
        ? GetJobOffersStatusResponse.fromPartial(object.getJobOfferStatusResponse)
        : undefined;
    message.getJobCategoriesResponse =
      (object.getJobCategoriesResponse !== undefined && object.getJobCategoriesResponse !== null)
        ? GetJobCategoriesResponse.fromPartial(object.getJobCategoriesResponse)
        : undefined;
    message.updateJobOfferStatusResponse =
      (object.updateJobOfferStatusResponse !== undefined && object.updateJobOfferStatusResponse !== null)
        ? UpdateJobOfferStatusResponse.fromPartial(object.updateJobOfferStatusResponse)
        : undefined;
    message.getNotificationsResponse =
      (object.getNotificationsResponse !== undefined && object.getNotificationsResponse !== null)
        ? GetNotificationsResponse.fromPartial(object.getNotificationsResponse)
        : undefined;
    message.createNotificationResponse =
      (object.createNotificationResponse !== undefined && object.createNotificationResponse !== null)
        ? CreateNotificationResponse.fromPartial(object.createNotificationResponse)
        : undefined;
    message.createUserProfileResponse =
      (object.createUserProfileResponse !== undefined && object.createUserProfileResponse !== null)
        ? CreateUserProfileResponse.fromPartial(object.createUserProfileResponse)
        : undefined;
    message.updateUserProfileResponse =
      (object.updateUserProfileResponse !== undefined && object.updateUserProfileResponse !== null)
        ? UpdateUserProfileResponse.fromPartial(object.updateUserProfileResponse)
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
