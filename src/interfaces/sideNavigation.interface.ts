export interface SideNavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface UseSideNavigationReturn {
  activeItem: string;
  handlenavigationItemClick: (itemId: string) => void;
}
