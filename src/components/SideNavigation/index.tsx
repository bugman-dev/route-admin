import { navItems } from "./navItems";
import type { SideNavigationItem } from "@ra/interfaces/sideNavigation.interface";
import { sideNavigation } from "@ra/constants/sideNavigation";
import { useSideNavigation } from "@ra/hooks/useSideNavigation";
import RouteIcon from "@ra/assets/icons/RouteIcon";
import appColors from "@ra/assets/colors/appColors";

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
              ? "flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium"
              : "flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200"
          }
          style={isActive ? { backgroundColor: appColors.primary, color: appColors.textWhite } : undefined}
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
    <aside
      className="flex h-screen w-64 shrink-0 flex-col px-4 py-6"
      style={{ backgroundColor: appColors.backgroudSolid, color: appColors.textWhite }}
    >
      <div className="mb-8 flex items-center gap-3 px-2">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${appColors.gradientPrimary}, ${appColors.primary})`,
          }}
        >
          <RouteIcon />
        </div>
        <div className="min-w-0">
          <p
            className="truncate text-base font-semibold leading-tight"
            style={{ color: appColors.textWhite }}
          >
            {sideNavigation.navHeader}
          </p>
          <p
            className="mt-0.5 text-[10px] font-medium tracking-[0.12em] uppercase"
            style={{ color: appColors.textWhite }}
          >
            {sideNavigation.navSubHeader}
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1">{generateNavItems()}</nav>
    </aside>
  );
}
