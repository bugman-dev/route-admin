import { appTexts } from "@ra/constants/apptexts";
import type { CheckListData } from "@ra/interfaces/dashboard";

export const ChecklistItems: CheckListData[] = [
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.activeWaypoint,
    label: appTexts.dashboardTexts.readinessChecklist.checks.activeWaypoint,
    passed: false,
  },
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.activeDepot,
    label: appTexts.dashboardTexts.readinessChecklist.checks.activeDepot,
    passed: false,
  },
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.activeVehicle,
    label: appTexts.dashboardTexts.readinessChecklist.checks.activeVehicle,
    passed: false,
  },
  {
    id: appTexts.dashboardTexts.readinessChecklist.ids.capacity,
    label: appTexts.dashboardTexts.readinessChecklist.checks.capacity,
    passed: false,
  },
];
