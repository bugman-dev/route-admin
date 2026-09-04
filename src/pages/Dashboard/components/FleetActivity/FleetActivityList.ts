import { appTexts } from "@ra/constants/apptexts";
import type { FleetActivityData } from "@ra/interfaces/dashboard";

export const FleetActivityList: FleetActivityData[] = [
  {
    id: appTexts.dashboardTexts.fleetActivity.ids.scheduledStops,
    label: appTexts.dashboardTexts.fleetActivity.scheduledStops,
    value: "0",
  },
  {
    id: appTexts.dashboardTexts.fleetActivity.ids.activeVehicles,
    label: appTexts.dashboardTexts.fleetActivity.activeVehicles,
    value: "0",
  },
  {
    id: appTexts.dashboardTexts.fleetActivity.ids.routeCoverage,
    label: appTexts.dashboardTexts.fleetActivity.routeCoverage,
    value: "0%",
  },
];