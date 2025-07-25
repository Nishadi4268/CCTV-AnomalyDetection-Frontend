interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomRadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  selectedValue,
  onChange
}) => {
  return (
    <div className="flex flex-row gap-[13px]">
      <label className="relative flex items-center cursor-pointer" htmlFor={id}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="peer w-[25px] h-[25px] cursor-pointer appearance-none rounded-full border-[3px] border-[#1A3A6D] checked:border-[#1A3A6D] transition-all"
          onChange={(e) => onChange(e.target.value)}
          checked={selectedValue === value}
        />
        <span className="absolute bg-[#1A3A6D] w-[15px] h-[15px] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label
        htmlFor={id}
        className="text-base leading-[22px] text-black cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
