import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Book_Button from "../Book_Button";
import { BookCard1 } from "@/types/BookCardTypes";
import { LuUserRound } from "react-icons/lu";
import { useLocation } from "react-router-dom";

interface BookCardProps {
  BookData: BookCard1;
  onClick?: () => void;
  lineClamp?: string;
  minHeight?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  BookData,
  onClick,
  lineClamp = "line-clamp-4",
  minHeight = "4rem"
}) => {
  const {
    Id,
    image,
    title,
    description,
    value,
    number1,
    number2,
    listhighlights = [],
    location
  } = BookData;
  const { pathname } = useLocation();

  return (
    <div
      id={Id}
      onClick={onClick}
      className="h-full cursor-pointer flex flex-col gap-[12px] w-full"
    >
      <img
        src={image}
        alt="Category Swiper"
        className="w-full 2xl:w-[288px] h-[162px] lg:min-h-[274px] sm:h-auto object-cover flex"
      />
      <div className="flex flex-col gap-[10px] h-full w-full 2xl:w-[288px] ">
        <div className="flex flex-row justify-between">
          <h1 className="text-14 font-productsans">{title}</h1>
          <div className="flex flex-row font-productsansregular gap-[3px] items-center">
            <FaStar className="text-[#1A3A6D]" />
            <h1 className="text-10">
              {number1} <span className="opacity-50">({number2})</span>
            </h1>
          </div>
        </div>
        <div>
          {/* Description with space for 4 lines */}
          <h1
            className={`mt-[6px] text-12 font-productsansregular ${lineClamp}`}
            style={{
              minHeight: minHeight, // Dynamic minHeight
              lineHeight: "1rem", // Matches the line spacing for each line
              overflow: "hidden"
            }}
          >
            {description}
          </h1>
          <div className="pl-2 text-12 font-productsansregular text-nowrap">
            {listhighlights.map((item, index) => (
              <li key={index} className="-mb-1">
                {item}
              </li>
            ))}
          </div>
        </div>

        {/* Conditional Rendering for /activities Path */}
        {pathname === "/activities" && (
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <IoLocationOutline size={14} />
            <h1 className="font-productsansregular text-10 md:text-12">
              {location}
            </h1>
          </div>
        )}
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center gap-[11px]">
            <LuUserRound size={15} className=" " />
            <h1 className="text-14 font-productsans text-black mt-1">
              $ {value}
            </h1>
          </div>
          <Book_Button btn4="btn-4" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
