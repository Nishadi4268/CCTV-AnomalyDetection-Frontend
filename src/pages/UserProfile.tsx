import Filter from "@/components/Filter";
import user1 from "/images/userprofile/user1.png";
import { useNavigate } from "react-router-dom";
import ReviewCard from "@/components/user-profile/ReviewCard";
import { phasesUser } from "@/constants/UserProfileItems";
import { useState } from "react";
import ReviewPopup from "@/components/user-profile/ReviewPopup";
import EditProfile from "@/components/user-profile/EditProfile";
// import EditProfile from "@/pages/UserProfile/EditProfile.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

function UserProfile() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setIsDialogOpen(false);
  };
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(true); // open the EditProfile popup
  };
  return (
    <div>
      {/* user details */}
      <div>
        {/* welcome */}
        <div className="md:gap-[10px] flex flex-col mb-[30px]">
          <h1 className="font-productsans text-16 md:text-24 ">Welcome, Ema</h1>
          <h1 className="font-helvet text-[#B0B0B0] text-14 md:text-16">
            Tue, 07 Feb 2025
          </h1>
          <div className="mt-[12px] lg:mt-[30px] border-[1px] md:border-[2px] border-[#F3F3F3]"></div>
        </div>

        {/* user image */}
        <div className="flex flex-col sm:flex-row justify-between gap-[20px]">
          <div className="flex flex-row gap-[13px] lg:gap-[23px]">
            <img src={user1} className="w-[50px] lg:w-[100px]" />
            <div className="font-helvet flex flex-col items-start justify-center">
              <h1>Ema Rawles</h1>
              <h1 className="text-10 lg:text-14 text-black opacity-50">
                emarawles@gmail.com
              </h1>
            </div>
          </div>
          <div className="gap-[10px] sm:gap-[20px] flex flex-col sm:flex-row items-center">
            <button
              className="text-14 lg:text-16 text-white bg-black w-full sm:w-[211px] h-[38px] sm:h-[47px]"
              onClick={() => navigate("/signup")}
            >
              CHANGE PASSWORD
            </button>
            <button
              className="text-14 lg:text-16 text-white bg-black w-full sm:w-[134px] h-[38px] sm:h-[47px]"
              onClick={handleEditClick}
            >
              EDIT
            </button>
            {isEditOpen && (
              <EditProfile
                open={isEditOpen}
                onClose={() => setIsEditOpen(false)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-[40px] lg:mt-[100px] flex flex-col gap-[40px]">
        <h1 className="font-productsans text-16 md:text-24 ">
          Explore Booking History
        </h1>
        <Filter />
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mt-[18px] lg:mt-[60px] grid gap-[28px] md:gap-[40px] grid-cols-1 md-610:grid-cols-2 lg-1000:grid-cols-3 xl-1500:grid-cols-4 xl-1800:grid-cols-5 w-full"
      >
        {phasesUser.slice().map((bookData, index) => (
          <div key={index}>
            <ReviewCard
              BookData={{ ...bookData, Id: bookData.Id?.toString() ?? "" }}
              onClick={() => navigate(`/review/${bookData.Id}`)}
            />
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <>
          {phasesUser.map((bookData, index) => (
            <div key={index}>
              <ReviewPopup
                onClose={handleClosePopup}
                onClick={() => navigate(`/review/${bookData.Id}`)}
              />
            </div>
          ))}
        </>
      )}
      <Pagination className="w-full items-end justify-end mt-[60px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="text-gray-400"
              href="#"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            />
          </PaginationItem>
          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="text-gray-400"
              href="#"
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default UserProfile;
