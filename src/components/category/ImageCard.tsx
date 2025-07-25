import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BookCard1 } from "@/types/BookCardTypes";

interface ImageCardProps {
  BookData: BookCard1;
  onClick?: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ BookData, onClick }) => {
  const { Id, image, title, description, location, number1, number2 } =
    BookData;

  return (
    <div
      id={Id}
      onClick={onClick}
      className="h-full cursor-pointer flex flex-col gap-[12px] sm:gap-[16px] w-full 2xl:w-[288px] font-productsansregular group"
    >
      <div className="relative">
        {/* Image */}
        <img
          src={image}
          alt="Category Swiper"
          className="w-full h-[162px] lg:min-h-[274px] 2xl:h-[274px]  sm:h-auto object-cover flex"
        />
        {/* Shimmering light ray effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transform rotate-45 translate-x-full group-hover:opacity-100 group-hover:translate-x-[-100%] transition-transform duration-1000 ease-in-out"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] h-full group-hover">
        <div className="flex flex-col gap-[8px] md:gap-[12px]">
          <h1 className="text-14 font-productsans">{title}</h1>
          {/* Description with a fixed height */}
          <h1
            className="text-[10px] md:text-12 line-clamp-3"
            style={{
              minHeight: "3.2em", // Reserves space for 3 lines
              lineHeight: "1.15em", // Line height for consistent spacing
              overflow: "hidden"
            }}
          >
            {description}
          </h1>
        </div>

        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row items-center gap-[4px]">
            <IoLocationOutline size={13} />
            <h1 className="text-10">{location}</h1>
          </div>
          <div className="flex flex-row gap-[3px] items-center">
            <FaStar className="text-[#1A3A6D]" />
            <h1 className="text-10">
              {number1} <span className="opacity-50">({number2})</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
