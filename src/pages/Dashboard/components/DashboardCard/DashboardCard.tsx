import AppCard from "@ra/components/AppCard/AppCard";
import appColors from "@ra/assets/colors/appColors";
import type { DashboardCardProps } from "@ra/interfaces/dashboardCard";
import { appTexts } from "@ra/constants/apptexts";
import WaypointDashboardIcon from "@ra/assets/icons/WaypointDashboardIcon";
import VehicleIconNav from "@ra/assets/icons/VehicleIconNav";
import RouteIconNav from "@ra/assets/icons/RouteIconNav";
import TickIcon from "@ra/assets/icons/TickIcon";

export default function DashboardCard({
  label,
  primaryValue,
  secondaryValue,
  progress,
}: DashboardCardProps) {
  const clampedProgress = progress ? Math.min(100, Math.max(0, progress)) : null;

  const generateCardElements = () => {
    switch (label) {
      case appTexts.dashboardTexts.dashboardCards.capacityVsDemand:
        return {
          backgroundColor: `${appColors.secondaryGreen}`,
          color: appColors.primaryGreen,
          icon: <TickIcon color={appColors.primaryGreen} />,
          showProgress: clampedProgress ? true : false,
        };

      case appTexts.dashboardTexts.dashboardCards.waypoints:
        return {
          backgroundColor: `${appColors.primaryBackground}`,
          color: appColors.primary,
          icon: <WaypointDashboardIcon color={appColors.primary} />,
          showProgress: clampedProgress ? true : false,
        };

      case appTexts.dashboardTexts.dashboardCards.vehicles:
        return {
          backgroundColor: `${appColors.secondaryPurple}1A`,
          color: appColors.primaryPurple,
          icon: <VehicleIconNav color={appColors.primaryPurple} />,
          showProgress: clampedProgress ? true : false,
        };

      case appTexts.dashboardTexts.dashboardCards.totalDemand:
        return {
          backgroundColor: `${appColors.secondaryOrange}1A`,
          color: appColors.primaryOrange,
          icon: <RouteIconNav color={appColors.primaryOrange} />,
          showProgress: clampedProgress ? true : false,
        };

      default:
        return {
          backgroundColor: `${appColors.primaryGreen}1A`,
          color: appColors.textGrey,
          showProgress: false,
          icon: <WaypointDashboardIcon />,
        };
    }
  };

  const generateCardContent = () => {
    const { backgroundColor, color, icon, showProgress } = generateCardElements();
    return (
      <div className="flex w-full min-w-[164px] flex-col items-start gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold"
          style={{
            backgroundColor,
            color,
          }}
        >
          {icon}
        </div>

        <span
          className="text-[10px] font-bold tracking-[0.08em] uppercase"
          style={{ color: appColors.textGrey }}
        >
          {label}
        </span>

        <div className="flex w-full flex-col gap-1">
          <span className="text-2xl font-bold leading-tight text-[#0f172a]">{primaryValue}</span>
          <span className="text-sm font-medium" style={{ color: appColors.textGrey }}>
            {secondaryValue}
          </span>
        </div>

        {showProgress ? (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full"
              style={{
                width: `${clampedProgress}%`,
                backgroundColor: color,
              }}
            />
          </div>
        ) : (
          <div className="invisible h-1.5 w-full" aria-hidden="true" />
        )}
      </div>
    );
  };

  return <AppCard className="w-fit min-w-[164px]" content={generateCardContent()} />;
}
