import { appTexts } from "@ra/constants/apptexts";

export const ChecklistItems = [
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.activeWaypoint,
    label: appTexts.dashboardTexts.readinessChecklist.checks.activeWaypoint,
    passed: false,
  },
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.activeDepot,
    label: appTexts.dashboardTexts.readinessChecklist.checks.activeDepot,
    passed: true,
  },
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.activeVehicle,
    label: appTexts.dashboardTexts.readinessChecklist.checks.activeVehicle,
    passed: true,
  },
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.capacity,
    label: appTexts.dashboardTexts.readinessChecklist.checks.capacity,
    passed: true,
  },
];
