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

export interface UseDashboardReturn {
  waypoints: number;
  vehicles: number;
  totalDemand: number;
  capacity?: number;
  capacityVsDemand: string;
  capacityProgress: number;
  capacitySecondaryValue: string;
}
