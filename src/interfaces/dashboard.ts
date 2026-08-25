export interface TotalWaypointsResponse {
  total_waypoints: number;
  active_only: boolean;
}

export interface TotalDemandResponse {
  total_demand: number;
  active_only: boolean;
}

export interface TotalVehiclesResponse {
  total_vehicles: number;
  active_only: boolean;
}

export interface TotalCapacityResponse {
  total_capacity: number;
  active_only: boolean;
}

export interface RouteGenerationResponse {
  cached: boolean;
  service_date: string;
  generated_at: string;
  was_regenerated: boolean;
  provider: string;
  cost_mode: string;
  routes: Record<string, unknown>[];
}

export interface UseDashboardReturn {
  waypoints: number;
  vehicles: number;
  totalDemand: number;
  capacity?: number;
  capacityVsDemand: string;
  capacityProgress: number;
  capacitySecondaryValue: string;
  cachedLastGeneration: {
    badge: string;
    textColor: string;
    backgroundColor: string;
  };
  lastGeneratedServiceDate: string | null;
}
