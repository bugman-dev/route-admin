import { apiClient } from "@ra/api/client";
import { API_PATHS } from "@ra/constants/apiPaths";
import type { TotalCapacityResponse, TotalVehiclesResponse } from "@ra/interfaces/dashboard";

export async function getTotalVehicles(activeOnly = true): Promise<TotalVehiclesResponse> {
  const response = await apiClient.get<TotalVehiclesResponse>(API_PATHS.VEHICLES_TOTAL, {
    params: { active_only: activeOnly },
  });
  return response.data;
}

export async function getTotalCapacity(activeOnly = true): Promise<TotalCapacityResponse> {
  const response = await apiClient.get<TotalCapacityResponse>(API_PATHS.VEHICLES_CAPACITY_TOTAL, {
    params: { active_only: activeOnly },
  });
  return response.data;
}
