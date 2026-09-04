import SideNavigation from "@ra/components/SideNavigation";
import appColors from "@ra/assets/colors/appColors";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      <SideNavigation />
      <div className="flex-1 overflow-auto" style={{ backgroundColor: appColors.pageBackground }}>
        <Outlet />
      </div>
    </div>
  );
}
