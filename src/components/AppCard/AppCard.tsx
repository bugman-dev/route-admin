import { twMerge } from "tailwind-merge";
import appColors from "@ra/assets/colors/appColors";
import type { AppCardProps } from "@ra/interfaces/appCard";

export default function AppCard({ content, className, style }: AppCardProps) {
  return (
    <div
      className={twMerge("rounded-[11px] border bg-white p-4", className)}
      style={{ borderColor: appColors.mainBorder, ...style }}
    >
      {content}
    </div>
  );
}
