import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";
import SearchBox from "@ra/components/SearchBox";

export default function Waypoint() {
  return (
    <div>
      <PageHeader
        title={appTexts.waypointsTexts.pageHeader.title}
        subtitle={appTexts.waypointsTexts.pageHeader.subtitle}
      />
      <div id="pageWrapper" className="px-8 py-6">
        <section id="actions">
          <SearchBox
            placeholder={appTexts.waypointsTexts.searchBox.placeholder}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </section>
      </div>
    </div>
  );
}
