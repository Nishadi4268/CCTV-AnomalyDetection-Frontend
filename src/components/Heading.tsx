import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

interface HeadingProps {
  text1: string;
  text2: string;
  textM1?: string;
  textM2?: string;
  textMFontStyle?: string; 
  textMClassName?: string;
  padding?:string;
}

function Heading({ text1, text2, textM1, textM2,textMClassName, padding='px-9' , textMFontStyle="font-productsans" }: HeadingProps) {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("Please enter a search term!");
      return;
    }
    console.log("Searching for:", searchQuery);

  };
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-end font-productsansregular w-full gap-[22px] pb-[28px] md:pb-[55px]">
      <div className="flex flex-col text-12 md:text-[14px] lg:text-16">
        {/* Desktop View */}
        <span className="hidden md:flex flex-col text-nowrap font-productsans">
          {text1} <br />
          {text2}
        </span>
        {/* Mobile View */}
        <span
          className={`flex w-full items-center ${textMClassName} justify-center md:hidden text-12 text-center  ${padding} ${textMFontStyle}`}
        >
          {textM1} <br />
          {textM2}
        </span>
      </div>
      <div className="flex items-center md:items-end w-full justify-center md:justify-end">
        <div className="flex w-[281px] md:w-[264px] justify-between items-center space-x-[10px] md:pb-1 xl:pb-0 border-b border-black h-[24px] xl:h-[40px]">
          <input
            placeholder="Search"
            title="Search"
            className="placeholder-black text-12 md:text-14 focus:outline-none items-center"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch} className="flex">
            <IoSearchOutline className="cursor-pointer w-[16px] lg:w-[24px] h-[16px] lg:h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Heading;
