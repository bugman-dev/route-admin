import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import SearchBox from "@ra/components/SearchBox";
import CheckBox from "@ra/components/CheckBox";
import ButtonPrimary from "@ra/components/ButtonPrimary";
import PlusIconBase from "@ra/assets/icons/PlusIconBase";
import Table, { Column } from "@ra/components/Table";

export default function Waypoint() {
  return (
    <div>
      <PageHeader
        title={appTexts.waypointsTexts.pageHeader.title}
        subtitle={appTexts.waypointsTexts.pageHeader.subtitle}
      />
      <div id="pageWrapper" className="px-8 py-6">
        <section id="actions" className="flex items-center justify-between mb-6">
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
          <Table
            data={[
              {
                name: "John Doe",
                latitude: 40.7128,
                longitude: -74.006,
                demand: 100,
                depot: "yes",
                active: true,
              },
              {
                name: "Jane Doe",
                latitude: 40.7128,
                longitude: -74.006,
                demand: 100,
                depot: "No",
                active: true,
              },
              {
                name: "John Doe",
                latitude: 40.7128,
                longitude: -74.006,
                demand: 100,
                depot: "No",
                active: true,
              },
              {
                name: "Jane Doe",
                latitude: 40.7128,
                longitude: -74.006,
                demand: 100,
                depot: "No",
                active: true,
              },
            ]}
          >
            <Column
              header={appTexts.waypointsTexts.table.columns.name}
              content={(rowData) => rowData.name}
            />
            <Column
              header={appTexts.waypointsTexts.table.columns.latitude}
              content={(rowData) => rowData.latitude}
            />
            <Column
              header={appTexts.waypointsTexts.table.columns.longitude}
              content={(rowData) => rowData.longitude}
            />
            <Column
              header={appTexts.waypointsTexts.table.columns.demand}
              content={(rowData) => rowData.demand}
            />
            <Column
              header={appTexts.waypointsTexts.table.columns.depot}
              content={(rowData) => <p>{rowData.depot}</p>}
            />
            <Column
              header={appTexts.waypointsTexts.table.columns.active}
              content={(rowData) => rowData.active}
            />
          </Table>
        </section>
      </div>
    </div>
  );
}
