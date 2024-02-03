import { Response } from '@proto/Response';

export class NatsResponse {
  static error = (
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

  static success = (requestData: Response): Uint8Array => {
    const response = Response.fromPartial(requestData);
    const encoded = Response.encode(response).finish();
    return encoded;
  };
}
