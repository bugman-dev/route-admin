import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import SearchBox from "@ra/components/SearchBox";
import CheckBox from "@ra/components/CheckBox";
import ButtonPrimary from "@ra/components/ButtonPrimary";
import PlusIconBase from "@ra/assets/icons/PlusIconBase";

export default function Waypoint() {
  return (
    <div>
      <PageHeader
        title={appTexts.waypointsTexts.pageHeader.title}
        subtitle={appTexts.waypointsTexts.pageHeader.subtitle}
      />
      <div id="pageWrapper" className="px-8 py-6">
        <section id="actions" className="flex items-center justify-between">
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
      </div>
    </div>
  );
}
