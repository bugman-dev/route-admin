export const API_PATHS = {
  HEALTH: "/health",
  WAYPOINTS: `${import.meta.env.VITE_API_BASE}/waypoints`,
  VEHICLES: `${import.meta.env.VITE_API_BASE}/vehicles`,
  ROUTES: `${import.meta.env.VITE_API_BASE}/routes`,
  ROUTES_GENERATE: `${import.meta.env.VITE_API_BASE}/routes/generate`,
} as const;
