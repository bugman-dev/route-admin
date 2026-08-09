import { navItems } from "./navItems";
import type { SideNavigationItem } from "@ra/interfaces/sideNavigation.interface";
import { sideNavigation } from "@ra/constants/sideNavigation";
import { useSideNavigation } from "@ra/hooks/useSideNavigation";
import RouteIcon from "@ra/assets/icons/RouteIcon";

export default function SideNavigation() {
  const { activeItem, handlenavigationItemClick } = useSideNavigation();

  const generateNavItems = () => {
    return navItems.map((item: SideNavigationItem) => {
      const isActive = item.id === activeItem;

      return (
        <button
          key={item.id}
          type="button"
          className={
            isActive
              ? "flex w-full cursor-pointer items-center gap-3 rounded-lg bg-[#1e6bff] px-3 py-2.5 text-left text-sm font-medium text-white"
              : "flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
          }
          onClick={() => {
            handlenavigationItemClick(item.id);
          }}
        >
          <span className="w-5 text-center text-xs">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      );
    });
  };

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#0b1426] px-4 py-6 text-white">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1e6bff] text-sm font-semibold">
          {<RouteIcon />}
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-semibold leading-tight">{sideNavigation.navHeader}</p>
          <p className="mt-0.5 text-[10px] font-medium tracking-[0.12em] text-slate-400 uppercase">
            {sideNavigation.navSubHeader}
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1">{generateNavItems()}</nav>
    </aside>
  );
}
