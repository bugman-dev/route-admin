import { getTotalCapacity, getTotalVehicles } from "@ra/factory/vehiclesFactory";
import { getTotalDemand, getTotalWaypoints } from "@ra/factory/waypointsFactory";
import { appTexts } from "@ra/constants/apptexts";
import type { UseDashboardReturn } from "@ra/interfaces/dashboard";
import { useEffect, useState } from "react";

export const useDashboard = (): UseDashboardReturn => {
  const [waypoints, setWaypoints] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [totalDemand, setTotalDemand] = useState(0);
  const [capacity, setCapacity] = useState(0);

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

    void loadDashboardTotals();

    return () => {
      cancelled = true;
    };
  }, []);

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
  };
};
