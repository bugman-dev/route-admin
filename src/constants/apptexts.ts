export const appTexts = {
  sideNavigation: {
    dashboard: "Dashboard",
    waypoints: "Waypoints",
    vehicles: "Vehicles",
    routes: "Routes",
    settings: "Settings",
  },
  underConstruction: {
    title: "Under Construction",
    message: "This page is being built. Check back soon.",
  },
  pageHeaders: {
    dashboard: {
      title: "Dashboard",
      subtitle: "Overview of the fleet, stops, and today's route status",
    },
  },
  pageHeaderCards: {
    apiStatus: "API STATUS",
    serviceDate: "SERVICE DATE (IST)",
    defaultApiStatus: "Unknown",
    defaultServiceDate: "--/--/----",
  },
  // Dashboard Texts
  dashboardTexts: {
    dashboardCards: {
      capacityVsDemand: "CAPACITY VS DEMAND",
      waypoints: "WAYPOINTS",
      vehicles: "VEHICLES",
      totalDemand: "TOTAL DEMAND",
      noDemand: "No demand",
      active: "Active",
      inclDepot: "(incl. depot)",
    },
    routeStatusCard: {
      title: "Route Status",
      lastGeneratedPrefix: "Last generated",
      badgeCached: "Cached",
      badgeGenerated: "Generated",
      badgeUnknown: "Unknown",
      readyForDispatch: "routes are ready for dispatch",
    },
    readinessChecklist: {
      title: "Readiness Checklist",
      subtitle: "Fleet requirement before route generation",
      badgeAllClear: "All Clear",
      badgeCritical: "Failed",
      footerReady: "All good! You are ready to generate routes.",
      footerCritical: "Critical issues found. Please fix them before generating routes.",
      checks: {
        activeWaypoint: "At least 1 active waypoint",
        activeDepot: "Exactly 1 active depot",
        activeVehicle: "At least 1 active vehicle",
        capacity: "Total demand ≤ total capacity",  
      },
      ids: {
        activeWaypoint: "active-waypoint",
        activeDepot: "active-depot",
        activeVehicle: "active-vehicle",
        capacity: "capacity",
      },
    },
    fleetActivity: {
      title: "Fleet Activity",
      viewRoutes: "View routes",
      scheduledStops: "Scheduled stops",
      activeVehicles: "Active vehicles",
      routeCoverage: "Route coverage",
      ids: {
        scheduledStops: "scheduled-stops",
        activeVehicles: "active-vehicles",
        routeCoverage: "route-coverage",
      },
    },
    systemHealth: {
      title: "System Health",
      backendApi: "Backend API",
      database: "Database",
      routingOsrm: "Routing / OSRM",
      ids: {
        backendApi: "backend-api",
        database: "database",
        routingOsrm: "routing-osrm",
      },
    },
  },

  statusTexts: {
    healthy: "Healthy",
    unknown: "Unknown",
    error: "Error",
    warning: "Warning",
    info: "Info",
    critical: "Critical",
    maintenance: "Maintenance",
  },
};
