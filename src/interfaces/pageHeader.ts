export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  apiStatus?: string;
  serviceDate?: string;
}

export interface UsePageHeaderReturn {
  apiStatus: string;
  serviceDate: string;
  statusColor: string;
}
