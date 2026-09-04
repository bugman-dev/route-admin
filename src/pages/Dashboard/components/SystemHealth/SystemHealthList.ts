import { appTexts } from "@ra/constants/apptexts";
import type { SystemHealthItem } from "@ra/interfaces/systemHealth";

export const SystemHealthList: SystemHealthItem[] = [
  {
    id: appTexts.dashboardTexts.systemHealth.ids.backendApi,
    label: appTexts.dashboardTexts.systemHealth.backendApi,
    status: appTexts.statusTexts.unknown,
    icon: "backend",
    healthy: false,
  },
  {
    id: appTexts.dashboardTexts.systemHealth.ids.database,
    label: appTexts.dashboardTexts.systemHealth.database,
    status: appTexts.statusTexts.unknown,
    icon: "database",
    healthy: false,
  },
  {
    id: appTexts.dashboardTexts.systemHealth.ids.routingOsrm,
    label: appTexts.dashboardTexts.systemHealth.routingOsrm,
    status: appTexts.statusTexts.unknown,
    icon: "routing",
    healthy: false,
  },
];
