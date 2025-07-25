import Heading from "@/components/Heading";
import CategorySwiper from "@/components/category/CategorySwiper";
import { useState, useEffect } from "react";
import { ActivitySwiperphases } from "@/constants/ActivitySwiperItems";
// import { activityphase } from "@/constants/ActivityWeekItems";
import { useNavigate } from "react-router-dom";
import BookCard from "@/components/category/BookCard";
// import Carousel2 from "@/components/Carousel2";
import Carousel from "@/components/Carousel";
import { moreActivityphase } from "@/constants/MoreActivityItems";
import Filter from "@/components/Filter";
import PageLoader from "@/components/PageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function Activites() {
  const [activePhase, setActivePhase] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % ActivitySwiperphases.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const [visibleCards, setVisibleCards] = useState(6);
  const [isMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     setVisibleCards(screenWidth >= 640 ? 10 : 6); // 10 for larger screens, 6 for smaller
  //   };

  //   handleResize(); // Set initial value based on current screen size
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1800) {
      setVisibleCards(10);
    } else if (window.innerWidth >= 1450 && window.innerWidth < 1800) {
      setVisibleCards(8);
    } else if (window.innerWidth >= 400 && window.innerWidth < 1450) {
      setVisibleCards(6);
    } else {
      setVisibleCards(5);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true); // Set loading state to true

    setTimeout(() => {
      setVisibleCards((prev) => {
        if (window.innerWidth >= 1800) {
          return prev + 5;
        } else if (window.innerWidth >= 1280) {
          return prev + 4;
        } else if (window.innerWidth >= 1024) {
          return prev + 3;
        } else {
          return prev + 2;
        }
      });

      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-out"
    });
  }, []);
  const data = moreActivityphase
    .filter((bookData) => bookData.activity === "week") // Filter the data based on activity being "more"
    .map((bookData, index) => (
      <div key={index}>
        <BookCard
          lineClamp="line-clamp-5"
          minHeight="5rem"
          BookData={bookData}
          onClick={() => navigate(`/actclick/${bookData.Id}`)}
        />
      </div>
    ));

  return (
    <div>
      {loading && <PageLoader />}
      <Heading
        text1="Unveil the adventurous experience"
        text2="with Us."
        textM1="Unveil the adventurous experience"
        textM2="with Us."
        textMFontStyle="font-productsansregular"
      />
      <div>
        {/* card swiper */}
        <div className="relative">
          <CategorySwiper
            isActivityPage={true}
            text={ActivitySwiperphases[activePhase].text}
            image={ActivitySwiperphases[activePhase].image}
            imageMobile={ActivitySwiperphases[activePhase].imageMobile}
            rounded="rounded-[10px]"
          />

          <div className="absolute bottom-[20px] md:bottom-[75px] flex space-x-[4.05px] sm:space-x-[8px] justify-center items-center w-full">
            {ActivitySwiperphases.map((_, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl ${
                  activePhase === index
                    ? "w-[15px] h-[7px] md:w-[21px] md:h-[10px]"
                    : "w-[7px] h-[7px] md:w-[10px] md:h-[10px]"
                } cursor-pointer`}
                onClick={() => setActivePhase(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full lg:px-[42px] pt-[28px] md:pt-[40px] gap-y-[20px] md:gap-y-[40px]">
          <h1 className="flex text-16 lg:text-24 font-productsans">
            Featured Activities of the Week
          </h1>

          {/* carosal for week activities */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className="relative flex xs500:hidden items-center flex-col justify-center">
              <Carousel components={data} slidesToShow={1} bgColor="black" />
            </div>
            <div className="hidden xs500:flex sm:hidden relative items-center flex-col justify-center">
              <Carousel components={data} slidesToShow={1.6} bgColor="black" />
            </div>
            <div className="hidden sm:flex md:hidden ">
              <Carousel components={data} slidesToShow={2.4} bgColor="black" />
            </div>
            <div className="hidden md:flex lg:hidden ">
              <Carousel components={data} slidesToShow={3} bgColor="black" />
            </div>
            <div className="hidden lg:flex xl:hidden ">
              <Carousel components={data} slidesToShow={3.5} bgColor="black" />
            </div>
            <div className="hidden xl:flex xl-1800:hidden ">
              <Carousel components={data} slidesToShow={4} bgColor="black" />
            </div>
            <div className="hidden xl-1800:flex items-center justify-center">
              <Carousel components={data} slidesToShow={5} bgColor="black" />
            </div>
          </div>
        </div>

        {/* more Activities */}
        <div className="flex flex-col w-full md:px-[42px] pt-[28px] md:pt-[40px] gap-y-[20px] md:gap-y-[40px]">
          <h1 className="flex text-16 lg:text-24 font-productsans">
            Explore More Activities
          </h1>

          {/* Filter*/}
          <Filter />

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className={`z-100 grid gap-[28px] md:gap-[49px] grid-cols-1 xs-500:grid-cols-2 lg-1000:grid-cols-3 xl-1450:grid-cols-4 xl-1800:grid-cols-5 justify-items-center lg:justify-items-start ${
              isMenuOpen ? "blur-md pointer-events-none" : ""
            }`}
          >
            {moreActivityphase.slice(0, visibleCards).map((bookData, index) => (
              <div key={index}>
                <BookCard
                  BookData={bookData}
                  onClick={() => navigate(`/actclick/${bookData.Id}`)}
                />
              </div>
            ))}
          </div>
          {/* Loader for mobile screen */}
          {visibleCards < moreActivityphase.length && (
            <div className="flex justify-center mt-4 ">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-900"></div>
                </div>
              ) : (
                <button
                  onClick={handleLoadMore}
                  className="px-[55px] py-[10px] border border-black text-black font-bold text-[14px] transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Activites;
