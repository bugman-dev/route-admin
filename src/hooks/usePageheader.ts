import { getHealth } from "@ra/factory/healthFactory";
import { appTexts } from "@ra/constants/apptexts";
import type { UsePageHeaderReturn } from "@ra/interfaces/pageHeader";
import { useEffect, useState } from "react";
import { formatServiceDateIst } from "@ra/utils/helperFunctions.utils";

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
        setApiStatus(isOk ? appTexts.statusTexts.healthy : appTexts.statusTexts.critical);
        setServiceDate(formatServiceDateIst());
      } catch {
        if (cancelled) return;
        setApiStatus(appTexts.statusTexts.critical);
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
