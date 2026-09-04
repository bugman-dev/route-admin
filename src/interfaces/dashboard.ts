// API Responses Types
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

export interface Waypoint {
  id: number;
  external_id: string | null;
  name: string;
  latitude: number;
  longitude: number;
  demand: number;
  is_depot: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type WaypointDepotsResponse = Waypoint[];

export interface RouteGenerationResponse {
  cached: boolean;
  service_date: string;
  generated_at: string;
  was_regenerated: boolean;
  provider: string;
  cost_mode: string;
  routes: Record<string, unknown>[];
}

// Generic Types
export interface CheckListData {
  id: string;
  label: string;
  passed: boolean;
}

// Hook return types
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

  controlledChecklistData: CheckListData[];
  readyToGenerate: boolean;
}
