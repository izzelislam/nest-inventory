

export type ResponseType = {
  code: number;
  success: boolean;
  message?: string;
  data?: any;
}

export const SuccessResponse = (data: any, code=200, message?: string): ResponseType => {
  return {
    code,
    success: true,
    message,
    data,
  };
};

export const ErrorResponse = (message: string, code=400): ResponseType => {
  return {
    code,
    success: false,
    message,
  };
};