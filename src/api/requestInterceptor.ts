import type { InternalAxiosRequestConfig } from "axios";

export function requestInterceptor(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  // Attach shared headers / auth tokens here as the API grows.
  config.headers = config.headers ?? {};
  config.headers["Content-Type"] = config.headers["Content-Type"] ?? "application/json";
  config.headers.Accept = config.headers.Accept ?? "application/json";

  return config;
}

export function requestErrorInterceptor(error: unknown): Promise<never> {
  return Promise.reject(error);
}
