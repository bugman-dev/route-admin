export type SystemHealthIconType = "backend" | "database" | "routing";

export interface SystemHealthItem {
  id: string;
  label: string;
  status: string;
  icon: SystemHealthIconType;
  healthy: boolean;
}

export interface SystemHealthProps {
  title: string;
  items: SystemHealthItem[];
}
