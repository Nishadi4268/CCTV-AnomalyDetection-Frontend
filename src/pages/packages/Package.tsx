import { useState, useEffect } from "react";
// import CategorySwiper from "@/components/category/CategorySwiper";
import Heading from "@/components/Heading";
import Filter from "@/components/Filter";
// import { packagephase } from "@/constants/offerPackagesItems";
// import { phases } from "@/constants/categorySwiperItems";
import { packagesitems } from "@/constants/packagesitems";
import Carousel from "@/components/Carousel";
import Packages1 from "@/components/home/packages_Home";
import { useNavigate } from "react-router-dom";
import { packagephase } from "@/constants/offerPackagesItems";
import PackageCard from "@/components/package/PackageCard";
import PageLoader from "@/components/PageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function Packages() {
  // const [activePhase, setActivePhase] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  // Function to handle window resize and update visible cards
  // const updateVisibleCards = () => {
  //   if (window.innerWidth >= 1024) {
  //     setVisibleCards(9);
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

  const data = packagesitems.map((packageData, index) => (
    <div key={index}>
      <Packages1
        // key={index}
        isPackagePage={true}
        imageSrc={packageData.imageSrc}
        offerSrc={packageData.offerSrc}
        title={packageData.title}
        locations={packageData.locations}
      />
    </div>
  ));

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
    <div className="font-productsansregular flex flex-col">
      {loading && <PageLoader />}
      <Heading
        text1="Discover the perfect blend of serene beaches and captivating heritage "
        text2="with our specially curated Sri Lanka travel packages."
        textM1="Discover the perfect blend of serene beaches and captivating heritage with our specially curated Sri Lanka travel packages."
        textMFontStyle="font-productsansregular"
        textMClassName="tracking-wide"
      />

      {/* gray box */}
      <div className=" rounded-[10px] flex flex-col md:p-[36px] lg:flex-row justify-between md:bg-[#D9D9D9] font-productsans gap-[16px] ">
        <div className="flex flex-col lg:hidden text-center justify-center items-center space-y-4">
          <span className="flex flex-col text-[20px] md:text-24">
            Discover Sri Lanka with our expertly crafted travel packages
          </span>
        </div>
        <div className="hidden xl-1900:flex w-[80%]">
          <Carousel components={data} slidesToShow={4.7} bgColor="black" />
        </div>
        <div className="hidden lg:flex xl-1900:hidden w-[80%]">
          <Carousel components={data} slidesToShow={4} bgColor="black" />
        </div>
        <div className="hidden md:flex lg:hidden w-full">
          <Carousel components={data} slidesToShow={3} bgColor="black" />
        </div>
        <div>
          <div className="hidden sm:flex md:hidden ">
            <Carousel components={data} slidesToShow={3} bgColor="black" />
          </div>
          <div className="hidden xs400:flex sm:hidden">
            <Carousel components={data} slidesToShow={2} bgColor="black" />
          </div>
          <div className="flex xs400:hidden ">
            <Carousel components={data} slidesToShow={1} bgColor="black" />
          </div>
        </div>
        <div className=" hidden lg:flex flex-col text-center justify-center items-center space-y-4">
          <span className="flex flex-col text-sm 2xl:text-[24px]">
            AI-Driven Surveillance: Accurate Anomaly Detection, Anytime,
            Anywhere{" "}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col w-full md:px-[42px] pt-[28px] md:pt-[80px] gap-y-[28px] md:gap-y-[32px]">
        <h1 className="hidden md:flex text-24">Packages we offer</h1>
        {/* Filter web*/}
        <Filter />

        {/* offer packages */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="grid gap-[28px] md:gap-[42px] grid-cols-1 xs-500:grid-cols-2 md-850:grid-cols-3 xl:grid-cols-4 xl-1800:grid-cols-5  w-full"
        >
          {packagephase.slice(0, visibleCards).map((bookData, index) => (
            <div key={index}>
              <PackageCard
                BookData={bookData}
                onClick={() => navigate(`/packclick/${bookData.Id}`)}
              />
            </div>
          ))}
        </div>

        {/* Loader for mobile screen */}
        {visibleCards < packagephase.length && (
          <div className="flex justify-center mt-4">
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
  );
}

export default Packages;
