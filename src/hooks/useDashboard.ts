import { getTotalCapacity, getTotalVehicles } from "@ra/factory/vehiclesFactory";
import { getTotalDemand, getTotalWaypoints } from "@ra/factory/waypointsFactory";
import { getLastGeneratedRoutes } from "@ra/factory/routesFactory";
import { appTexts } from "@ra/constants/apptexts";
import type { UseDashboardReturn } from "@ra/interfaces/dashboard";
import { useEffect, useState } from "react";
import appColors from "@ra/assets/colors/appColors";

export const useDashboard = (): UseDashboardReturn => {
  const [waypoints, setWaypoints] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [totalDemand, setTotalDemand] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [lastGeneratedServiceDate, setLastGeneratedServiceDate] = useState<string | null>(null);
  const [lastGenerationCached, setLastGenerationCached] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadDashboardTotals = async () => {
      try {
        const [waypointsResult, vehiclesResult, demandResult, capacityResult] = await Promise.all([
          getTotalWaypoints(true),
          getTotalVehicles(true),
          getTotalDemand(true),
          getTotalCapacity(true),
        ]);

        if (cancelled) return;

        setWaypoints(waypointsResult.total_waypoints);
        setVehicles(vehiclesResult.total_vehicles);
        setTotalDemand(demandResult.total_demand);
        setCapacity(capacityResult.total_capacity);
      } catch {
        if (cancelled) return;
        setWaypoints(0);
        setVehicles(0);
        setTotalDemand(0);
        setCapacity(0);
      }
    };

    const loadLastGeneratedRoutes = async () => {
      try {
        const routesResult = await getLastGeneratedRoutes();
        if (cancelled) return;

        setLastGeneratedServiceDate(String(routesResult.service_date));
        setLastGenerationCached(routesResult.cached);
      } catch {
        if (cancelled) return;
        setLastGeneratedServiceDate(null);
        setLastGenerationCached(null);
      }
    };

    void loadDashboardTotals();
    void loadLastGeneratedRoutes();

    return () => {
      cancelled = true;
    };
  }, []);

  const cachedLastGeneration = lastGenerationCached
    ? {
        badge: appTexts.routeStatusCard.badgeCached,
        textColor: appColors.primaryGreen,
        backgroundColor: appColors.secondaryGreen,
      }
    : lastGenerationCached === null
      ? {
          badge: appTexts.routeStatusCard.badgeUnknown,
          textColor: appColors.primaryRed,
          backgroundColor: appColors.secondaryRed,
        }
      : {
          badge: appTexts.routeStatusCard.badgeGenerated,
          textColor: appColors.primaryGreen,
          backgroundColor: appColors.secondaryGreen,
        };

  const capacityProgress =
    capacity > 0 ? Math.min(100, Math.round((totalDemand / capacity) * 100)) : 0;

  return {
    waypoints,
    vehicles,
    totalDemand,
    capacityVsDemand: `${capacity} / ${totalDemand}`,
    capacityProgress,
    capacitySecondaryValue:
      totalDemand === 0 ? appTexts.dashboardCards.noDemand : `${capacityProgress} %`,
    cachedLastGeneration,
    lastGeneratedServiceDate,
  };
};
