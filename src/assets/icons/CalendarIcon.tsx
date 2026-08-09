import type { SVGProps } from "react";

export default function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#94A3B8" strokeWidth="1.2" />
      <path d="M2 6.5H14" stroke="#94A3B8" strokeWidth="1.2" />
      <path d="M5 2V4" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 2V4" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
