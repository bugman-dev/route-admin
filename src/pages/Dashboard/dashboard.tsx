import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import { useDashboard } from "@ra/hooks/useDashboard";
import { formatServiceDateIst } from "@ra/utils/helperFunctions.utils";
import DashboardCard from "./components/DashboardCard/DashboardCard";
import RouteStatusCard from "./components/RouteStatusCard/RouteStatusCard";
import ReadinessChecklist from "./components/ReadinessChecklist/ReadinessChecklist";
import FleetActivity from "./components/FleetActivity/FleetActivity";
import SystemHealth from "./components/SystemHealth/SystemHealth";
import TodaysRouteSummary from "./components/TodaysRouteSummary/TodaysRouteSummary";
import { ChecklistItems } from "./components/RouteStatusCard/ChecklistItems";
import { FleetActivityList } from "./components/FleetActivity/FleetActivityList";
import { SystemHealthList } from "./components/SystemHealth/SystemHealthList";
import { RoutsStatsList } from "./components/TodaysRouteSummary/RoutsStatsList";

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
    controlledFleetActivityData,
    controlledSystemHealthData,
    readyToGenerate,
    controlledTodaysRouteSummaryData,
    checklistLoading,
    fleetActivityLoading,
  } = useDashboard({
    checklistData: ChecklistItems,
    fleetActivityData: FleetActivityList,
    systemHealthData: SystemHealthList,
    todaysRouteSummaryData: RoutsStatsList,
  });

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
      <div className="mt-6 grid w-full grid-cols-[3fr_2fr] gap-4 px-6">
        <div className="flex min-w-0 flex-col gap-4">
          <ReadinessChecklist
            title={appTexts.dashboardTexts.readinessChecklist.title}
            subtitle={appTexts.dashboardTexts.readinessChecklist.subtitle}
            items={controlledChecklistData}
            readyToGenerate={readyToGenerate}
            loading={checklistLoading}
          />
          <FleetActivity
            title={appTexts.dashboardTexts.fleetActivity.title}
            actionLabel={appTexts.dashboardTexts.fleetActivity.viewRoutes}
            stats={controlledFleetActivityData}
            loading={fleetActivityLoading}
          />
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <SystemHealth
            title={appTexts.dashboardTexts.systemHealth.title}
            items={controlledSystemHealthData}
          />
          <TodaysRouteSummary
            title={appTexts.dashboardTexts.todaysRouteSummary.title}
            subtitle={appTexts.dashboardTexts.todaysRouteSummary.subtitle}
            actionLabel={appTexts.dashboardTexts.todaysRouteSummary.actionLabel}
            stats={controlledTodaysRouteSummaryData}
          />
        </div>
      </div>
    </section>
  );
}
