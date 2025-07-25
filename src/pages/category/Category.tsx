import { useState, useEffect } from "react";
import CategorySwiper from "@/components/category/CategorySwiper";
import Heading from "@/components/Heading";
import Filter from "@/components/Filter";
import ImageCard from "@/components/category/ImageCard";
import { phases } from "@/constants/homeSwiperItems";
import { Imagephases } from "@/constants/categoryCardItems";
import { useNavigate } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function Category() {
  const [activePhase, setActivePhase] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const [visibleCards, setVisibleCards] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true); // Set loading state to true

    setTimeout(() => {
      setVisibleCards((prev) => {
        if (window.innerWidth >= 1800) {
          return prev + 5;
        } else if (window.innerWidth >= 1280) {
          return prev + 4;
        } else if (window.innerWidth >= 710) {
          return prev + 3;
        } else {
          return prev + 2;
        }
      });

      setIsLoading(false);
    }, 1000);
  };

  // const updateVisibleCards = () => {
  //   if (window.innerWidth >= 1024) {
  //     setVisibleCards(15);
  //   } else {
  //     setVisibleCards(5);
  //   }
  // };

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1800) {
      setVisibleCards(10);
    } else if (window.innerWidth >= 1280 && window.innerWidth < 1800) {
      setVisibleCards(8);
    } else if (window.innerWidth >= 400 && window.innerWidth < 1280) {
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-out"
    });
  }, []);

  return (
    <div>
      {loading && <PageLoader />}
      <Heading
        text1="Discover Sri Lanka"
        text2="in Your Way Adventure, Culture and More"
        textM1="Discover Sri Lanka in Your Way "
        textM2="Adventure, Culture and More"
      />

      {/* card swiper */}
      <div className="relative">
        <CategorySwiper
          text={phases[activePhase].text}
          image={phases[activePhase].image}
          imageMobile={phases[activePhase].imageMobile}
          isCategoryPage={true}
          rounded="rounded-[10px]"
        />

        <div className="absolute bottom-[20px] md:bottom-[75px] flex space-x-[4.05px] sm:space-x-[8px] justify-center items-center w-full">
          {phases.map((_, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl ${
                activePhase === index
                  ? "w-[10px] md:w-[21px] h-[5px] md:h-[10px]"
                  : "w-[5px] md:w-[10px] h-[5px] md:h-[10px]"
              } cursor-pointer`}
              onClick={() => setActivePhase(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full md:px-[42px] pt-[28px] md:pt-[80px] gap-y-[28px] md:gap-y-[32px]">
        {/* Filter web*/}
        <Filter />

        {/* image card */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className={`grid gap-[28px] sm:gap-[49px] grid-cols-1 xs-500:grid-cols-2 md-710:grid-cols-3 xl:grid-cols-4 xl-1800:grid-cols-5 w-full  ${
            isMenuOpen ? "blur-md pointer-events-none" : ""
          }`}
        >
          {Imagephases.slice(0, visibleCards).map((bookData, index) => (
            <div key={index}>
              <ImageCard
                BookData={bookData}
                onClick={() => navigate(`/cateclick/${bookData.Id}`)}
              />
            </div>
          ))}
        </div>

        {/* Loader for mobile screen */}
        {visibleCards < Imagephases.length && (
          <div className="flex justify-center mt-4">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-900"></div>
              </div>
            ) : (
              <button
                onClick={handleLoadMore}
                className="w-[142px] md:w-[171px] h-[28px] md:h-[38px] border border-black text-black font-productsans text-14 transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
