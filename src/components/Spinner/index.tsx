import appColors from "@ra/assets/colors/appColors";

interface SpinnerProps {
  size?: number;
}

export const Spinner = ({ size = 40 }: SpinnerProps) => {
  const borderWidth = Math.max(2, Math.round(size / 8));

  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-solid"
        style={{
          width: size,
          height: size,
          borderWidth,
          borderColor: appColors.primary,
          borderTopColor: "transparent",
        }}
      />
    </div>
  );
};
