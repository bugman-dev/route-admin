import { apiClient } from "@ra/api/client";
import { API_PATHS } from "@ra/constants/apiPaths";
import type { RouteGenerationResponse } from "@ra/interfaces/dashboard";

export async function getLastGeneratedRoutes(): Promise<RouteGenerationResponse> {
  const response = await apiClient.get<RouteGenerationResponse>(API_PATHS.ROUTES);
  return response.data;
}
