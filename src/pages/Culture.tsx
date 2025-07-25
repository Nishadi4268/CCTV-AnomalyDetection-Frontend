import Heading from "@/components/Heading";
import im1 from "/images/culture/im1.png";
import im2 from "/images/culture/im2.png";
import sigiri from "/images/home/sigiri.png";
import sigirimob from "/images/culture/sigirimob.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Section from "@/components/culture/section";
import { culturesection } from "@/constants/culturesection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import AOS from "aos";
import "aos/dist/aos.css";

function Culture() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
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
      const increment = window.innerWidth >= 640 ? 3 : 4; // Increment based on screen size
      setVisibleCards((prev) => prev + increment);
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
  return (
    <div>
      {loading && <PageLoader />}
      <Heading
        text1="Immerse Sri Lanka's"
        text2="rich tapestry of traditions, festivals, & heritage"
        textM1="Immerse Sri Lanka's rich"
        textM2="tapestry of traditions, festivals, & heritage"
      />

      <div className="space-y-[28px] lg:space-y-[62px]">
        <div className="flex flex-col gap-y-[20px] lg:gap-y-0 lg:space-y-[40px] w-full items-center">
          <img src={im1} className="hidden lg:flex" />
          <img src={im2} className="flex lg:hidden w-full" />
          <span className="flex lg:hidden text-center  text-[14px] md:text-[20px] font-productsansregular w-full ">
            Immerse yourself in Sri Lanka's rich tapestry of traditions,
            festivals, and heritage where ancient temples, vibrant dances, and
            timeless rituals tell the story of a nation with a history as
            colorful as its landscapes.
          </span>
          <span className="hidden lg:flex text-center justify-center text-[14px] md:text-[20px] font-productsansregular w-full ">
            Immerse yourself in Sri Lanka's rich tapestry of traditions,
            festivals, and heritage <br /> where ancient temples, vibrant
            dances, and timeless rituals tell the story of a nation with a
            history as colorful as its landscapes.
          </span>
        </div>
        {/* loku div */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="lg:px-[41px] flex flex-col space-y-[28px]  lg:space-y-[40px] items-center"
        >
          {/* row3 */}
          {culturesection.slice(0, visibleCards).map((sectiondata, index) => (
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
          {visibleCards < culturesection.length && (
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
          <div className="flex flex-col  lg:space-y-0 lg:flex-row w-full gap-y-[16px] lg:gap-y-0 ">
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

export default Culture;
