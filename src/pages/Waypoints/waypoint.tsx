import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import SearchBox from "@ra/components/SearchBox";
import CheckBox from "@ra/components/CheckBox";
import ButtonPrimary from "@ra/components/ButtonPrimary";
import PlusIconBase from "@ra/assets/icons/PlusIconBase";
import Table, { Column } from "@ra/components/Table";
import { mockData, type WaypointTableRow } from "./mockdata";
import appColors from "@ra/assets/colors/appColors";
import ToggleButton from "@ra/components/ToggleButton";

export default function Waypoint() {
  const generateDepotChip = (isDepot: boolean) => {
    return (
      <div
        className="rounded-lg px-2 py-1 text-sm w-fit min-w-[40px] text-center"
        style={{
          backgroundColor: appColors.primaryBackground,
          color: isDepot ? appColors.primary : appColors.textGrey,
        }}
      >
        {isDepot ? "Yes" : "No"}
      </div>
    );
  };

  return (
    <div>
      <PageHeader
        title={appTexts.waypointsTexts.pageHeader.title}
        subtitle={appTexts.waypointsTexts.pageHeader.subtitle}
      />
      <div id="pageWrapper" className="px-8 py-6">
        <section id="actions" className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SearchBox
              placeholder={appTexts.waypointsTexts.searchBox.placeholder}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <CheckBox
              label={appTexts.waypointsTexts.checkBox.label}
              onChange={(checked) => {
                console.log(checked);
              }}
            />
          </div>
          <ButtonPrimary
            icon={<PlusIconBase color="white" size={16} />}
            label={appTexts.waypointsTexts.button.label}
            onClick={() => {
              console.log("Add Waypoints");
            }}
          />
        </section>
        <section id="table">
          <Table<WaypointTableRow> data={mockData}>
            <Column<WaypointTableRow>
              header={appTexts.waypointsTexts.table.columns.name}
              content={(rowData) => rowData.name}
            />
            <Column<WaypointTableRow>
              header={appTexts.waypointsTexts.table.columns.latitude}
              content={(rowData) => rowData.latitude}
            />
            <Column<WaypointTableRow>
              header={appTexts.waypointsTexts.table.columns.longitude}
              content={(rowData) => rowData.longitude}
            />
            <Column<WaypointTableRow>
              header={appTexts.waypointsTexts.table.columns.demand}
              content={(rowData) => rowData.demand}
            />
            <Column<WaypointTableRow>
              header={appTexts.waypointsTexts.table.columns.depot}
              content={(rowData) => generateDepotChip(rowData.depot)}
            />
            <Column<WaypointTableRow>
              header={appTexts.waypointsTexts.table.columns.active}
              content={(rowData) => (
                <ToggleButton
                  isActive={rowData.active ?? false}
                  onToggle={(isActive) => {
                    console.log(rowData.id, isActive);
                  }}
                />
              )}
            />
          </Table>
        </section>
      </div>
    </div>
  );
}
