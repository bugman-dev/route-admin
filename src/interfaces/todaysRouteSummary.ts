export interface TodaysRouteSummaryStat {
  id: string;
  label: string;
  value: string;
}

export interface TodaysRouteSummaryProps {
  title: string;
  subtitle: string;
  stats: TodaysRouteSummaryStat[];
  actionLabel: string;
  onActionClick?: () => void;
}
