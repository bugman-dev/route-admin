import { appTexts } from "@ra/constants/apptexts";
import { sideNavigation } from "@ra/constants/sideNavigation";
import type { SideNavigationItem } from "@ra/interfaces/sideNavigation.interface";
import DashboardIconNav from "@ra/assets/icons/DashboardIconNav";
import WaypointIconNav from "@ra/assets/icons/WaypointIconNav";
import VehicleIconNav from "@ra/assets/icons/VehicleIconNav";
import RouteIconNav from "@ra/assets/icons/RouteIconNav";
import SettingsIconNav from "@ra/assets/icons/SettingsIconNav";

export const navItems: SideNavigationItem[] = [
  {
    id: sideNavigation.dashboard,
    label: appTexts.sideNavigation.dashboard,
    icon: <DashboardIconNav />,
  },
  {
    id: sideNavigation.waypoints,
    label: appTexts.sideNavigation.waypoints,
    icon: <WaypointIconNav />,
  },
  {
    id: sideNavigation.vehicles,
    label: appTexts.sideNavigation.vehicles,
    icon: <VehicleIconNav />,
  },
  {
    id: sideNavigation.routes,
    label: appTexts.sideNavigation.routes,
    icon: <RouteIconNav />,
  },
  {
    id: sideNavigation.settings,
    label: appTexts.sideNavigation.settings,
    icon: <SettingsIconNav />,
  },
];
