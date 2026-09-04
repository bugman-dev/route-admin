import AppCard from "@ra/components/AppCard/AppCard";
import appColors from "@ra/assets/colors/appColors";
import type { FleetActivityProps } from "@ra/interfaces/fleetActivity";

export default function FleetActivity({
  title,
  actionLabel,
  stats,
  onActionClick,
}: FleetActivityProps) {
  return (
    <AppCard
      className="w-full"
      content={
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base font-semibold text-[#0f172a]">{title}</h2>
            <button
              type="button"
              className="cursor-pointer text-sm font-medium"
              style={{ color: appColors.primary }}
              onClick={onActionClick}
            >
              {actionLabel}
            </button>
          </div>

          <div className="flex w-full gap-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex min-w-0 flex-1 flex-col gap-1 rounded-xl px-4 py-3"
                style={{ backgroundColor: appColors.pageBackground }}
              >
                <span className="text-sm" style={{ color: appColors.textGrey }}>
                  {stat.label}
                </span>
                <span className="text-2xl font-bold text-[#0f172a]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
