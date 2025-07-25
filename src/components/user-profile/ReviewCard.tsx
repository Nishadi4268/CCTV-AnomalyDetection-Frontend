import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import Book_Button from "../Book_Button";
import { BookCard1 } from "@/types/BookCardTypes";

interface ReviewCardProps {
  BookData: BookCard1;
  onClick?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ BookData, onClick }) => {
  const { Id, imageuser, place, date, time, bookingNO, status } = BookData;
  return (
    <div
      id={Id}
      onClick={onClick}
      // className="w-full xs550:w-[255px] md:w-[313px] gap-[20px] flex flex-col"
      className="w-full xs550:w-auto  gap-[20px] flex flex-col"
    >
      <img src={imageuser} className="h-[170px] md:h-[152px]" />
      <div className="flex flex-col gap-[12px]">
        <h1 className="text-16 font-productsans">{place}</h1>
        <div className="flex flex-row justify-between w-full ">
          {/* date, time */}
          <div className="h-[29px] w-[135px] flex flex-col gap-[8px]">
            {/* date */}
            <div className="flex flex-row gap-[4px]">
              <FaRegCalendarAlt className="w-[12px]" />
              <h1 className="text-12 font-productsansregular">{date}</h1>
            </div>
            {/* time */}
            <div className="flex flex-row  gap-[8px]">
              <HiOutlineClock className="w-[9px]" />
              <h1 className="text-12 font-productsansregular">{time}</h1>
            </div>
          </div>

          {/* status, book no */}
          <div className="text-12 font-productsansregular flex flex-col gap-[8px]">
            <h1>
              Booking Number: <span> {bookingNO}</span>
            </h1>
            <h1>
              Status: <span>{status}</span>{" "}
            </h1>
          </div>
        </div>
        <Book_Button
          text="Review"
          textColor="text-white hover:text-black"
          width="w-full text-14"
          height="h-[40px]"
          btn4="btn-review"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
