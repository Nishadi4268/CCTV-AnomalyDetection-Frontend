import { Input } from "@/components/custom-ui/input";
import { FiArrowUpRight } from "react-icons/fi";
import SocialMedia from "./SocialMedia";
import Book_Button from "./Book_Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <div>
      <div className="mt-[30px] md:mt-[50px] pb-[20px] md:pb-[30px] xl:pb-[35px] sm:border-b sm:border-t border-black font-productsansregular gap-[20px] sm:gap-0 flex flex-col">
        {/* gray part for web*/}
        <div className="bg-[#D3D3D366] w-full h-full lg:h-[182px] sm:border-b border-black hidden sm:flex flex-row items-center justify-center  ">
          {/* email for web */}
          <div className="w-full sm:w-1/3 flex flex-col sm:py-[40px] items-start justify-center px-[15px] lg:px-[30px] xl:px-[100px]">
            <div className="2xl:w-[335px] space-y-3 lg:space-y-5 ">
              <h1 className="text-14 lg:text-16 2xl:text-20">
                Subscribe to Our Newsletter
              </h1>
              <div>
                <div className="flex flex-row items-center w-full justify-between">
                  <Input />
                  <button>
                    <FiArrowUpRight className="w-[24px] h-[24px]" />
                  </button>
                </div>
                <div className="border-t mt-[10px] border-black w-full "></div>
              </div>
            </div>
          </div>

          <div className="border-black border-r self-stretch  "></div>

          {/* logo */}
          <div className="w-1/3 flex items-center justify-center">
            <img src="/images/logo.png" className="w-[70%] 2xl:w-[50%]" />
          </div>

          {/* contact for web */}
          <div className="border-black border-r self-stretch "></div>
          <div className="w-1/3 px-[20px] lg:pl-[30px] xl:pl-[50px] 2xl:pl-[80px] lg:pr-[30px] xl:pr-[100px] flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-start justify-between">
              <div className="flex flex-col w-1/2 items-start justify-between lg:w-[160px] xl:w-[190px] 2xl:w-[233px] ">
                <h1 className="text-14 lg:text-16 xl:mb-[16px]">Contact Us</h1>
                <div className="border-t border-black w-full"></div>
              </div>
              <h1 className="flex text-14 lg:text-16 text-nowrap">
                +94 41 22 46557
              </h1>
            </div>
            <div className="mt-[10px] w-full items-start flex justify-start">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* gray part for mobile*/}
        <div className="w-full px-[15px] flex items-center justify-center">
          <div className="bg-[#D3D3D3] w-full py-[23px] flex sm:hidden flex-row items-center justify-center">
            <div className="w-full sm:w-1/3 flex flex-col px-[33px] justify-center">
              <div className="space-y-2 ">
                <h1 className="text-14">Subscribe to Our Newsletter</h1>
                <div className="">
                  <div className="flex flex-row  items-center w-full justify-between ">
                    <Input />
                    <FiArrowUpRight className="w-[24px] h-[24px]" />
                  </div>
                  <div className="border-t  border-black w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* white part */}
        <div className="w-full flex flex-col h-[114px] sm:flex-row justify-between px-[15px] lg:px-[30px] xl:px-[100px] sm:py-[24px]">
          {/* buy now for web */}
          <div className="hidden sm:flex flex-col space-y-[10px]">
            <h1 className="text-12 lg:text-16">
              Your adventure is just a click away!
            </h1>
            <Link to="/category">
              <Book_Button
                textColor="text-white hover:text-black"
                width="w-[150px] md:w-[171px] text-14"
                height="h-[40px]"
                btn4="btn-4"
              />
            </Link>
          </div>

          <div className="flex sm:hidden mb-[16px] -z-10">
            <SocialMedia />
          </div>

          <div className="xl:-ml-20 flex flex-row gap-[48px] sm:gap-x-[52px] items-start justify-start sm:justify-center   ">
            <div className="text-12 lg:text-16 gap-[12px] md:gap-0 md:h-[78px] justify-between flex flex-col ">
              <Link to="/">
                <h1
                  className={`cursor-pointer ${
                    location.pathname === "/" ? "text-[#1A3A6D]" : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Home
                </h1>
              </Link>
              <Link to="/story">
                <h1
                  className={`cursor-pointer ${
                    location.pathname === "/story" ? "text-[#1A3A6D]" : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Story
                </h1>
              </Link>
              <Link to="/packages">
                <h1
                  className={`cursor-pointer ${
                    location.pathname === "/packages" ||
                    location.pathname.startsWith("/packclick/")
                      ? "text-[#1A3A6D]"
                      : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Packages
                </h1>
              </Link>
              <Link to="/destination">
                <h1
                  className={`flex sm:hidden cursor-pointer ${
                    location.pathname === "/destination" ? "text-[#1A3A6D]" : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Explore Sri Lanka
                </h1>
              </Link>
            </div>
            <div className="text-12 lg:text-16 gap-[12px] md:gap-0 md:h-[78px] justify-between flex flex-col ">
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById("packages-offer");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 500);
                }}
              >
                <h1 className={`cursor-pointer hover:text-[#1A3A6D]`}>
                  Offers
                </h1>
              </Link>
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById("review");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 500);
                }}
              >
                <h1 className={`cursor-pointer hover:text-[#1A3A6D]`}>
                  Reviews
                </h1>
              </Link>{" "}
              <Link to="/destination">
                <h1
                  className={`hidden sm:flex text-nowrap cursor-pointer ${
                    location.pathname === "/destination" ? "text-[#1A3A6D]" : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Explore Sri Lanka
                </h1>
              </Link>
              <Link to="/activities">
                <h1
                  className={`flex sm:hidden cursor-pointer -mt-3 ${
                    location.pathname === "/activities" ||
                    location.pathname.startsWith("/actclick/")
                      ? "text-[#1A3A6D]"
                      : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Activities
                </h1>
              </Link>
            </div>
            <div className="text-12 lg:text-16 gap-[12px] md:gap-0 md:h-[78px] justify-between flex flex-col ">
              <Link to="/category">
                <h1
                  className={`cursor-pointer ${
                    location.pathname === "/category" ||
                    location.pathname.startsWith("/cateclick/")
                      ? "text-[#1A3A6D]"
                      : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Category
                </h1>
              </Link>
              <Link to="/culture">
                <h1
                  className={`cursor-pointer ${
                    location.pathname === "/culture" ? "text-[#1A3A6D]" : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Culture
                </h1>
              </Link>
              <Link to="/activities">
                <h1
                  className={`hidden sm:flex cursor-pointer ${
                    location.pathname === "/activities" ||
                    location.pathname.startsWith("/actclick/")
                      ? "text-[#1A3A6D]"
                      : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Activities
                </h1>
              </Link>
            </div>
          </div>

          <div className="flex flex-row mt-[32px] items-center sm:items-start justify-between sm:justify-end lg:justify-center gap-[8px] md:gap-[16px]">
            {/* contact for mobile */}
            <div className="flex sm:hidden flex-col gap-[8px] items-start justify-between ">
              <h1 className="text-12 lg:text-16 2xl:text-24">Contact Us</h1>
              <h1 className="text-12 lg:text-16 2xl:text-24 text-nowrap -mt-1 md:mt-0">
                +94 41 22 46557
              </h1>
            </div>

            {/* payment */}
            <div className=" -z-10 flex flex-row items-center sm:items-start justify-center h-full sm:-mt-[32px] gap-[8px] xl:gap-[15px]">
              <img
                src="/images/master.png"
                className="w-[27px] h-[16px] md:w-[40px] xl:w-[59px] md:h-[25px] xl:h-[35px] rotate-y-on-hover"
              />
              <img
                src="/images/visa.png"
                className="w-[27px] h-[16px] md:w-[40px] xl:w-[58px] md:h-[25px] xl:h-[35px] rotate-y-on-hover"
              />
              <img
                src="/images/money.png"
                className="w-[27px] h-[16px] md:w-[40px] xl:w-[57px] md:h-[25px] xl:h-[35px] rotate-y-on-hover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A3A6D] mt-[102px] sm:mt-0 sm:bg-white text-white sm:text-black flex flex-col sm:flex-row items-center justify-between font-productsansregular text-12 py-[6px] sm:py-[19px] px-[15px] lg:px-[30px] xl:px-[100px] w-full">
        <h1 className="w-fulltext-center md:text-start text-nowrap">
          © 2025 Thabili All rights reserved.
        </h1>
        <div className="flex flex-row gap-[20px] justify-center sm:justify-end items-center w-full sm:gap-x-[16px]">
          <Link to="/privacy">
            <h1
              className={`cursor-pointer ${
                location.pathname === "/privacy"
                  ? "sm:text-[#1A3A6D] text-black"
                  : "hover:text-black sm:hover:text-[#1A3A6D]"
              } `}
            >
              Privacy Policy
            </h1>
          </Link>

          <Link to="/terms&condition">
            <h1
              className={`cursor-pointer ${
                location.pathname === "/terms&condition"
                  ? "text-black sm:text-[#1A3A6D]"
                  : ""
              } hover:text-black sm:hover:text-[#1A3A6D]`}
            >
              Terms and Conditions
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
