import AppCard from "@ra/components/AppCard/AppCard";
import appColors from "@ra/assets/colors/appColors";
import VehicleIconNav from "@ra/assets/icons/VehicleIconNav";
import RouteIcon from "@ra/assets/icons/RouteIcon";
import type { TodaysRouteSummaryProps } from "@ra/interfaces/todaysRouteSummary";

const mutedText = "#94A3B8";
const iconWell = "#1A3F5F";

export default function TodaysRouteSummary({
  title,
  subtitle,
  stats,
  actionLabel,
  onActionClick,
}: TodaysRouteSummaryProps) {
  return (
    <AppCard
      className="w-full border-0"
      style={{ backgroundColor: appColors.backgroudSolid }}
      content={
        <div className="flex w-full flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 flex-col gap-1">
              <h2 className="text-base font-semibold" style={{ color: appColors.textWhite }}>
                {title}
              </h2>
              <p className="text-sm" style={{ color: mutedText }}>
                {subtitle}
              </p>
            </div>
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: iconWell }}
            >
              <VehicleIconNav color={appColors.textWhite} />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center justify-between gap-2">
                <span className="text-sm" style={{ color: mutedText }}>
                  {stat.label}
                </span>
                <span className="text-sm font-semibold" style={{ color: appColors.textWhite }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: appColors.primary, color: appColors.textWhite }}
            onClick={onActionClick}
          >
            <RouteIcon color={appColors.textWhite} />
            {actionLabel}
          </button>
        </div>
      }
    />
  );
}
