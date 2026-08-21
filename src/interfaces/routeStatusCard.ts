export interface RouteStatusCardProps {
  title: string;
  lastGenerated: string;
  badge: string;
  statusMessage: string;
  onActionClick?: () => void;
}
