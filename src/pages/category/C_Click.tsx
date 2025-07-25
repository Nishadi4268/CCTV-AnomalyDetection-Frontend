import { RxSlash } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import CategorySwiper from "@/components/category/CategorySwiper";
import { useState, useEffect } from "react";
import { C_Click_phases } from "@/constants/C_ClickItems";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  //   BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import BookCard from "@/components/category/BookCard";
import { bookCard } from "@/constants/bookCardItems";
// import Filter from "@/components/Filter";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLoader from "@/components/PageLoader";
import Filter from "@/components/Filter";
import Heading from "@/components/Heading";
import { useParams } from "react-router-dom";
import { BookCard1 } from "@/types/BookCardTypes";
import { Imagephases } from "@/constants/categoryCardItems";

interface C_ClickProps {
  Imagephases?: BookCard1;
  onClick?: () => void;
}

const C_Click: React.FC<C_ClickProps> = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{
    id: string;
    image1: string;
    image2: string;
    image31: string;
    image32: string;
    image4: string;
    description: string;
    HighlightDisc: string;
    facilityList: string;
  }>();

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % C_Click_phases.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const navigate = useNavigate();
  const selectedPackage = Imagephases.find((blog) => blog.Id === id);

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
      {/* Heading */}
      <div className="flex flex-row justify-between">
        {loading && <PageLoader />}
        <Breadcrumb className="font-productsans text-16 hidden md:flex flex-row w-auto">
          <BreadcrumbList>
            <FaArrowLeft className="text-[#1A3A6D]" />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-16" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-16" href="/category">
                Category
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-16" href="">
                {selectedPackage?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="hidden md:flex items-center sm:items-end w-full sm:w-auto justify-center sm:justify-end">
          <div className="flex w-[281px] xl:w-[264px] justify-between items-center space-x-[10px] border-b border-black h-[24px] xl:h-[40px]">
            <input
              placeholder="Search"
              title="Search"
              className="placeholder-black text-12 sm:text-14 focus:outline-none items-center"
            />
            <span className="flex w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] items-center justify-center">
              <IoSearchOutline />
            </span>
          </div>
        </div>
        <div className="flex md:hidden w-full items-center justify-center">
          <Heading
            text1="Discover Sri Lanka"
            text2="in Your Way Adventure, Culture and More"
            textM1="Discover Sri Lanka in Your Way "
            textM2="Adventure, Culture and More"
          />
        </div>
      </div>

      {/* card swiper */}
      <div className="relative md:mt-[40px] mb-[28px] md:mb-[80px]">
        <CategorySwiper
          text={C_Click_phases[activePhase].text}
          image={C_Click_phases[activePhase].image}
          imageMobile={C_Click_phases[activePhase].imageMobile}
          rounded="rounded-[10px]"
        />

        <div className="absolute bottom-[20px] md:bottom-1/5 flex space-x-[4.05px] sm:space-x-[8px] justify-center items-center w-full">
          {C_Click_phases.map((_, index) => (
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

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="flex flex-col md:px-[42px]"
      >
        {/* filter for mobile */}
        <div className="mb-[28px]">
          <Filter />
        </div>

        {/* BookCard */}
        <div className="grid gap-[28px] md:gap-x-[49px] md:gap-y-[80px] grid-cols-1 xs-500:grid-cols-2 lg-1000:grid-cols-3 xl-1500:grid-cols-4 xl-1800:grid-cols-5 justify-items-center ">
          {bookCard.map((bookData, index) => (
            <div key={index}>
              <BookCard
                BookData={bookData}
                onClick={() => navigate(`/packclick/${bookData.Id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default C_Click;
