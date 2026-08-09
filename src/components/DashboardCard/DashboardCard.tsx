import type { ReactElement } from "react";
import AppCard from "../AppCard/AppCard";

interface DashboardCardProps {
  content: ReactElement;
}

export default function DashboardCard({ content }: DashboardCardProps) {
  return <AppCard className="w-fit min-w-[164px]" content={content} />;
}
