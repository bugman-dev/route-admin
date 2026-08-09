import CalendarIcon from "@ra/assets/icons/CalendarIcon";
import appColors from "@ra/assets/colors/appColors";
import AppCard from "@ra/components/AppCard/AppCard";
import { appTexts } from "@ra/constants/apptexts";
import type { PageHeaderProps } from "@ra/interfaces/pageHeader";

export default function PageHeader({
  title,
  subtitle,
  apiStatus = appTexts.pageHeaderCards.defaultApiStatus, // TODO: Replace with actual API status
  serviceDate = appTexts.pageHeaderCards.defaultServiceDate, // TODO: Replace with actual service date
}: PageHeaderProps) {
  return (
    <div
      className="flex min-h-[50px] w-full items-center justify-between gap-4 border-b bg-white px-6 py-[14px]"
      style={{ borderColor: appColors.mainBorder }}
    >
      <div className="flex min-w-0 flex-col justify-center gap-0.5">
        <h1 className="text-xl font-semibold leading-tight text-[#0f172a]">{title}</h1>
        {subtitle ? (
          <p className="text-sm font-normal leading-snug text-slate-500">{subtitle}</p>
        ) : null}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <AppCard
          className="w-fit px-3 py-[9px]"
          content={
            <div className="flex w-max flex-col items-start gap-1">
              <span
                className="whitespace-nowrap text-[10px] font-bold tracking-[0.08em] uppercase"
                style={{ color: appColors.textGrey }}
              >
                {appTexts.pageHeaderCards.apiStatus}
              </span>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: appColors.primaryGreen }}
                />
                <span className="text-sm font-medium" style={{ color: appColors.primaryGreen }}>
                  {apiStatus}
                </span>
              </div>
            </div>
          }
        />
        <AppCard
          className="w-fit px-3 py-[9px]"
          content={
            <div className="flex w-max flex-col items-start gap-1">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <CalendarIcon style={{ color: appColors.textGrey }} />
                <span
                  className="text-[10px] font-bold tracking-[0.08em] uppercase"
                  style={{ color: appColors.textGrey }}
                >
                  {appTexts.pageHeaderCards.serviceDate}
                </span>
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-[#0f172a]">
                {serviceDate}
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
