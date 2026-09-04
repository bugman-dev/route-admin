
export interface SystemHealthItem {
  id: string;
  label: string;
  status: string;
  healthy: boolean;
}

export interface SystemHealthProps {
  title: string;
  items: SystemHealthItem[];
}
