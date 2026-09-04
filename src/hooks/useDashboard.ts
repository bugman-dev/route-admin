import { getTotalCapacity, getTotalVehicles } from "@ra/factory/vehiclesFactory";
import { getTotalDemand, getTotalWaypoints, getWaypointDepots } from "@ra/factory/waypointsFactory";
import { getLastGeneratedRoutes } from "@ra/factory/routesFactory";
import { appTexts } from "@ra/constants/apptexts";
import type { UseDashboardProps, UseDashboardReturn } from "@ra/interfaces/dashboard";
import { useEffect, useState } from "react";
import appColors from "@ra/assets/colors/appColors";

export const useDashboard = ({
  checklistData,
  fleetActivityData,
}: UseDashboardProps): UseDashboardReturn => {
  const [waypoints, setWaypoints] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [totalDemand, setTotalDemand] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [lastGeneratedServiceDate, setLastGeneratedServiceDate] = useState<string | null>(null);
  const [lastGenerationCached, setLastGenerationCached] = useState<boolean | null>(null);

  // Readyness Checklist States
  const [hasExactlyOneDepot, setHasExactlyOneDepot] = useState(false);
  const [controlledChecklistData, setControlledChecklistData] = useState(checklistData);

  // Fleet Activity States
  const [controlledFleetActivityData, setControlledFleetActivityData] = useState(fleetActivityData);

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

    const loadWaypointDepots = async () => {
      try {
        const waypointDepotsResult = await getWaypointDepots();
        if (cancelled) return;
        if (waypointDepotsResult.length === 1) {
          setHasExactlyOneDepot(true);
        } else {
          setHasExactlyOneDepot(false);
        }
      } catch {
        if (cancelled) return;
      }
    };

    void loadDashboardTotals();
    void loadLastGeneratedRoutes();

    void loadWaypointDepots();

    return () => {
      cancelled = true;
    };
  }, []);

  const cachedLastGeneration = lastGenerationCached
    ? {
        badge: appTexts.dashboardTexts.routeStatusCard.badgeCached,
        textColor: appColors.primaryGreen,
        backgroundColor: appColors.secondaryGreen,
      }
    : lastGenerationCached === null
      ? {
          badge: appTexts.dashboardTexts.routeStatusCard.badgeUnknown,
          textColor: appColors.primaryRed,
          backgroundColor: appColors.secondaryRed,
        }
      : {
          badge: appTexts.dashboardTexts.routeStatusCard.badgeGenerated,
          textColor: appColors.primaryGreen,
          backgroundColor: appColors.secondaryGreen,
        };

  const capacityProgress =
    capacity > 0 ? Math.min(100, Math.round((totalDemand / capacity) * 100)) : 0;

  // Readyness Checklist Data
  useEffect(() => {
    const ids = appTexts.dashboardTexts.readinessChecklist.ids;

    setControlledChecklistData((prev) =>
      prev.map((item) => {
        if (item.id === ids.activeDepot) {
          return { ...item, passed: hasExactlyOneDepot };
        }
        if (item.id === ids.activeWaypoint) {
          return { ...item, passed: waypoints > 0 };
        }
        if (item.id === ids.activeVehicle) {
          return { ...item, passed: vehicles > 0 };
        }
        if (item.id === ids.capacity) {
          return { ...item, passed: totalDemand <= capacity };
        }
        return item;
      }),
    );
  }, [hasExactlyOneDepot, waypoints, vehicles, totalDemand, capacity]);

  // Fleet Activity Data
  useEffect(() => {
    const ids = appTexts.dashboardTexts.fleetActivity.ids;
    setControlledFleetActivityData((prev) =>
      prev.map((item) => {
        if (item.id === ids.scheduledStops) {
          return { ...item, value: waypoints.toString() };
        }
        if (item.id === ids.activeVehicles) {
          return { ...item, value: vehicles.toString() };
        }
        if (item.id === ids.routeCoverage) {
          const coverage =
            vehicles === 0 ? 0 : Math.round((waypoints / vehicles) * 100);
          return { ...item, value: `${coverage}%` };
        }
        return item;
      }),
    );
  }, [waypoints, vehicles]);

  return {
    waypoints,
    vehicles,
    totalDemand,
    capacityVsDemand: `${capacity} / ${totalDemand}`,
    capacityProgress,
    capacitySecondaryValue:
      totalDemand === 0 ? appTexts.dashboardTexts.dashboardCards.noDemand : `${capacityProgress} %`,
    cachedLastGeneration,
    lastGeneratedServiceDate,
    controlledChecklistData,
    controlledFleetActivityData,
    readyToGenerate: controlledChecklistData.every((item) => item.passed),
  };
};
