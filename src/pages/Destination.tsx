import Heading from "@/components/Heading";
import firstimg from "/images/destination/firstimg.png";
import im2 from "/images/destination/im2.png";
import sigiri from "/images/home/sigiri.png";
import sigirimob from "/images/culture/sigirimob.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Section from "@/components/culture/section";
import { Imagephases } from "@/constants/Desti_packItmes";
import BookCard from "@/components/category/BookCard";
import { useNavigate } from "react-router-dom";
// import Carousel2 from "@/components/Carousel2";
import Carousel from "@/components/Carousel";
import Filter from "@/components/Filter";
import { useEffect, useState } from "react";
import { sections } from "@/constants/Desti_Sections";
import { Link } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function Destination() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCards(9);
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
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setVisibleCards(screenWidth >= 640 ? 3 : 4); // 10 for larger screens, 6 for smaller
    };

    handleResize(); // Set initial value based on current screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + (window.innerWidth >= 1024 ? 10 : 5));
      setIsLoading(false);
    }, 1000);
  };
  const [isMenuOpen] = useState(false);
  const bookdata = Imagephases.map((bookData, index) => (
    <div key={index}>
      <BookCard
        lineClamp="line-clamp-5"
        minHeight="5rem"
        BookData={bookData}
        onClick={() => navigate(`/desticlick/${bookData.Id}`)}
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
  const navigate = useNavigate();
  return (
    <div>
      {loading && <PageLoader />}
      <Heading
        text1="Discover Sri Lanka's"
        text2="Most Iconic and Enchanting Destinations"
        textM1="Discover Sri Lanka's 
Most Iconic and Enchanting Destinations"
      />

      <div className="space-y-[20px] lg:space-y-[40px]">
        <div className="flex flex-col gap-y-[20px] lg:gap-y-0 lg:space-y-[40px] w-full items-center">
          <img src={firstimg} className="hidden lg:flex w-full" />
          <img src={im2} className="flex lg:hidden w-full" />
        </div>
        {/* loku div */}
        <div className="lg:px-[42px] flex flex-col space-y-[28px]  lg:space-y-[40px] items-center">
          <span className="font-productsans text-[16px] lg:text-[24px] items-start flex w-full">
            Top Destination of the Week
          </span>
          {/* offer packages */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-full "
          >
            <div className="relative hidden xl-1800:flex items-center w-full ">
              <Carousel
                components={bookdata}
                slidesToShow={5}
                bgColor="black"
              />
            </div>
            <div className="relative hidden xl:flex xl-1800:hidden items-center w-full ">
              <Carousel
                components={bookdata}
                slidesToShow={4}
                bgColor="black"
              />
            </div>
            <div className="relative hidden lg:flex xl:hidden items-center w-full ">
              <Carousel
                components={bookdata}
                slidesToShow={3.5}
                bgColor="black"
              />
            </div>
            <div className="relative hidden md:flex lg:hidden w-full  ">
              <Carousel
                components={bookdata}
                slidesToShow={3}
                bgColor="black"
              />
            </div>

            <div className="relative hidden sm:flex md:hidden w-full ">
              <Carousel
                components={bookdata}
                slidesToShow={2.4}
                bgColor="black"
              />
            </div>
            <div className="hidden xs500:flex sm:hidden relative items-center flex-col justify-center">
              <Carousel
                components={bookdata}
                slidesToShow={1.6}
                bgColor="black"
              />
            </div>
            <div className="relative flex xs500:hidden items-center flex-col justify-center">
              <Carousel
                components={bookdata}
                slidesToShow={1}
                bgColor="black"
              />
            </div>
          </div>

          {/* Filter web*/}
          <div className="flex flex-col justify-between w-full">
            <Filter />
          </div>
          {/* 3rows */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className={`space-y-[29px] lg:space-y-[32px] flex flex-col ${
              isMenuOpen ? "blur-md pointer-events-none" : ""
            }`}
          >
            {/* 1st */}
            {sections.slice(0, visibleCards).map((sectiondata, index) => (
              <Section
                key={index}
                title={sectiondata.title}
                content={sectiondata.content}
                firstimage={sectiondata.firstimage}
                img1={sectiondata.img1}
                img2={sectiondata.img2}
                img3={sectiondata.img3}
                img4={sectiondata.img4}
                img5={sectiondata.img5}
              />
            ))}
          </div>

          {visibleCards < sections.length && (
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

          {/* sigiriya */}
          <div className="flex flex-col  lg:space-y-0 lg:flex-row w-full gap-y-[16px] lg:gap-y-0">
            <img src={sigiri} className="hidden lg:flex w-[70%] " />
            <img src={sigirimob} className=" flex lg:hidden w-full " />
            <div className=" justify-center space-y-[20px] lg:w-[30%] 2xl:w-full items-center lg:items-start lg:px-[56px] lg:py-[115px] flex flex-col lg:space-y-4">
              <span className="font-productsans lg:w-[220px] xl:w-[300px] xl-1800:w-[336px] text-center lg:text-start text-[16px] lg:text-[24px] leading-[20px] lg:leading-[32px]">
                Your adventure is just a click away! Secure your spot and start
                exploring the wonders.
              </span>
              <Link to="/destination">
                <button className="flex items-center btn-4 hover:text-black space-x-3 w-[158px] md:w-[171px] h-[28px] md:h-[40px] justify-center  font-productsans  text-white">
                  <span className="lg:text-[14px] text-[12px] cursor-pointer">
                    {" "}
                    Explore
                  </span>
                  <HiOutlineArrowNarrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* sigiri old */}
        {/* <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="flex flex-col space-y-[16px] lg:space-y-0 lg:flex-row "
        >
          <img src={sigiri} className="hidden lg:flex w-[70%] " />
          <img src={sigirimob} className=" flex lg:hidden " />
          <div className=" justify-center space-y-[20px] lg:w-[50%] items-center lg:items-start lg:pl-[56px] lg:pr-[88px] lg:py-[115px] flex flex-col lg:space-y-4">
            <span className="font-productsans text-center lg:text-start text-[16px] lg:text-xl leading-[20px] lg:leading-[32px]">
              Your adventure is just a click away! Secure your spot and start
              exploring the wonders.
            </span>
            <Link to="/destination">
              <button className="flex items-center btn-4 hover:text-black space-x-3 w-[171px] h-[40px] justify-center font-productsans  text-white ">
                {" "}
                <span className="lg:text-[14px] text-[12px]"> Explore</span>
                <HiOutlineArrowNarrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Destination;
