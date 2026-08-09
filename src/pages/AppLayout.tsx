import SideNavigation from "@ra/components/SideNavigation";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      <SideNavigation />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
