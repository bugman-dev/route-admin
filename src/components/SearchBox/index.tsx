import appColors from "@ra/assets/colors/appColors";
import SearchIcon from "@ra/assets/icons/SearchIcon";
import CrossIconBase from "@ra/assets/icons/CrossIconBase";
import { useState } from "react";

interface SearchBoxProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ placeholder, onChange }: SearchBoxProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChange(e);
  };

  const handleClear = () => {
    if (searchValue.length > 0) {
      setSearchValue("");
      onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 w-fit min-w-[300px]"
      style={{ border: `1px solid ${appColors.mainBorder}` }}
    >
      <SearchIcon color={appColors.textGrey} size={16} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none ml-1 text-sm"
        onChange={handleChange}
        value={searchValue}
      />
      <button type="button" className="p-1 cursor-pointer" onClick={handleClear}>
        <CrossIconBase color={appColors.textGrey} size={16} />
      </button>
    </div>
  );
}
