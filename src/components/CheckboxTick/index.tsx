import appColors from "@ra/assets/colors/appColors";
import { useState } from "react";

const checkedIcon = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23FFFFFF' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.5 8.5 6.5 11.5 12.5 4.5'/%3E%3C/svg%3E")`;

interface CheckboxTickProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

export default function CheckboxTick({ checked, onChange }: CheckboxTickProps) {
    const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="m-0 cursor-pointer appearance-none rounded-[3px] border border-solid border-[var(--checkbox-border)] bg-white bg-center bg-no-repeat checked:border-[var(--checkbox-checked)] checked:bg-[image:var(--checkbox-icon)] checked:bg-[length:12px_12px] checked:bg-[var(--checkbox-checked)]"
        style={{
          width: 16,
          height: 16,
          ["--checkbox-border" as string]: appColors.mainBorder,
          ["--checkbox-checked" as string]: appColors.primary,
          ["--checkbox-icon" as string]: checkedIcon,
        }}
        onChange={handleChange}
        checked={isChecked}
      />
    </div>
  );
}
