import appColors from "@ra/assets/colors/appColors";
import { useState } from "react";

const TRACK_WIDTH = 41;
const THUMB_SIZE = 22;
const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE;

export default function ToggleButton({
  isActive,
  isDisabled = false,
  onToggle,
}: {
  isActive: boolean;
  onToggle: (isActive: boolean) => void;
  isDisabled?: boolean;
}) {
  const [isActiveState, setIsActiveState] = useState(isActive);

  const handleToggle = () => {
    if (isDisabled) return;
    const next = !isActiveState;
    setIsActiveState(next);
    onToggle(next);
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      className="w-fit min-w-[40px] rounded-full px-1 py-1 text-center text-sm"
      style={{
        backgroundColor: isActiveState ? appColors.primary : appColors.chipBackground,
        color: appColors.textWhite,
        transition: "background-color 200ms ease-in-out",
      }}
      onClick={handleToggle}
    >
      <div className="relative" style={{ width: TRACK_WIDTH, height: THUMB_SIZE }}>
        <div
          className="absolute top-0 left-0 aspect-square h-full shrink-0 rounded-full transition-transform duration-200 ease-in-out"
          style={{
            backgroundColor: appColors.textWhite,
            transform: `translateX(${isActiveState ? THUMB_TRAVEL : 0}px)`,
          }}
        />
      </div>
    </button>
  );
}
