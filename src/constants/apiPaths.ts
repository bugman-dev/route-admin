export const API_PATHS = {
  HEALTH: "/health",
  WAYPOINTS: `${import.meta.env.VITE_API_BASE}/waypoints`,
  WAYPOINTS_TOTAL: `${import.meta.env.VITE_API_BASE}/waypoints/total`,
  WAYPOINTS_DEMAND_TOTAL: `${import.meta.env.VITE_API_BASE}/waypoints/demand/total`,
  VEHICLES: `${import.meta.env.VITE_API_BASE}/vehicles`,
  VEHICLES_TOTAL: `${import.meta.env.VITE_API_BASE}/vehicles/total`,
  VEHICLES_CAPACITY_TOTAL: `${import.meta.env.VITE_API_BASE}/vehicles/capacity/total`,
  ROUTES: `${import.meta.env.VITE_API_BASE}/routes`,
  ROUTES_GENERATE: `${import.meta.env.VITE_API_BASE}/routes/generate`,
} as const;
