import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

interface IncreseDecButtonProps {
  onValueChange: (newValue: number) => void;
}

const IncreseDecButton: React.FC<IncreseDecButtonProps> = ({
  onValueChange
}) => {
  // State to store the current value
  const [value, setValue] = useState(0);

  // Handle the increase action
  const handleIncrease = () => {
    const newValue = value + 1;
    setValue(newValue);
    onValueChange(newValue);
  };

  // Handle the decrease action
  const handleDecrease = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      onValueChange(newValue);
    }
  };

  return (
    <div className="flex items-center gap-[7px]">
      {/* Decrease Button */}
      <button
        className="w-[20px] h-[20px] text-center flex items-center justify-center border border-black rounded-md"
        onClick={handleDecrease}
      >
        <FaMinus className="w-[4px] h-[11px]"/>
      </button>

      {/* Display the value */}
      <span className="text-12 text-center flex items-center justify-center w-[20px] h-[20px] text-white border border-black bg-black">
        {value}
      </span>

      {/* Increase Button */}
      <button
        className="w-[20px] h-[20px]  text-center flex items-center justify-center border border-black rounded-md"
        onClick={handleIncrease}
      >
        <FaPlus className="w-[7px] h-[24px]"/>
      </button>
    </div>
  );
};

export default IncreseDecButton;
