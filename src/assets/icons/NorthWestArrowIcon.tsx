export default function NorthWestArrowIcon({
  color = "white",
  style,
}: {
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color, ...style }}
    >
      <path
        d="M3.7915 3.79163H9.20817V9.20829"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.7915 9.20829L9.20817 3.79163"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
