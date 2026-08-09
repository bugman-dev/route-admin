import { useLocation, useNavigate } from "react-router-dom";
import { sideNavigation } from "@ra/constants/sideNavigation";

export const useSideNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeItem = pathname.split("/").filter(Boolean)[0] ?? sideNavigation.default;

  const handlenavigationItemClick = (itemId: string) => {
    navigate(`/${itemId}`);
  };

  return { activeItem, handlenavigationItemClick };
};
