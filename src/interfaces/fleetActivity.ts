export interface FleetActivityStat {
  id: string;
  label: string;
  value: string;
}

export interface FleetActivityProps {
  title: string;
  actionLabel: string;
  stats: FleetActivityStat[];
  onActionClick?: () => void;
}
