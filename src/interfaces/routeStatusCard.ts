export interface RouteStatusCardProps {
  title: string;
  lastGenerated: string;
  badge: {
    badge: string;
    textColor: string;
    backgroundColor: string;
  };
  statusMessage: string;
  onActionClick?: () => void;
}
