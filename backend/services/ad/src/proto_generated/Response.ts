/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
  GetExperiencesResponse,
  GetExperienceResponse,
  CreateExperienceResponse,
  UpdateExperienceResponse,
  DeleteExperienceResponse,
  CreateAvailabilityResponse,
  GetAvailabilitiesResponse,
  UpdateAvailabilityResponse,
  DeleteAvailabilityResponse,
  CreateJobOfferRequestResponse,
  GetJobOfferResponse,
} from './services/ads';
import { GetJobOffersRecommendationResponse } from './services/recommendation';
import {
  ApplyJobOfferResponse,
  GetJobOffersStatusResponse,
  GetJobCategoriesResponse,
} from './services/jobs';

export const protobufPackage = '';

export interface Error {
  errorMessage: string;
  errorCode: number;
}

export interface Response {
  requestId: string;
  error: Error | undefined;
  getExperiencesResponse: GetExperiencesResponse | undefined;
  getExperienceResponse: GetExperienceResponse | undefined;
  createExperienceResponse: CreateExperienceResponse | undefined;
  updateExperienceResponse: UpdateExperienceResponse | undefined;
  deleteExperienceResponse: DeleteExperienceResponse | undefined;
  createAvailabilityResponse: CreateAvailabilityResponse | undefined;
  getAvailabilitiesResponse: GetAvailabilitiesResponse | undefined;
  updateAvailabilityResponse: UpdateAvailabilityResponse | undefined;
  deleteAvailabilityResponse: DeleteAvailabilityResponse | undefined;
  createJobOfferResponse: CreateJobOfferRequestResponse | undefined;
  getJobOffersRecommendationResponse:
    | GetJobOffersRecommendationResponse
    | undefined;
  getJobOfferResponse: GetJobOfferResponse | undefined;
  applyJobOfferResponse: ApplyJobOfferResponse | undefined;
  getJobOfferStatusResponse: GetJobOffersStatusResponse | undefined;
  getJobCategoriesResponse: GetJobCategoriesResponse | undefined;
}

const baseError: object = { errorMessage: '', errorCode: 0 };

export const Error = {
  encode(message: Error, writer: Writer = Writer.create()): Writer {
    if (message.errorMessage !== '') {
      writer.uint32(10).string(message.errorMessage);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).uint32(message.errorCode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseError } as Error;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorMessage = reader.string();
          break;
        case 2:
          message.errorCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    const message = { ...baseError } as Error;
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = String(object.errorMessage);
    } else {
      message.errorMessage = '';
    }
    if (object.errorCode !== undefined && object.errorCode !== null) {
      message.errorCode = Number(object.errorCode);
    } else {
      message.errorCode = 0;
    }
    return message;
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    message.errorCode !== undefined && (obj.errorCode = message.errorCode);
    return obj;
  },

  fromPartial(object: DeepPartial<Error>): Error {
    const message = { ...baseError } as Error;
    if (object.errorMessage !== undefined && object.errorMessage !== null) {
      message.errorMessage = object.errorMessage;
    } else {
      message.errorMessage = '';
    }
    if (object.errorCode !== undefined && object.errorCode !== null) {
      message.errorCode = object.errorCode;
    } else {
      message.errorCode = 0;
    }
    return message;
  },
};

const baseResponse: object = { requestId: '' };

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== '') {
      writer.uint32(10).string(message.requestId);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.getExperiencesResponse !== undefined) {
      GetExperiencesResponse.encode(
        message.getExperiencesResponse,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getExperienceResponse !== undefined) {
      GetExperienceResponse.encode(
        message.getExperienceResponse,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.createExperienceResponse !== undefined) {
      CreateExperienceResponse.encode(
        message.createExperienceResponse,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.updateExperienceResponse !== undefined) {
      UpdateExperienceResponse.encode(
        message.updateExperienceResponse,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteExperienceResponse !== undefined) {
      DeleteExperienceResponse.encode(
        message.deleteExperienceResponse,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.createAvailabilityResponse !== undefined) {
      CreateAvailabilityResponse.encode(
        message.createAvailabilityResponse,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.getAvailabilitiesResponse !== undefined) {
      GetAvailabilitiesResponse.encode(
        message.getAvailabilitiesResponse,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.updateAvailabilityResponse !== undefined) {
      UpdateAvailabilityResponse.encode(
        message.updateAvailabilityResponse,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.deleteAvailabilityResponse !== undefined) {
      DeleteAvailabilityResponse.encode(
        message.deleteAvailabilityResponse,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.createJobOfferResponse !== undefined) {
      CreateJobOfferRequestResponse.encode(
        message.createJobOfferResponse,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.getJobOffersRecommendationResponse !== undefined) {
      GetJobOffersRecommendationResponse.encode(
        message.getJobOffersRecommendationResponse,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.getJobOfferResponse !== undefined) {
      GetJobOfferResponse.encode(
        message.getJobOfferResponse,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.applyJobOfferResponse !== undefined) {
      ApplyJobOfferResponse.encode(
        message.applyJobOfferResponse,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.getJobOfferStatusResponse !== undefined) {
      GetJobOffersStatusResponse.encode(
        message.getJobOfferStatusResponse,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.getJobCategoriesResponse !== undefined) {
      GetJobCategoriesResponse.encode(
        message.getJobCategoriesResponse,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 3:
          message.getExperiencesResponse = GetExperiencesResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.getExperienceResponse = GetExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.createExperienceResponse = CreateExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.updateExperienceResponse = UpdateExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.deleteExperienceResponse = DeleteExperienceResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.createAvailabilityResponse =
            CreateAvailabilityResponse.decode(reader, reader.uint32());
          break;
        case 9:
          message.getAvailabilitiesResponse = GetAvailabilitiesResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 10:
          message.updateAvailabilityResponse =
            UpdateAvailabilityResponse.decode(reader, reader.uint32());
          break;
        case 11:
          message.deleteAvailabilityResponse =
            DeleteAvailabilityResponse.decode(reader, reader.uint32());
          break;
        case 12:
          message.createJobOfferResponse = CreateJobOfferRequestResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 13:
          message.getJobOffersRecommendationResponse =
            GetJobOffersRecommendationResponse.decode(reader, reader.uint32());
          break;
        case 14:
          message.getJobOfferResponse = GetJobOfferResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.applyJobOfferResponse = ApplyJobOfferResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.getJobOfferStatusResponse = GetJobOffersStatusResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 17:
          message.getJobCategoriesResponse = GetJobCategoriesResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    const message = { ...baseResponse } as Response;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = '';
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromJSON(object.error);
    } else {
      message.error = undefined;
    }
    if (
      object.getExperiencesResponse !== undefined &&
      object.getExperiencesResponse !== null
    ) {
      message.getExperiencesResponse = GetExperiencesResponse.fromJSON(
        object.getExperiencesResponse,
      );
    } else {
      message.getExperiencesResponse = undefined;
    }
    if (
      object.getExperienceResponse !== undefined &&
      object.getExperienceResponse !== null
    ) {
      message.getExperienceResponse = GetExperienceResponse.fromJSON(
        object.getExperienceResponse,
      );
    } else {
      message.getExperienceResponse = undefined;
    }
    if (
      object.createExperienceResponse !== undefined &&
      object.createExperienceResponse !== null
    ) {
      message.createExperienceResponse = CreateExperienceResponse.fromJSON(
        object.createExperienceResponse,
      );
    } else {
      message.createExperienceResponse = undefined;
    }
    if (
      object.updateExperienceResponse !== undefined &&
      object.updateExperienceResponse !== null
    ) {
      message.updateExperienceResponse = UpdateExperienceResponse.fromJSON(
        object.updateExperienceResponse,
      );
    } else {
      message.updateExperienceResponse = undefined;
    }
    if (
      object.deleteExperienceResponse !== undefined &&
      object.deleteExperienceResponse !== null
    ) {
      message.deleteExperienceResponse = DeleteExperienceResponse.fromJSON(
        object.deleteExperienceResponse,
      );
    } else {
      message.deleteExperienceResponse = undefined;
    }
    if (
      object.createAvailabilityResponse !== undefined &&
      object.createAvailabilityResponse !== null
    ) {
      message.createAvailabilityResponse = CreateAvailabilityResponse.fromJSON(
        object.createAvailabilityResponse,
      );
    } else {
      message.createAvailabilityResponse = undefined;
    }
    if (
      object.getAvailabilitiesResponse !== undefined &&
      object.getAvailabilitiesResponse !== null
    ) {
      message.getAvailabilitiesResponse = GetAvailabilitiesResponse.fromJSON(
        object.getAvailabilitiesResponse,
      );
    } else {
      message.getAvailabilitiesResponse = undefined;
    }
    if (
      object.updateAvailabilityResponse !== undefined &&
      object.updateAvailabilityResponse !== null
    ) {
      message.updateAvailabilityResponse = UpdateAvailabilityResponse.fromJSON(
        object.updateAvailabilityResponse,
      );
    } else {
      message.updateAvailabilityResponse = undefined;
    }
    if (
      object.deleteAvailabilityResponse !== undefined &&
      object.deleteAvailabilityResponse !== null
    ) {
      message.deleteAvailabilityResponse = DeleteAvailabilityResponse.fromJSON(
        object.deleteAvailabilityResponse,
      );
    } else {
      message.deleteAvailabilityResponse = undefined;
    }
    if (
      object.createJobOfferResponse !== undefined &&
      object.createJobOfferResponse !== null
    ) {
      message.createJobOfferResponse = CreateJobOfferRequestResponse.fromJSON(
        object.createJobOfferResponse,
      );
    } else {
      message.createJobOfferResponse = undefined;
    }
    if (
      object.getJobOffersRecommendationResponse !== undefined &&
      object.getJobOffersRecommendationResponse !== null
    ) {
      message.getJobOffersRecommendationResponse =
        GetJobOffersRecommendationResponse.fromJSON(
          object.getJobOffersRecommendationResponse,
        );
    } else {
      message.getJobOffersRecommendationResponse = undefined;
    }
    if (
      object.getJobOfferResponse !== undefined &&
      object.getJobOfferResponse !== null
    ) {
      message.getJobOfferResponse = GetJobOfferResponse.fromJSON(
        object.getJobOfferResponse,
      );
    } else {
      message.getJobOfferResponse = undefined;
    }
    if (
      object.applyJobOfferResponse !== undefined &&
      object.applyJobOfferResponse !== null
    ) {
      message.applyJobOfferResponse = ApplyJobOfferResponse.fromJSON(
        object.applyJobOfferResponse,
      );
    } else {
      message.applyJobOfferResponse = undefined;
    }
    if (
      object.getJobOfferStatusResponse !== undefined &&
      object.getJobOfferStatusResponse !== null
    ) {
      message.getJobOfferStatusResponse = GetJobOffersStatusResponse.fromJSON(
        object.getJobOfferStatusResponse,
      );
    } else {
      message.getJobOfferStatusResponse = undefined;
    }
    if (
      object.getJobCategoriesResponse !== undefined &&
      object.getJobCategoriesResponse !== null
    ) {
      message.getJobCategoriesResponse = GetJobCategoriesResponse.fromJSON(
        object.getJobCategoriesResponse,
      );
    } else {
      message.getJobCategoriesResponse = undefined;
    }
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.getExperiencesResponse !== undefined &&
      (obj.getExperiencesResponse = message.getExperiencesResponse
        ? GetExperiencesResponse.toJSON(message.getExperiencesResponse)
        : undefined);
    message.getExperienceResponse !== undefined &&
      (obj.getExperienceResponse = message.getExperienceResponse
        ? GetExperienceResponse.toJSON(message.getExperienceResponse)
        : undefined);
    message.createExperienceResponse !== undefined &&
      (obj.createExperienceResponse = message.createExperienceResponse
        ? CreateExperienceResponse.toJSON(message.createExperienceResponse)
        : undefined);
    message.updateExperienceResponse !== undefined &&
      (obj.updateExperienceResponse = message.updateExperienceResponse
        ? UpdateExperienceResponse.toJSON(message.updateExperienceResponse)
        : undefined);
    message.deleteExperienceResponse !== undefined &&
      (obj.deleteExperienceResponse = message.deleteExperienceResponse
        ? DeleteExperienceResponse.toJSON(message.deleteExperienceResponse)
        : undefined);
    message.createAvailabilityResponse !== undefined &&
      (obj.createAvailabilityResponse = message.createAvailabilityResponse
        ? CreateAvailabilityResponse.toJSON(message.createAvailabilityResponse)
        : undefined);
    message.getAvailabilitiesResponse !== undefined &&
      (obj.getAvailabilitiesResponse = message.getAvailabilitiesResponse
        ? GetAvailabilitiesResponse.toJSON(message.getAvailabilitiesResponse)
        : undefined);
    message.updateAvailabilityResponse !== undefined &&
      (obj.updateAvailabilityResponse = message.updateAvailabilityResponse
        ? UpdateAvailabilityResponse.toJSON(message.updateAvailabilityResponse)
        : undefined);
    message.deleteAvailabilityResponse !== undefined &&
      (obj.deleteAvailabilityResponse = message.deleteAvailabilityResponse
        ? DeleteAvailabilityResponse.toJSON(message.deleteAvailabilityResponse)
        : undefined);
    message.createJobOfferResponse !== undefined &&
      (obj.createJobOfferResponse = message.createJobOfferResponse
        ? CreateJobOfferRequestResponse.toJSON(message.createJobOfferResponse)
        : undefined);
    message.getJobOffersRecommendationResponse !== undefined &&
      (obj.getJobOffersRecommendationResponse =
        message.getJobOffersRecommendationResponse
          ? GetJobOffersRecommendationResponse.toJSON(
              message.getJobOffersRecommendationResponse,
            )
          : undefined);
    message.getJobOfferResponse !== undefined &&
      (obj.getJobOfferResponse = message.getJobOfferResponse
        ? GetJobOfferResponse.toJSON(message.getJobOfferResponse)
        : undefined);
    message.applyJobOfferResponse !== undefined &&
      (obj.applyJobOfferResponse = message.applyJobOfferResponse
        ? ApplyJobOfferResponse.toJSON(message.applyJobOfferResponse)
        : undefined);
    message.getJobOfferStatusResponse !== undefined &&
      (obj.getJobOfferStatusResponse = message.getJobOfferStatusResponse
        ? GetJobOffersStatusResponse.toJSON(message.getJobOfferStatusResponse)
        : undefined);
    message.getJobCategoriesResponse !== undefined &&
      (obj.getJobCategoriesResponse = message.getJobCategoriesResponse
        ? GetJobCategoriesResponse.toJSON(message.getJobCategoriesResponse)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = { ...baseResponse } as Response;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = '';
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Error.fromPartial(object.error);
    } else {
      message.error = undefined;
    }
    if (
      object.getExperiencesResponse !== undefined &&
      object.getExperiencesResponse !== null
    ) {
      message.getExperiencesResponse = GetExperiencesResponse.fromPartial(
        object.getExperiencesResponse,
      );
    } else {
      message.getExperiencesResponse = undefined;
    }
    if (
      object.getExperienceResponse !== undefined &&
      object.getExperienceResponse !== null
    ) {
      message.getExperienceResponse = GetExperienceResponse.fromPartial(
        object.getExperienceResponse,
      );
    } else {
      message.getExperienceResponse = undefined;
    }
    if (
      object.createExperienceResponse !== undefined &&
      object.createExperienceResponse !== null
    ) {
      message.createExperienceResponse = CreateExperienceResponse.fromPartial(
        object.createExperienceResponse,
      );
    } else {
      message.createExperienceResponse = undefined;
    }
    if (
      object.updateExperienceResponse !== undefined &&
      object.updateExperienceResponse !== null
    ) {
      message.updateExperienceResponse = UpdateExperienceResponse.fromPartial(
        object.updateExperienceResponse,
      );
    } else {
      message.updateExperienceResponse = undefined;
    }
    if (
      object.deleteExperienceResponse !== undefined &&
      object.deleteExperienceResponse !== null
    ) {
      message.deleteExperienceResponse = DeleteExperienceResponse.fromPartial(
        object.deleteExperienceResponse,
      );
    } else {
      message.deleteExperienceResponse = undefined;
    }
    if (
      object.createAvailabilityResponse !== undefined &&
      object.createAvailabilityResponse !== null
    ) {
      message.createAvailabilityResponse =
        CreateAvailabilityResponse.fromPartial(
          object.createAvailabilityResponse,
        );
    } else {
      message.createAvailabilityResponse = undefined;
    }
    if (
      object.getAvailabilitiesResponse !== undefined &&
      object.getAvailabilitiesResponse !== null
    ) {
      message.getAvailabilitiesResponse = GetAvailabilitiesResponse.fromPartial(
        object.getAvailabilitiesResponse,
      );
    } else {
      message.getAvailabilitiesResponse = undefined;
    }
    if (
      object.updateAvailabilityResponse !== undefined &&
      object.updateAvailabilityResponse !== null
    ) {
      message.updateAvailabilityResponse =
        UpdateAvailabilityResponse.fromPartial(
          object.updateAvailabilityResponse,
        );
    } else {
      message.updateAvailabilityResponse = undefined;
    }
    if (
      object.deleteAvailabilityResponse !== undefined &&
      object.deleteAvailabilityResponse !== null
    ) {
      message.deleteAvailabilityResponse =
        DeleteAvailabilityResponse.fromPartial(
          object.deleteAvailabilityResponse,
        );
    } else {
      message.deleteAvailabilityResponse = undefined;
    }
    if (
      object.createJobOfferResponse !== undefined &&
      object.createJobOfferResponse !== null
    ) {
      message.createJobOfferResponse =
        CreateJobOfferRequestResponse.fromPartial(
          object.createJobOfferResponse,
        );
    } else {
      message.createJobOfferResponse = undefined;
    }
    if (
      object.getJobOffersRecommendationResponse !== undefined &&
      object.getJobOffersRecommendationResponse !== null
    ) {
      message.getJobOffersRecommendationResponse =
        GetJobOffersRecommendationResponse.fromPartial(
          object.getJobOffersRecommendationResponse,
        );
    } else {
      message.getJobOffersRecommendationResponse = undefined;
    }
    if (
      object.getJobOfferResponse !== undefined &&
      object.getJobOfferResponse !== null
    ) {
      message.getJobOfferResponse = GetJobOfferResponse.fromPartial(
        object.getJobOfferResponse,
      );
    } else {
      message.getJobOfferResponse = undefined;
    }
    if (
      object.applyJobOfferResponse !== undefined &&
      object.applyJobOfferResponse !== null
    ) {
      message.applyJobOfferResponse = ApplyJobOfferResponse.fromPartial(
        object.applyJobOfferResponse,
      );
    } else {
      message.applyJobOfferResponse = undefined;
    }
    if (
      object.getJobOfferStatusResponse !== undefined &&
      object.getJobOfferStatusResponse !== null
    ) {
      message.getJobOfferStatusResponse =
        GetJobOffersStatusResponse.fromPartial(
          object.getJobOfferStatusResponse,
        );
    } else {
      message.getJobOfferStatusResponse = undefined;
    }
    if (
      object.getJobCategoriesResponse !== undefined &&
      object.getJobCategoriesResponse !== null
    ) {
      message.getJobCategoriesResponse = GetJobCategoriesResponse.fromPartial(
        object.getJobCategoriesResponse,
      );
    } else {
      message.getJobCategoriesResponse = undefined;
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
