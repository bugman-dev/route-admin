import AppCard from "@ra/components/AppCard/AppCard";
import TickIcon from "@ra/assets/icons/TickIcon";
import appColors from "@ra/assets/colors/appColors";
import type { ReadinessChecklistProps } from "@ra/interfaces/readinessChecklist";
import { appTexts } from "@ra/constants/apptexts";
import CrossIcon from "@ra/assets/icons/Crossicon";
import { Spinner } from "@ra/components/Spinner";

export default function ReadinessChecklist({
  title,
  subtitle,
  items,
  readyToGenerate,
  loading,
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
                backgroundColor: loading
                  ? appColors.pageBackground
                  : readyToGenerate
                    ? appColors.secondaryGreen
                    : appColors.secondaryRed,
                color: loading
                  ? appColors.textGrey
                  : readyToGenerate
                    ? appColors.primaryGreen
                    : appColors.primaryRed,
              }}
            >
              {loading
                ? appTexts.dashboardTexts.readinessChecklist.badgeLoading
                : readyToGenerate
                  ? appTexts.dashboardTexts.readinessChecklist.badgeAllClear
                  : appTexts.dashboardTexts.readinessChecklist.badgeCritical}
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
                    {loading ? (
                      <Spinner size={16} />
                    ) : item.passed ? (
                      appTexts.statusTexts.healthy
                    ) : (
                      appTexts.statusTexts.critical
                    )}
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
                backgroundColor: loading
                  ? appColors.pageBackground
                  : readyToGenerate
                    ? appColors.secondaryGreen
                    : appColors.secondaryRed,
                color: loading
                  ? appColors.textGrey
                  : readyToGenerate
                    ? appColors.primaryGreen
                    : appColors.primaryRed,
              }}
            >
              {loading
                ? appTexts.dashboardTexts.readinessChecklist.footerLoading
                : readyToGenerate
                  ? appTexts.dashboardTexts.readinessChecklist.footerReady
                  : appTexts.dashboardTexts.readinessChecklist.footerCritical}
            </div>
          </div>
        </div>
      }
    />
  );
}
