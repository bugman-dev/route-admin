import { useState } from "react";
import appColors from "@ra/assets/colors/appColors";

interface ButtonPrimaryProps {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
}

export default function ButtonPrimary({ icon, label, onClick }: ButtonPrimaryProps) {
  const [hovered, setHovered] = useState(false);
  const backgroundColor = hovered ? appColors.buttonHover : appColors.primary;

  return (
    <button
      type="button"
      className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg px-3 py-2 text-sm text-white"
      style={{
        backgroundColor,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: backgroundColor,
        transition: "background-color 200ms ease, border-color 200ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {label}
    </button>
  );
}
