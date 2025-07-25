import React from "react";
import { LuUserRound, LuPencilLine } from "react-icons/lu";

interface CustomInputProps {
  type?: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative flex items-center w-full px-5 py-4 border border-black">
      <LuUserRound className="mr-2 text-gray-500" />
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="focus:outline-none text-[14px] w-full"
      />
      <LuPencilLine className="absolute text-gray-500 cursor-pointer right-5" />
    </div>
  );
};

export default CustomInput;