export interface ReadinessCheckItem {
  id: string;
  label: string;
  passed: boolean;
}

export interface ReadinessChecklistBadge {
  text: string;
  textColor: string;
  backgroundColor: string;
}

export interface ReadinessChecklistProps {
  title: string;
  subtitle: string;
  badge: ReadinessChecklistBadge;
  items: ReadinessCheckItem[];
  readyToGenerate: boolean;
}
