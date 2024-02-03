/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
  GetExperiencesRequest,
  GetExperienceRequest,
  CreateExperienceRequest,
  UpdateExperienceRequest,
  DeleteExperienceRequest,
  CreateAvailabilityRequest,
  GetAvailabilitiesRequest,
  DeleteAvailabilityRequest,
  UpdateAvailabilityRequest,
  CreateJobOfferRequest,
  GetJobOfferRequest,
} from './services/ads';
import { GetJobOffersRecommendationRequest } from './services/recommendation';
import {
  ApplyJobOfferRequest,
  GetJobOffersStatusRequest,
} from './services/job-status';

export const protobufPackage = '';

/** Message that contains a generic request */
export interface Request {
  requestId: string;
  getExperiencesRequest: GetExperiencesRequest | undefined;
  getExperienceRequest: GetExperienceRequest | undefined;
  createExperienceRequest: CreateExperienceRequest | undefined;
  updateExperienceRequest: UpdateExperienceRequest | undefined;
  deleteExperienceRequest: DeleteExperienceRequest | undefined;
  createAvailabilityRequest: CreateAvailabilityRequest | undefined;
  getAvailabilitiesRequest: GetAvailabilitiesRequest | undefined;
  deleteAvailabilityRequest: DeleteAvailabilityRequest | undefined;
  updateAvailabilityRequest: UpdateAvailabilityRequest | undefined;
  createJobOfferRequest: CreateJobOfferRequest | undefined;
  getJobOffersRecommendationRequest:
    | GetJobOffersRecommendationRequest
    | undefined;
  getJobOfferRequest: GetJobOfferRequest | undefined;
  applyJobOfferRequest: ApplyJobOfferRequest | undefined;
  getJobOffersStatusRequest: GetJobOffersStatusRequest | undefined;
}

const baseRequest: object = { requestId: '' };

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== '') {
      writer.uint32(10).string(message.requestId);
    }
    if (message.getExperiencesRequest !== undefined) {
      GetExperiencesRequest.encode(
        message.getExperiencesRequest,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getExperienceRequest !== undefined) {
      GetExperienceRequest.encode(
        message.getExperienceRequest,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.createExperienceRequest !== undefined) {
      CreateExperienceRequest.encode(
        message.createExperienceRequest,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.updateExperienceRequest !== undefined) {
      UpdateExperienceRequest.encode(
        message.updateExperienceRequest,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.deleteExperienceRequest !== undefined) {
      DeleteExperienceRequest.encode(
        message.deleteExperienceRequest,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.createAvailabilityRequest !== undefined) {
      CreateAvailabilityRequest.encode(
        message.createAvailabilityRequest,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.getAvailabilitiesRequest !== undefined) {
      GetAvailabilitiesRequest.encode(
        message.getAvailabilitiesRequest,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.deleteAvailabilityRequest !== undefined) {
      DeleteAvailabilityRequest.encode(
        message.deleteAvailabilityRequest,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.updateAvailabilityRequest !== undefined) {
      UpdateAvailabilityRequest.encode(
        message.updateAvailabilityRequest,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.createJobOfferRequest !== undefined) {
      CreateJobOfferRequest.encode(
        message.createJobOfferRequest,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.getJobOffersRecommendationRequest !== undefined) {
      GetJobOffersRecommendationRequest.encode(
        message.getJobOffersRecommendationRequest,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.getJobOfferRequest !== undefined) {
      GetJobOfferRequest.encode(
        message.getJobOfferRequest,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.applyJobOfferRequest !== undefined) {
      ApplyJobOfferRequest.encode(
        message.applyJobOfferRequest,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.getJobOffersStatusRequest !== undefined) {
      GetJobOffersStatusRequest.encode(
        message.getJobOffersStatusRequest,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.getExperiencesRequest = GetExperiencesRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.getExperienceRequest = GetExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.createExperienceRequest = CreateExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.updateExperienceRequest = UpdateExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.deleteExperienceRequest = DeleteExperienceRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.createAvailabilityRequest = CreateAvailabilityRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.getAvailabilitiesRequest = GetAvailabilitiesRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 9:
          message.deleteAvailabilityRequest = DeleteAvailabilityRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 10:
          message.updateAvailabilityRequest = UpdateAvailabilityRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 11:
          message.createJobOfferRequest = CreateJobOfferRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 12:
          message.getJobOffersRecommendationRequest =
            GetJobOffersRecommendationRequest.decode(reader, reader.uint32());
          break;
        case 13:
          message.getJobOfferRequest = GetJobOfferRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 14:
          message.applyJobOfferRequest = ApplyJobOfferRequest.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.getJobOffersStatusRequest = GetJobOffersStatusRequest.decode(
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

  fromJSON(object: any): Request {
    const message = { ...baseRequest } as Request;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = '';
    }
    if (
      object.getExperiencesRequest !== undefined &&
      object.getExperiencesRequest !== null
    ) {
      message.getExperiencesRequest = GetExperiencesRequest.fromJSON(
        object.getExperiencesRequest,
      );
    } else {
      message.getExperiencesRequest = undefined;
    }
    if (
      object.getExperienceRequest !== undefined &&
      object.getExperienceRequest !== null
    ) {
      message.getExperienceRequest = GetExperienceRequest.fromJSON(
        object.getExperienceRequest,
      );
    } else {
      message.getExperienceRequest = undefined;
    }
    if (
      object.createExperienceRequest !== undefined &&
      object.createExperienceRequest !== null
    ) {
      message.createExperienceRequest = CreateExperienceRequest.fromJSON(
        object.createExperienceRequest,
      );
    } else {
      message.createExperienceRequest = undefined;
    }
    if (
      object.updateExperienceRequest !== undefined &&
      object.updateExperienceRequest !== null
    ) {
      message.updateExperienceRequest = UpdateExperienceRequest.fromJSON(
        object.updateExperienceRequest,
      );
    } else {
      message.updateExperienceRequest = undefined;
    }
    if (
      object.deleteExperienceRequest !== undefined &&
      object.deleteExperienceRequest !== null
    ) {
      message.deleteExperienceRequest = DeleteExperienceRequest.fromJSON(
        object.deleteExperienceRequest,
      );
    } else {
      message.deleteExperienceRequest = undefined;
    }
    if (
      object.createAvailabilityRequest !== undefined &&
      object.createAvailabilityRequest !== null
    ) {
      message.createAvailabilityRequest = CreateAvailabilityRequest.fromJSON(
        object.createAvailabilityRequest,
      );
    } else {
      message.createAvailabilityRequest = undefined;
    }
    if (
      object.getAvailabilitiesRequest !== undefined &&
      object.getAvailabilitiesRequest !== null
    ) {
      message.getAvailabilitiesRequest = GetAvailabilitiesRequest.fromJSON(
        object.getAvailabilitiesRequest,
      );
    } else {
      message.getAvailabilitiesRequest = undefined;
    }
    if (
      object.deleteAvailabilityRequest !== undefined &&
      object.deleteAvailabilityRequest !== null
    ) {
      message.deleteAvailabilityRequest = DeleteAvailabilityRequest.fromJSON(
        object.deleteAvailabilityRequest,
      );
    } else {
      message.deleteAvailabilityRequest = undefined;
    }
    if (
      object.updateAvailabilityRequest !== undefined &&
      object.updateAvailabilityRequest !== null
    ) {
      message.updateAvailabilityRequest = UpdateAvailabilityRequest.fromJSON(
        object.updateAvailabilityRequest,
      );
    } else {
      message.updateAvailabilityRequest = undefined;
    }
    if (
      object.createJobOfferRequest !== undefined &&
      object.createJobOfferRequest !== null
    ) {
      message.createJobOfferRequest = CreateJobOfferRequest.fromJSON(
        object.createJobOfferRequest,
      );
    } else {
      message.createJobOfferRequest = undefined;
    }
    if (
      object.getJobOffersRecommendationRequest !== undefined &&
      object.getJobOffersRecommendationRequest !== null
    ) {
      message.getJobOffersRecommendationRequest =
        GetJobOffersRecommendationRequest.fromJSON(
          object.getJobOffersRecommendationRequest,
        );
    } else {
      message.getJobOffersRecommendationRequest = undefined;
    }
    if (
      object.getJobOfferRequest !== undefined &&
      object.getJobOfferRequest !== null
    ) {
      message.getJobOfferRequest = GetJobOfferRequest.fromJSON(
        object.getJobOfferRequest,
      );
    } else {
      message.getJobOfferRequest = undefined;
    }
    if (
      object.applyJobOfferRequest !== undefined &&
      object.applyJobOfferRequest !== null
    ) {
      message.applyJobOfferRequest = ApplyJobOfferRequest.fromJSON(
        object.applyJobOfferRequest,
      );
    } else {
      message.applyJobOfferRequest = undefined;
    }
    if (
      object.getJobOffersStatusRequest !== undefined &&
      object.getJobOffersStatusRequest !== null
    ) {
      message.getJobOffersStatusRequest = GetJobOffersStatusRequest.fromJSON(
        object.getJobOffersStatusRequest,
      );
    } else {
      message.getJobOffersStatusRequest = undefined;
    }
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.getExperiencesRequest !== undefined &&
      (obj.getExperiencesRequest = message.getExperiencesRequest
        ? GetExperiencesRequest.toJSON(message.getExperiencesRequest)
        : undefined);
    message.getExperienceRequest !== undefined &&
      (obj.getExperienceRequest = message.getExperienceRequest
        ? GetExperienceRequest.toJSON(message.getExperienceRequest)
        : undefined);
    message.createExperienceRequest !== undefined &&
      (obj.createExperienceRequest = message.createExperienceRequest
        ? CreateExperienceRequest.toJSON(message.createExperienceRequest)
        : undefined);
    message.updateExperienceRequest !== undefined &&
      (obj.updateExperienceRequest = message.updateExperienceRequest
        ? UpdateExperienceRequest.toJSON(message.updateExperienceRequest)
        : undefined);
    message.deleteExperienceRequest !== undefined &&
      (obj.deleteExperienceRequest = message.deleteExperienceRequest
        ? DeleteExperienceRequest.toJSON(message.deleteExperienceRequest)
        : undefined);
    message.createAvailabilityRequest !== undefined &&
      (obj.createAvailabilityRequest = message.createAvailabilityRequest
        ? CreateAvailabilityRequest.toJSON(message.createAvailabilityRequest)
        : undefined);
    message.getAvailabilitiesRequest !== undefined &&
      (obj.getAvailabilitiesRequest = message.getAvailabilitiesRequest
        ? GetAvailabilitiesRequest.toJSON(message.getAvailabilitiesRequest)
        : undefined);
    message.deleteAvailabilityRequest !== undefined &&
      (obj.deleteAvailabilityRequest = message.deleteAvailabilityRequest
        ? DeleteAvailabilityRequest.toJSON(message.deleteAvailabilityRequest)
        : undefined);
    message.updateAvailabilityRequest !== undefined &&
      (obj.updateAvailabilityRequest = message.updateAvailabilityRequest
        ? UpdateAvailabilityRequest.toJSON(message.updateAvailabilityRequest)
        : undefined);
    message.createJobOfferRequest !== undefined &&
      (obj.createJobOfferRequest = message.createJobOfferRequest
        ? CreateJobOfferRequest.toJSON(message.createJobOfferRequest)
        : undefined);
    message.getJobOffersRecommendationRequest !== undefined &&
      (obj.getJobOffersRecommendationRequest =
        message.getJobOffersRecommendationRequest
          ? GetJobOffersRecommendationRequest.toJSON(
              message.getJobOffersRecommendationRequest,
            )
          : undefined);
    message.getJobOfferRequest !== undefined &&
      (obj.getJobOfferRequest = message.getJobOfferRequest
        ? GetJobOfferRequest.toJSON(message.getJobOfferRequest)
        : undefined);
    message.applyJobOfferRequest !== undefined &&
      (obj.applyJobOfferRequest = message.applyJobOfferRequest
        ? ApplyJobOfferRequest.toJSON(message.applyJobOfferRequest)
        : undefined);
    message.getJobOffersStatusRequest !== undefined &&
      (obj.getJobOffersStatusRequest = message.getJobOffersStatusRequest
        ? GetJobOffersStatusRequest.toJSON(message.getJobOffersStatusRequest)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = '';
    }
    if (
      object.getExperiencesRequest !== undefined &&
      object.getExperiencesRequest !== null
    ) {
      message.getExperiencesRequest = GetExperiencesRequest.fromPartial(
        object.getExperiencesRequest,
      );
    } else {
      message.getExperiencesRequest = undefined;
    }
    if (
      object.getExperienceRequest !== undefined &&
      object.getExperienceRequest !== null
    ) {
      message.getExperienceRequest = GetExperienceRequest.fromPartial(
        object.getExperienceRequest,
      );
    } else {
      message.getExperienceRequest = undefined;
    }
    if (
      object.createExperienceRequest !== undefined &&
      object.createExperienceRequest !== null
    ) {
      message.createExperienceRequest = CreateExperienceRequest.fromPartial(
        object.createExperienceRequest,
      );
    } else {
      message.createExperienceRequest = undefined;
    }
    if (
      object.updateExperienceRequest !== undefined &&
      object.updateExperienceRequest !== null
    ) {
      message.updateExperienceRequest = UpdateExperienceRequest.fromPartial(
        object.updateExperienceRequest,
      );
    } else {
      message.updateExperienceRequest = undefined;
    }
    if (
      object.deleteExperienceRequest !== undefined &&
      object.deleteExperienceRequest !== null
    ) {
      message.deleteExperienceRequest = DeleteExperienceRequest.fromPartial(
        object.deleteExperienceRequest,
      );
    } else {
      message.deleteExperienceRequest = undefined;
    }
    if (
      object.createAvailabilityRequest !== undefined &&
      object.createAvailabilityRequest !== null
    ) {
      message.createAvailabilityRequest = CreateAvailabilityRequest.fromPartial(
        object.createAvailabilityRequest,
      );
    } else {
      message.createAvailabilityRequest = undefined;
    }
    if (
      object.getAvailabilitiesRequest !== undefined &&
      object.getAvailabilitiesRequest !== null
    ) {
      message.getAvailabilitiesRequest = GetAvailabilitiesRequest.fromPartial(
        object.getAvailabilitiesRequest,
      );
    } else {
      message.getAvailabilitiesRequest = undefined;
    }
    if (
      object.deleteAvailabilityRequest !== undefined &&
      object.deleteAvailabilityRequest !== null
    ) {
      message.deleteAvailabilityRequest = DeleteAvailabilityRequest.fromPartial(
        object.deleteAvailabilityRequest,
      );
    } else {
      message.deleteAvailabilityRequest = undefined;
    }
    if (
      object.updateAvailabilityRequest !== undefined &&
      object.updateAvailabilityRequest !== null
    ) {
      message.updateAvailabilityRequest = UpdateAvailabilityRequest.fromPartial(
        object.updateAvailabilityRequest,
      );
    } else {
      message.updateAvailabilityRequest = undefined;
    }
    if (
      object.createJobOfferRequest !== undefined &&
      object.createJobOfferRequest !== null
    ) {
      message.createJobOfferRequest = CreateJobOfferRequest.fromPartial(
        object.createJobOfferRequest,
      );
    } else {
      message.createJobOfferRequest = undefined;
    }
    if (
      object.getJobOffersRecommendationRequest !== undefined &&
      object.getJobOffersRecommendationRequest !== null
    ) {
      message.getJobOffersRecommendationRequest =
        GetJobOffersRecommendationRequest.fromPartial(
          object.getJobOffersRecommendationRequest,
        );
    } else {
      message.getJobOffersRecommendationRequest = undefined;
    }
    if (
      object.getJobOfferRequest !== undefined &&
      object.getJobOfferRequest !== null
    ) {
      message.getJobOfferRequest = GetJobOfferRequest.fromPartial(
        object.getJobOfferRequest,
      );
    } else {
      message.getJobOfferRequest = undefined;
    }
    if (
      object.applyJobOfferRequest !== undefined &&
      object.applyJobOfferRequest !== null
    ) {
      message.applyJobOfferRequest = ApplyJobOfferRequest.fromPartial(
        object.applyJobOfferRequest,
      );
    } else {
      message.applyJobOfferRequest = undefined;
    }
    if (
      object.getJobOffersStatusRequest !== undefined &&
      object.getJobOffersStatusRequest !== null
    ) {
      message.getJobOffersStatusRequest = GetJobOffersStatusRequest.fromPartial(
        object.getJobOffersStatusRequest,
      );
    } else {
      message.getJobOffersStatusRequest = undefined;
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
