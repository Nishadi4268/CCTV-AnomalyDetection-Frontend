import { useState, useRef, useEffect } from "react";
import TableContButton from "@/components/policies/TableContButton";
import { PrivacyItems } from "@/constants/PrivacyItems";
import PageLoader from "@/components/PageLoader";

function Privacy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;
      const scrollY = window.scrollY;

      if (screenWidth >= 1536) {
        if (scrollY > 350 && scrollY < 1520) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else if (screenWidth >= 1280) {
        // XL screens and larger
        if (scrollY > 350 && scrollY < 1720) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else if (screenWidth >= 1024) {
        // LG screens and larger
        if (scrollY > 350 && scrollY < 1720) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else if (screenWidth >= 768) {
        // MD screens and larger
        if (scrollY > 350 && scrollY < 1750) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else {
        // Smaller than MD screens
        if (scrollY > 350 && scrollY < 1520) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (itemRefs.current[index]) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <div>
      {loading && <PageLoader />}
      <h1 className="text-16 md:text-24 font-productsans mb-[12px] md:mb-[24px] lg:mt-[40px]">
        Privacy Policy
      </h1>
      <div className="flex md:hidden border border-black mb-[20px]"></div>
      <h1 className="flex md:hidden text-center text-14 font-productsans">
        Welcome to Thabili! Your privacy is important to us, and we are
        committed to protecting the personal information you share with us. This
        Privacy Policy outlines how we collect, use, and safeguard your
        information when you visit our website.
      </h1>

      <div className="flex flex-col md:flex-row w-full">
        <div className=" md:top-0 w-full md:w-[45%] xl-1800:w-[35%] pt-[28px] md:pt-[53px] md:pr-[30px] lg-1200:pr-[100px] md:border-t border-black flex flex-col gap-[20px] md:gap-[28px]">
          <h1 className={`text-16 font-productsans `}>Table of Content</h1>
          <div
            className={`flex flex-col gap-[12px] md:gap-[24px] items-center md-850:items-start overflow-auto transition-all duration-300 ${
              isSticky ? "md:fixed md:top-[1px] md:w-[35%]" : ""
            }`}
          >
            {PrivacyItems.map((item, index) => (
              <TableContButton
                key={index}
                text={item?.title}
                isActive={activeIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="w-full pb-[76px] md:w-[55%] xl-1800:w-[75%] flex flex-col md:border-t md:border-l border-black md:gap-[16px] md:pl-[30px] lg-1200:pl-[68px] pt-[26px] md:pt-[53px] overflow-auto">
          <h1 className="hidden md:flex text-14 font-productsans">
            Welcome to Thabili! Your privacy is important to us, and we are
            committed to protecting the personal information you share with us.
            This Privacy Policy outlines how we collect, use, and safeguard your
            information when you visit our website.
          </h1>
          <div className="flex flex-col">
            {PrivacyItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between"
                ref={(el) => (itemRefs.current[index] = el)}
              >
                <div className="flex flex-col mt-[16px] md:mt-[36px]">
                  <h1 className="text-14 font-productsans mb-[16px] md:mb-[28px]">
                    {item?.title}
                  </h1>
                  <h1 className="text-14 font-productsansregular">
                    {item?.description}
                  </h1>
                </div>

                <div className="mt-[16px] md:mt-[36px] h-full bg-[#1A3A6D] hidden md:flex">
                  <div
                    className="border-4 border-black rounded-full h-full"
                    style={{
                      borderColor: activeIndex === index ? "black" : "#1A3A6D"
                    }}
                  ></div>
                </div>
                <div
                  className="border-4 border-black  flex md:hidden"
                  style={{
                    borderColor: activeIndex === index ? "black" : "#1A3A6D"
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
