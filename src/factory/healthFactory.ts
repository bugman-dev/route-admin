import { apiClient } from "@ra/api/client";
import { API_PATHS } from "@ra/constants/apiPaths";
import type { HealthStatus } from "@ra/interfaces/health";

export async function getHealth(): Promise<HealthStatus> {
  const response = await apiClient.get<HealthStatus>(API_PATHS.HEALTH);
  return response.data;
}
