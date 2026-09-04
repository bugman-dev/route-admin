interface RoutingNodesIconProps {
  color?: string;
}

export default function RoutingNodesIcon({ color = "#000000" }: RoutingNodesIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="4"
        cy="4"
        r="1.5"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="4"
        r="1.5"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="12"
        r="1.5"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.3335 4.66663L10.6668 4.66663"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.6665 5.33337L7.33317 10.6667"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3335 5.33337L8.66683 10.6667"
        stroke={color}
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
