import type { AxiosError, AxiosResponse } from "axios";

export function responseInterceptor(response: AxiosResponse): AxiosResponse {
  return response;
}

export function responseErrorInterceptor(error: AxiosError): Promise<never> {
  const status = error.response?.status;
  const detail = error.response?.data;

  const normalizedError = {
    ...error,
    status: status ?? null,
    detail: detail ?? null,
    message:
      (typeof detail === "object" &&
      detail !== null &&
      "detail" in detail &&
      typeof (detail as { detail: unknown }).detail === "string"
        ? (detail as { detail: string }).detail
        : null) ||
      error.message ||
      "Request failed",
  };

  return Promise.reject(normalizedError);
}
