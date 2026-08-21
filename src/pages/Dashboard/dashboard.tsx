import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import DashboardCard from "./components/DashboardCard/DashboardCard";
import RouteStatusCard from "./components/RouteStatusCard/RouteStatusCard";

export default function Dashboard() {
  return (
    <section>
      <PageHeader
        title={appTexts.pageHeaders.dashboard.title}
        subtitle={appTexts.pageHeaders.dashboard.subtitle}
      />
      <div className="mt-6 flex w-full items-stretch gap-4 px-6">
        <DashboardCard
          label={appTexts.dashboardCards.waypoints}
          primaryValue="14 / 14"
          secondaryValue="100 %"
        />
        <DashboardCard
          label={appTexts.dashboardCards.vehicles}
          primaryValue="14 / 14"
          secondaryValue="100 %"
        />
        <DashboardCard
          label={appTexts.dashboardCards.totalDemand}
          primaryValue="14 / 14"
          secondaryValue="100 %"
        />
        <DashboardCard
          label={appTexts.dashboardCards.capacityVsDemand}
          primaryValue="14 / 14"
          secondaryValue="100 %"
          progress={100}
        />
        <RouteStatusCard
          title={appTexts.routeStatusCard.title}
          lastGenerated={`${appTexts.routeStatusCard.lastGeneratedPrefix} 20 Aug 2025, 07:42 AM`}
          badge={appTexts.routeStatusCard.badgeCached}
          statusMessage={`4 ${appTexts.routeStatusCard.readyForDispatch}`}
        />
      </div>
    </section>
  );
}
