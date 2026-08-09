import PageHeader from "@ra/components/PageHeader/PageHeader";
import { appTexts } from "@ra/constants/apptexts";

export default function Dashboard() {
  return (
    <PageHeader
      title={appTexts.pageHeaders.dashboard.title}
      subtitle={appTexts.pageHeaders.dashboard.subtitle}
    />
  );
}
