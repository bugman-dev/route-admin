import AppCard from "@ra/components/AppCard/AppCard";
import appColors from "@ra/assets/colors/appColors";
import ShieldCheckIcon from "@ra/assets/icons/ShieldCheckIcon";
import DatabaseIcon from "@ra/assets/icons/DatabaseIcon";
import { appTexts } from "@ra/constants/apptexts";
import type { SystemHealthIconType, SystemHealthProps } from "@ra/interfaces/systemHealth";
import RouteIcon from "@ra/assets/icons/RouteIcon";

function HealthIcon({ type, color }: { type: SystemHealthIconType; color: string }) {
  switch (type) {
    case "backend":
      return <ShieldCheckIcon color={color} />;
    case "database":
      return <DatabaseIcon color={color} />;
    case "routing":
      return <RouteIcon color={color} />;
  }
}

function statusColors(healthy: boolean, status: string) {
  if (status === appTexts.statusTexts.unknown) {
    return {
      iconColor: appColors.textGrey,
      iconBackground: appColors.pageBackground,
      statusColor: appColors.textGrey,
    };
  }

  return {
    iconColor: healthy ? appColors.primaryGreen : appColors.primaryRed,
    iconBackground: healthy ? appColors.secondaryGreen : appColors.secondaryRed,
    statusColor: healthy ? appColors.primaryGreen : appColors.primaryRed,
  };
}

export default function SystemHealth({ title, items }: SystemHealthProps) {
  console.log(items);
  return (
    <AppCard
      className="w-full"
      content={
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-base font-semibold text-[#0f172a]">{title}</h2>

          <ul className="flex flex-col gap-3">
            {items.map((item) => {
              const { iconColor, iconBackground, statusColor } = statusColors(
                item.healthy,
                item.status,
              );

              return (
                <li key={item.id} className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: iconBackground }}
                    >
                      <HealthIcon type={item.icon} color={iconColor} />
                    </span>
                    <span className="text-sm font-semibold text-[#0f172a]">{item.label}</span>
                  </div>
                  <span className="shrink-0 text-sm font-medium" style={{ color: statusColor }}>
                    {item.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      }
    />
  );
}
