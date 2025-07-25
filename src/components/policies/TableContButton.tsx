import { GoArrowUpRight } from "react-icons/go";

interface BookButtonProps {
  text?: string;
  onClick?: () => void;
  isActive?: boolean;
}

function TableContButton({
  text = "Book Now",
  isActive = false,
  onClick
}: BookButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`font-productsans hover:opacity-90 ${
        isActive ? "bg-[#1A3A6D]" : "bg-white"
      } text-14 border-2 border-[#1A3A6D] cursor-pointer text-black w-[345px] sm:w-[370px] md:w-full 2xl:max-w-[450px] 2xl:w-[450px] h-[38px] px-[30px] md:px-[15px] sm:px-[52px] py-[9px] text-nowrap items-center flex text-center justify-center`}
    >
      <div className="w-full lg:w-[347px] flex flex-row items-center justify-between">
        <h1>{text}</h1>
        <GoArrowUpRight className="w-[14px] h-[14px] text-black" />
      </div>
    </div>
  );
}

export default TableContButton;
