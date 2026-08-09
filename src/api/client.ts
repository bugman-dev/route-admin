import axios from "axios";
import { requestErrorInterceptor, requestInterceptor } from "@ra/api/requestInterceptor";
import { responseErrorInterceptor, responseInterceptor } from "@ra/api/responseInterceptor";

const engineBase = import.meta.env.VITE_ENGINE_BASE ?? "";

/**
 * In dev, leave requests same-origin and let the Vite proxy forward to the engine.
 * In production, call the engine base URL directly.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.DEV ? "" : engineBase,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
apiClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
