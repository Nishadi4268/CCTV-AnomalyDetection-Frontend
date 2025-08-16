import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <div>
      <div className="mt-[30px] md:mt-[50px] pb-[20px] md:pb-[30px] xl:pb-[35px] sm:border-b sm:border-t border-black font-productsansregular gap-[20px] sm:gap-0 flex flex-col">
         {/* white part */}
        <div className="w-full flex flex-col h-[114px] sm:flex-row justify-between px-[15px] lg:px-[30px] xl:px-[100px] sm:py-[24px]">
          {/* buy now for web */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-start justify-between">
              <div className="flex flex-col w-1/2 items-start justify-between lg:w-[160px] xl:w-[190px] 2xl:w-[233px] ">
                <h1 className="text-14 lg:text-16 xl:mb-[16px]">Contact Us</h1>
              </div>
              <h1 className="flex text-14 lg:text-16 text-nowrap">
                +94 41 22 46557
              </h1>
            </div>
            <div className="mt-[10px] w-full items-start flex justify-start">
              <SocialMedia />
            </div>
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
              <Link to="/product">
                <h1
                  className={`cursor-pointer ${
                    location.pathname === "/product" ||
                    location.pathname.startsWith("/packclick/")
                      ? "text-[#1A3A6D]"
                      : ""
                  } hover:text-[#1A3A6D]`}
                >
                  Product
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
      <div className="bg-[#1A3A6D] mt-[102px] sm:mt-0 text-white flex flex-col items-center justify-between font-productsansregular text-12 py-[6px] sm:py-[19px] w-full">
        <h1 className="w-full text-center text-nowrap">
          © SafeVision All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
