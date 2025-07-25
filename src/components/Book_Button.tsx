interface BookButtonProps {
  textColor?: string;
  width?: string;
  height?: string;
  text?: string;
  onClick?: () => void;
  showGradient?: boolean; // New prop to control the gradient
  btn4?: string;
}

function Book_Button({
  textColor = "text-black",
  width = "w-[97px]",
  height = "h-[28px]",
  text = "Book Now",
  onClick,
  btn4
}: BookButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`z-0 font-productsans cursor-pointer text-12 ${textColor} ${width} ${height} 
      text-nowrap items-center flex text-center justify-center rounded-lg relative overflow-hidden 
      group border-2 border-[#1A3A6D] ${btn4} `}
    >
      <span className="relative">{text}</span>
    </div>
  );
}

export default Book_Button;
