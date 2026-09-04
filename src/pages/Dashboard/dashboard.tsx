import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import appColors from "@ra/assets/colors/appColors";
import { useDashboard } from "@ra/hooks/useDashboard";
import { formatServiceDateIst } from "@ra/utils/helperFunctions.utils";
import DashboardCard from "./components/DashboardCard/DashboardCard";
import RouteStatusCard from "./components/RouteStatusCard/RouteStatusCard";
import ReadinessChecklist from "./components/ReadinessChecklist/ReadinessChecklist";
import { ChecklistItems } from "./components/RouteStatusCard/ChecklistItems";

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
    controlledChecklistData,
    readyToGenerate,
  } = useDashboard(ChecklistItems);
  console.log(controlledChecklistData);

  return (
    <section>
      <PageHeader
        title={appTexts.pageHeaders.dashboard.title}
        subtitle={appTexts.pageHeaders.dashboard.subtitle}
      />
      {/* TOP LEVEL INFORMATION */}
      <div className="mt-6 flex w-full items-stretch gap-4 px-6">
        <DashboardCard
          label={appTexts.dashboardTexts.dashboardCards.waypoints}
          primaryValue={waypoints.toString()}
          secondaryValue={appTexts.dashboardTexts.dashboardCards.active}
        />
        <DashboardCard
          label={appTexts.dashboardTexts.dashboardCards.vehicles}
          primaryValue={vehicles.toString()}
          secondaryValue={appTexts.dashboardTexts.dashboardCards.active}
        />
        <DashboardCard
          label={appTexts.dashboardTexts.dashboardCards.totalDemand}
          primaryValue={totalDemand.toString()}
          secondaryValue={appTexts.dashboardTexts.dashboardCards.inclDepot}
        />
        <DashboardCard
          label={appTexts.dashboardTexts.dashboardCards.capacityVsDemand}
          primaryValue={capacityVsDemand}
          secondaryValue={capacitySecondaryValue}
          progress={capacityProgress}
        />
        <RouteStatusCard
          title={appTexts.dashboardTexts.routeStatusCard.title}
          lastGenerated={`${appTexts.dashboardTexts.routeStatusCard.lastGeneratedPrefix} ${formatServiceDateIst(lastGeneratedServiceDate) ?? "-"}`}
          badge={cachedLastGeneration}
          statusMessage={`4 ${appTexts.dashboardTexts.routeStatusCard.readyForDispatch}`}
        />
      </div>

      {/* GENERIC INFORMATION */}
      <div className="mt-6 flex w-full gap-4 px-6">
        <div className="flex flex-col gap-4">
          <ReadinessChecklist
            title={appTexts.dashboardTexts.readinessChecklist.title}
            subtitle={appTexts.dashboardTexts.readinessChecklist.subtitle}
            items={controlledChecklistData}
            readyToGenerate={readyToGenerate}
          />
          <p>Pending routes</p>
        </div>
        <div>
          <p>Placeholder text</p>
          <p>Placeholder text</p>
        </div>
      </div>
    </section>
  );
}
