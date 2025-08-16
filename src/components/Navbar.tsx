import { useState, useRef, useEffect } from "react";
import icon from "/icon.webp";
import { CgMenuRight } from "react-icons/cg";
import Button from "@/components/Button";
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
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    }
    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("Home");
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status on mount and when location changes
    setIsAuthenticated(!!localStorage.getItem("authToken"));
  }, [location]);
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
      "/product",
      "/story",
      "/security",
      "/review",
      "/plan"
    ];

    let currentSection = "";

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
      currentSection = "/product";
    }

    // Highlight "Packages" when navigating to `/packclick/:id`
    if (location.pathname.startsWith("/packclick")) {
      currentSection = "/story";
    }

    // Highlight "plan" when navigating to `/actclick/:id`
    if (location.pathname.startsWith("/actclick")) {
      currentSection = "/plan";
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
                to="/product"
                className={`px-4 ${
                  activeSection === "/product"
                    ? "border-2 border-black  hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Product</span>
              </Link>
              <Link
                to="/story"
                className={`px-4 ${
                  activeSection === "/story"
                    ? "border-2 border-black  hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Story</span>
              </Link>
              <Link
                to="/security"
                className={`px-4 ${
                  activeSection === "/security"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl "
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Security</span>
              </Link>
              <Link
                to="/review"
                className={`px-4 ${
                  activeSection === "/review"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl"
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D] ">Review</span>
              </Link>
              <Link
                to="/plan"
                className={`px-4 ${
                  activeSection === "/plan"
                    ? "border-2 border-black hover:border-[#1A3A6D] rounded-3xl"
                    : ""
                }`}
              >
                <span className=" hover:text-[#1A3A6D]  ">plan</span>
              </Link>
            </div>
            {/* button */}
          </div>
          <div className="flex gap-x-[5px] lg:gap-x-[20px]">
            {isAuthenticated ? (
              <div
                className="relative hidden lg:flex items-center gap-2"
                ref={profileRef}
              >
                <button
                  className="flex items-center gap-2 focus:outline-none"
                  onClick={() => setProfileDropdownOpen((open) => !open)}
                >
                  <img
                    src={account}
                    alt="User"
                    className="w-[28px] h-[28px] rounded-full"
                  />
                  <span className="font-productsans text-black">Profile</span>
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                    <Link
                      to="/userprofile"
                      className="block px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      Edit Profile
                    </Link>
                    <Link
                      to="/cctv-logs"
                      className="block px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      CCTV Logs
                    </Link>
                    <Link
                      to="/cart"
                      className="block px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      Cart
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                      onClick={() => {
                        localStorage.removeItem("authToken");
                        setIsAuthenticated(false);
                        navigate("/signin");
                        setProfileDropdownOpen(false);
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
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
                  to="/product"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/product"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <BiCategoryAlt className="w-[20px] h-[20px]" />
                  <span className="">Product</span>
                </Link>
                <Link
                  to="/story"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/story"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img
                    src={activeSection === "/story" ? Wpackages : packageimg}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="">Story</span>
                </Link>
                <Link
                  to="/security"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/security"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <MdOutlineFestival className="w-[20px] h-[20px]" />
                  <span className="">Security</span>
                </Link>
                <Link
                  to="/review"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/review"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img
                    src={
                      activeSection === "/review" ? Wdestination : destination
                    }
                    className="w-[20px] h-[20px]"
                  />

                  <span className="">Review</span>
                </Link>
                <Link
                  to="/plan"
                  className={`flex flex-row items-center gap-[16px] px-[16px] w-full rounded-xl py-[8px] ${
                    activeSection === "/lan"
                      ? "bg-[#1A3A6D] text-white"
                      : "text-[#535353]"
                  }`}
                >
                  <img
                    src={activeSection === "/plan" ? Wactivityimg : activityimg}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="">plan</span>
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
                {isAuthenticated ? (
                  <Link to="/userprofile" className="flex items-center gap-2">
                    <img
                      src={account}
                      alt="User"
                      className="w-[28px] h-[28px] rounded-full"
                    />
                    <span className="font-productsans text-black">Profile</span>
                  </Link>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
