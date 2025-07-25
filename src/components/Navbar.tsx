import { useState, useRef, useEffect } from "react";
import icon from "/icon.webp";
import { CgMenuRight } from "react-icons/cg";
// import { IoClose } from "react-icons/io5";
import Button from "@/components/Button";
// import { Link } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineFestival } from "react-icons/md";
import packageimg from "/images/navbar/packages.svg";
import destination from "/images/navbar/destination.svg";
import activityimg from "/images/navbar/activityimg.svg";
import Wdestination from "/images/navbar/Wdestination.svg";
import Wpackages from "/images/navbar/Wpackages.svg";
import Wactivityimg from "/images/navbar/Wactivityimg.svg";
import account from "/images/navbar/account.png";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("Home");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Update active section based on the current path
    setActiveSection(location.pathname);
  }, [location]);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = [
      "/",
      "/category",
      "/packages",
      "/culture",
      "/destination",
      "/activities"
    ];

    let currentSection = "";

    // sections.forEach((section) => {
    //   if (location.pathname.startsWith(section)) {
    //     currentSection = section;
    //   }
    // });

    sections.forEach((section) => {
      if (location.pathname === section) {
        currentSection = section;
      }
    });

    if (location.pathname === "/") {
      currentSection = "/";
    }

    // Check if URL starts with "/cateclick/" and set it to "/category"
    if (location.pathname.startsWith("/cateclick")) {
      currentSection = "/category";
    }

    // Highlight "Packages" when navigating to `/packclick/:id`
    if (location.pathname.startsWith("/packclick")) {
      currentSection = "/packages";
    }

    // Highlight "Activities" when navigating to `/actclick/:id`
    if (location.pathname.startsWith("/actclick")) {
      currentSection = "/activities";
    }

    setActiveSection(currentSection);
  }, [location]);

  // scrolling effect disable when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="top-0 left-0 w-full z-50 relative">
      <div className="flex flex-col md:flex max-w-[1920px] mx-auto w-full relative ">
        <div className="flex py-[8px] md:py-[28px] justify-between items-center border-b lg:border-b-2  border-black">
          <div className="flex items-center space-x-3 lg:space-x-6 justify-start">
            <button>
              <img
                src={icon}
                className=" w-[71px] md:w-24 xl:w-32 flex "
                onClick={() => navigate("/")}
              />
            </button>
          </div>

          <div className="flex md:space-x-3 xl:space-x-10 items-center">
            {/* web view */}
            <div className="hidden  lg:flex  font-productsans md:text-sm lg:text-[16px] xl:text-base 2xl:text-base items-end lg:space-x-0 xl:space-x-3 2xl:space-x-[36px]">
              <Link
                to="/"
                className={`px-4 ${
                  activeSection === "/"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D]">Home</span>
              </Link>
              <Link
                to="/category"
                className={`px-4 ${
                  activeSection === "/category"
                    ? "border-2 border-black  hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Category</span>
              </Link>
              <Link
                to="/packages"
                className={`px-4 ${
                  activeSection === "/packages"
                    ? "border-2 border-black  hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Packages</span>
              </Link>
              <Link
                to="/culture"
                className={`px-4 ${
                  activeSection === "/culture"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Culture</span>
              </Link>
              <Link
                to="/destination"
                className={`px-4 ${
                  activeSection === "/destination"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl"
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Destination</span>
              </Link>
              <Link
                to="/activities"
                className={`px-4 ${
                  activeSection === "/activities"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl"
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D]  ">Activities</span>
              </Link>
            </div>
            {/* button */}
          </div>
          <div className="flex gap-x-[5px] lg:gap-x-[20px]">
            <div className="hidden lg:flex ">
              <Link
                to="/signin"
                className="text-nowrap hover:opacity-85 hover:translate-y-0.5"
              >
                <Button
                  title="SIGN IN"
                  borderColor="none"
                  bgcolor="white"
                  textcolor="black"
                  hoverBgColor="black"
                  hoverTextColor="white"
                />
              </Link>
            </div>

            <Link
              to="/signup"
              className="hidden lg:flex hover:opacity-85 hover:translate-y-0.5"
            >
              <Button
                title="SIGN UP"
                borderColor="none"
                bgcolor="black"
                textcolor="white"
                hoverBgColor="white"
                hoverTextColor="black"
              />
            </Link>
          </div>

          {isMenuOpen || (
            <CgMenuRight
              onClick={handleMenuOpen}
              size={20}
              className="z-50 text-black w-6 h-6 md:w-8 md:h-8 rounded-[4px] lg:hidden "
            />
          )}
        </div>

        {/* menu mobile */}
        <div className="">
          {isMenuOpen && (
            <div
              className="fixed z-40 top-0 left-0 right-0 transition-max-height duration-1000  bottom-0 bg-black bg-opacity-[11.1px] backdrop-blur-md "
              onClick={closeMenu}
            ></div>
          )}
          <div
            ref={menuRef}
            className={`flex top-0 lg:hidden flex-col -right-[15px] absolute w-[293px] h-[800px] pb-10 overflow-hidden rounded-[20px] transition-max-height duration-1000 
    backdrop-blur-md z-40 bg-[#F7F7F7] transition-all ease-in ${
      isMenuOpen ? "max-h-[800px] opacity-1 " : "max-h-0 opacity-0"
    }`}
          >
            <div
              onClick={closeMenu}
              className="absolute h-[20px] w-[20px] bg-[#1A3A6D] border rounded-full left-[16px] top-[16px] flex items-center justify-center ring-offset-background transition-opacity hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </div>
            <div className="flex flex-col font-productsans text-[14px] items-start space-y-[40px] ">
              <div
                onClick={closeMenu}
                className="flex flex-col  font-productsans text-[14px] items-start px-[16px] pb-7 pt-[61px] space-y-[14px] w-full"
              >
                <Link
                  to="/"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-[260px] lg:w-full rounded-xl py-[8px] ${
                    activeSection === "/"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353] "
                  }`}
                >
                  <GoHome className="w-[20px] h-[20px]" />
                  <span className="">Home</span>
                </Link>
                <Link
                  to="/category"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/category"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <BiCategoryAlt className="w-[20px] h-[20px]" />
                  <span className="">Category</span>
                </Link>
                <Link
                  to="/packages"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/packages"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img
                    src={activeSection === "/packages" ? Wpackages : packageimg}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="">Packages</span>
                </Link>
                <Link
                  to="/culture"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/culture"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <MdOutlineFestival className="w-[20px] h-[20px]" />
                  <span className="">Culture</span>
                </Link>
                <Link
                  to="/destination"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/destination"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img
                    src={
                      activeSection === "/destination"
                        ? Wdestination
                        : destination
                    }
                    className="w-[20px] h-[20px]"
                  />

                  <span className="">Destination</span>
                </Link>
                <Link
                  to="/activities"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/activities"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img
                    src={
                      activeSection === "/activities"
                        ? Wactivityimg
                        : activityimg
                    }
                    className="w-[20px] h-[20px]"
                  />
                  <span className="">Activities</span>
                </Link>
                <Link
                  to=""
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === ""
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img src={account} className="w-[22px] h-[22px]" />
                  <span className="">My Account</span>
                </Link>
              </div>

              <div className="flex flex-col gap-[20px] w-full px-[16px]">
                <Link to="/signin" className="text-nowrap">
                  <Button
                    title="SIGN IN"
                    borderColor="none"
                    bgcolor="white"
                    textcolor="black"
                    className=" w-full text-14"
                    hoverBgColor="black"
                    hoverTextColor="white"
                  />
                </Link>

                <Link to="/signup" className="flex ">
                  <Button
                    title="SIGN UP"
                    borderColor="none"
                    bgcolor="black"
                    textcolor="white"
                    className="w-full text-14 "
                    hoverBgColor="white"
                    hoverTextColor="black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
