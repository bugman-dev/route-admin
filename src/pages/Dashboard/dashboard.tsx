import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import DashboardCard from "./components/DashboardCard/DashboardCard";

export default function Dashboard() {
  return (
    <section>
      <PageHeader
        title={appTexts.pageHeaders.dashboard.title}
        subtitle={appTexts.pageHeaders.dashboard.subtitle}
      />
      <div className="mt-6 flex w-full gap-4 px-6">
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
      </div>
    </section>
  );
}
