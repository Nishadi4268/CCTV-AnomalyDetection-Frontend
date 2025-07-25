import { LuUserRound } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import Book_Button from "../Book_Button";
import { BookCard1 } from "@/types/BookCardTypes";

interface PackageCardProps {
  BookData: BookCard1;
  onClick?: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ BookData, onClick }) => {
  const {
    Id,
    image,
    title,
    highlights,
    value,
    number1,
    number2,
    listhighlights = []
    // onClick
  } = BookData;

  return (
    <div>
      <div
        id={Id}
        onClick={onClick}
        className="h-full cursor-pointer flex flex-col gap-[12px] w-full hover-effect md-850:w-[250px] 2xl:w-[288px]"
      >
        <img
          src={image}
          alt="Category Swiper"
          className="w-full h-[162px] lg:min-h-[274px] sm:h-auto object-cover flex"
        />
        <div className="flex flex-col gap-[10px] h-full ">
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
            <h1 className="text-12 font-productsans">{highlights}</h1>
            <div className="pl-2 text-12 font-productsansregular text-nowrap">
              {listhighlights.map((item, index) => (
                <li key={index} className="-mb-1">
                  {item}
                </li>
              ))}
            </div>
          </div>

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
    </div>
  );
};

export default PackageCard;
