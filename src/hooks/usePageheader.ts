import { getHealth } from "@ra/factory/healthFactory";
import { appTexts } from "@ra/constants/apptexts";
import type { UsePageHeaderReturn } from "@ra/interfaces/pageHeader";
import { useEffect, useState } from "react";

function formatServiceDateIst(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("day")} ${get("month")} ${get("year")}, ${get("weekday")}`;
}

export const usePageHeader = (): UsePageHeaderReturn => {
  const [apiStatus, setApiStatus] = useState<string>(appTexts.pageHeaderCards.defaultApiStatus);
  const [serviceDate, setServiceDate] = useState<string>(
    appTexts.pageHeaderCards.defaultServiceDate,
  );

  useEffect(() => {
    let cancelled = false;

    const loadHealth = async () => {
      try {
        const health = await getHealth();
        if (cancelled) return;

        const isOk = health.status === "ok";
        setApiStatus(isOk ? appTexts.statusTexts.healthy : appTexts.statusTexts.error);
        setServiceDate(formatServiceDateIst());
      } catch {
        if (cancelled) return;
        setApiStatus(appTexts.statusTexts.error);
        setServiceDate(appTexts.pageHeaderCards.defaultServiceDate);
      }
    };

    void loadHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  return { apiStatus, serviceDate };
};
