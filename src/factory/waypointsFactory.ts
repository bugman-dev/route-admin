import { apiClient } from "@ra/api/client";
import { API_PATHS } from "@ra/constants/apiPaths";
import type {
  TotalDemandResponse,
  TotalWaypointsResponse,
  WaypointDepotsResponse,
} from "@ra/interfaces/dashboard";

export async function getTotalWaypoints(activeOnly = true): Promise<TotalWaypointsResponse> {
  const response = await apiClient.get<TotalWaypointsResponse>(API_PATHS.WAYPOINTS_TOTAL, {
    params: { active_only: activeOnly },
  });
  return response.data;
}

export async function getTotalDemand(activeOnly = true): Promise<TotalDemandResponse> {
  const response = await apiClient.get<TotalDemandResponse>(API_PATHS.WAYPOINTS_DEMAND_TOTAL, {
    params: { active_only: activeOnly },
  });
  return response.data;
}

export async function getWaypointDepots(activeOnly = true): Promise<WaypointDepotsResponse> {
  const response = await apiClient.get<WaypointDepotsResponse>(API_PATHS.WAYPOINTS, {
    params: {
      depot: true,
      active_only: activeOnly,
    },
  });
  return response.data;
}
