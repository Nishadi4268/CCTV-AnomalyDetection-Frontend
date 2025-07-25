import React, { useState, useRef } from "react";
import { LuClock9, LuPencilLine } from "react-icons/lu";
import { useClickAway } from "react-use";

interface CustomTimePickerProps {
  values: string[];
  selectedTime: string;
  onChange: (value: string) => void;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({ values, selectedTime, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickAway(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="flex items-center w-full px-5 py-4 border border-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LuClock9 className="mr-2 text-gray-500 h-[16px]" />
        <span className="w-full text-black font-normal text-[14px] leading-[100%] tracking-[0%]">
          {selectedTime || "Select Time"}
        </span>
        <LuPencilLine className="text-gray-500 cursor-pointer" />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 overflow-hidden bg-white border border-black rounded-md shadow-lg">
          {values.map((time, index) => (
            <div
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selectedTime === time ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                onChange(time);
                setIsOpen(false);
              }}
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;
