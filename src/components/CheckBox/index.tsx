import appColors from "@ra/assets/colors/appColors";
import CheckboxTick from "../CheckboxTick";

interface CheckBoxProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export default function CheckBox({ checked = false, onChange, label }: CheckBoxProps) {
  return (
    <div
      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 w-fit"
      style={{ border: `1px solid ${appColors.mainBorder}` }}
    >
      <CheckboxTick checked={checked} onChange={onChange} />
      <p className="text-sm">{label}</p>
    </div>
  );
}
