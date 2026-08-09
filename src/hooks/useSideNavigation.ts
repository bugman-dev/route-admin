import { useLocation, useNavigate } from "react-router-dom";
import { sideNavigation } from "@ra/constants/sideNavigation";
import type { UseSideNavigationReturn } from "@ra/interfaces/sideNavigation.interface";

export const useSideNavigation = (): UseSideNavigationReturn => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeItem = pathname.split("/").filter(Boolean)[0] ?? sideNavigation.default;

  const handlenavigationItemClick = (itemId: string) => {
    navigate(`/${itemId}`);
  };

  return { activeItem, handlenavigationItemClick };
};
