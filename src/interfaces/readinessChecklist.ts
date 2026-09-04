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
  items: ReadinessCheckItem[];
  readyToGenerate: boolean;
  loading: boolean;
}
