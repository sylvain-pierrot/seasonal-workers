import { DateRange } from '@app/proto_generated/models/ads';
import { Response } from '@app/proto_generated/Response';

export const returnResponseError = (
  requestId: string,
  error: Error,
  statusCode: number | undefined = 400,
): Uint8Array => {
  const response = Response.fromPartial({
    requestId,
    error: {
      errorCode: statusCode,
      errorMessage: error.message,
    },
  });
  const encoded = Response.encode(response).finish();
  return encoded;
};

export const returnResponse = (requestData: Response): Uint8Array => {
  const response = Response.fromPartial(requestData);
  const encoded = Response.encode(response).finish();
  return encoded;
};

export const isValideDateRange = (dateRange: DateRange): boolean => {
  const startDate = new Date(dateRange.startDate);
  const endDate = new Date(dateRange.endDate);
  if (startDate < new Date()) {
    return false;
  }
  return startDate < endDate;
};

export enum NatsEndpoint {
  CREATE = 'create',
  FIND = 'find',
  FIND_ONE = 'findOne',
  UPDATE = 'update',
  REMOVE = 'remove',
  RECOMMANDATION = 'recommendation',
  APPLY = 'apply',
  STATUS = 'status',
}
