import AppCard from "@ra/components/AppCard/AppCard";
import appColors from "@ra/assets/colors/appColors";
import type { RouteStatusCardProps } from "@ra/interfaces/routeStatusCard";
import NorthWestArrowIcon from "@ra/assets/icons/NorthWestArrowIcon";

export default function RouteStatusCard({
  title,
  lastGenerated,
  badge,
  statusMessage,
  onActionClick,
}: RouteStatusCardProps) {
  return (
    <AppCard
      className="min-w-0 flex-1 p-0"
      content={
        <div className="flex h-full w-full flex-col">
          <div className="flex items-start justify-between gap-4 px-4 pt-4 pb-3">
            <div className="flex min-w-0 flex-col gap-1">
              <h2 className="text-base font-semibold text-[#0f172a]">{title}</h2>
              <p className="text-sm" style={{ color: appColors.textGrey }}>
                {lastGenerated ?? "-"}
              </p>
            </div>
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium"
              style={{
                backgroundColor: badge.backgroundColor,
                color: badge.textColor,
              }}
            >
              {badge.badge}
            </span>
          </div>

          <div className="border-t mx-4" style={{ borderColor: appColors.mainBorder }} />

          <div className="flex items-center justify-between gap-4 px-4 pt-3 pb-4">
            <p className="text-sm" style={{ color: appColors.textGrey }}>
              {statusMessage}
            </p>
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full"
              style={{ backgroundColor: appColors.primaryBackground, color: appColors.primary }}
              onClick={onActionClick}
              aria-label="Open routes"
            >
              <NorthWestArrowIcon color={appColors.primary} style={{ scale: 1.2 }} />
            </button>
          </div>
        </div>
      }
    />
  );
}
