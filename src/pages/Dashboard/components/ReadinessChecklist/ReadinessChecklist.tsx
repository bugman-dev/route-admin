import AppCard from "@ra/components/AppCard/AppCard";
import TickIcon from "@ra/assets/icons/TickIcon";
import appColors from "@ra/assets/colors/appColors";
import type { ReadinessChecklistProps } from "@ra/interfaces/readinessChecklist";
import { appTexts } from "@ra/constants/apptexts";
import CrossIcon from "@ra/assets/icons/Crossicon";

export default function ReadinessChecklist({
  title,
  subtitle,
  badge,
  items,
  readyToGenerate,
}: ReadinessChecklistProps) {
  return (
    <AppCard
      className="w-full p-0"
      content={
        <div className="flex w-full flex-col">
          <div className="flex items-start justify-between gap-4 px-4 pt-4 pb-3">
            <div className="flex min-w-0 flex-col gap-1">
              <h2 className="text-base font-semibold text-[#0f172a]">{title}</h2>
              <p className="text-sm" style={{ color: appColors.textGrey }}>
                {subtitle}
              </p>
            </div>
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium"
              style={{
                backgroundColor: badge.backgroundColor,
                color: badge.textColor,
              }}
            >
              {badge.text}
            </span>
          </div>

          <div className="border-t" style={{ borderColor: appColors.mainBorder }} />

          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li key={item.id}>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    {item.passed ? (
                      <TickIcon color={appColors.primaryGreen} />
                    ) : (
                      <CrossIcon color={appColors.primaryRed} />
                    )}
                    <span className="text-sm font-semibold text-[#0f172a]">{item.label}</span>
                  </div>
                  <span
                    className="shrink-0 text-sm font-medium"
                    style={{ color: item.passed ? appColors.primaryGreen : appColors.primaryRed }}
                  >
                    {item.passed ? appTexts.statusTexts.healthy : appTexts.statusTexts.critical}
                  </span>
                </div>
                {index < items.length - 1 ? (
                  <div className="mx-4 border-t" style={{ borderColor: appColors.mainBorder }} />
                ) : null}
              </li>
            ))}
          </ul>

          <div className="px-4 pb-4 pt-1">
            <div
              className="rounded-lg px-4 py-3 text-sm font-medium"
              style={{
                backgroundColor: readyToGenerate
                  ? appColors.secondaryGreen
                  : appColors.secondaryRed,
                color: readyToGenerate ? appColors.primaryGreen : appColors.primaryRed,
              }}
            >
              {readyToGenerate
                ? appTexts.dashboardTexts.readinessChecklist.footerReady
                : appTexts.dashboardTexts.readinessChecklist.footerCritical}
            </div>
          </div>
        </div>
      }
    />
  );
}
