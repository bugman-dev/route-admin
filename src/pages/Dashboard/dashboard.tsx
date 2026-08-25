import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import { useDashboard } from "@ra/hooks/useDashboard";
import DashboardCard from "./components/DashboardCard/DashboardCard";
import RouteStatusCard from "./components/RouteStatusCard/RouteStatusCard";
import { formatServiceDateIst } from "@ra/utils/helperFunctions.utils";

export default function Dashboard() {
  const {
    waypoints,
    vehicles,
    totalDemand,
    capacityVsDemand,
    capacityProgress,
    capacitySecondaryValue,
    cachedLastGeneration,
    lastGeneratedServiceDate,
  } = useDashboard();

  return (
    <section>
      <PageHeader
        title={appTexts.pageHeaders.dashboard.title}
        subtitle={appTexts.pageHeaders.dashboard.subtitle}
      />
      <div className="mt-6 flex w-full items-stretch gap-4 px-6">
        <DashboardCard
          label={appTexts.dashboardCards.waypoints}
          primaryValue={waypoints.toString()}
          secondaryValue={appTexts.dashboardCards.active}
        />
        <DashboardCard
          label={appTexts.dashboardCards.vehicles}
          primaryValue={vehicles.toString()}
          secondaryValue={appTexts.dashboardCards.active}
        />
        <DashboardCard
          label={appTexts.dashboardCards.totalDemand}
          primaryValue={totalDemand.toString()}
          secondaryValue={appTexts.dashboardCards.inclDepot}
        />
        <DashboardCard
          label={appTexts.dashboardCards.capacityVsDemand}
          primaryValue={capacityVsDemand}
          secondaryValue={capacitySecondaryValue}
          progress={capacityProgress}
        />
        <RouteStatusCard
          title={appTexts.routeStatusCard.title}
          lastGenerated={`${appTexts.routeStatusCard.lastGeneratedPrefix} ${formatServiceDateIst(new Date(lastGeneratedServiceDate ?? ""))}`}
          badge={cachedLastGeneration}
          statusMessage={`4 ${appTexts.routeStatusCard.readyForDispatch}`}
        />
      </div>
    </section>
  );
}
