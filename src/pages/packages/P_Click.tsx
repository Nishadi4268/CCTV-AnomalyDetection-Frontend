import { FaArrowLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  //   BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { LuUserRound } from "react-icons/lu";
import { RxSlash } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BookCard1 } from "@/types/BookCardTypes";
import { packagephase as offerPackages } from "@/constants/offerPackagesItems";
import { useParams } from "react-router-dom";
import Book_Button from "@/components/Book_Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { WiTime9 } from "react-icons/wi";
import PoliciesBox from "@/components/package/policiesBox";
import PopUp from "@/pages/activities/PopUp";
import { useRef, useState, useEffect } from "react";
import ImgCarosal from "../activities/ImgCarosal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLoader from "@/components/PageLoader";
interface P_ClickProps {
  packagephase?: BookCard1;
  onClick?: () => void;
}

const P_Click: React.FC<P_ClickProps> = () => {
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
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-out"
    });
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const datePickerRef = useRef<DatePicker | null>(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  const handleTimeSelect = (time: string | null) => {
    setSelectedTime(time);
    setShowTimePicker(false); // Hide dropdown after selection
  };
  // Function to handle opening the popup
  const handleOpenPopup = () => {
    setIsDialogOpen(true);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setIsDialogOpen(false);
  };
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    } else {
      setSelectedDate(null); // Handle null case if needed
    }
  };
  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  const selectedPackage = offerPackages.find((blog) => blog.Id === id);

  // Function to split description into paragraphs after every 3 sentences
  const splitDescriptionIntoParagraphs = (description: string) => {
    const sentences = description.split(". ");
    const paragraphs = [];

    let paragraph = "";
    sentences.forEach((sentence, index) => {
      paragraph += sentence + ". ";
      if ((index + 1) % 3 === 0) {
        paragraphs.push(paragraph.trim());
        paragraph = "";
      }
    });
    if (paragraph) {
      paragraphs.push(paragraph.trim());
    }
    return paragraphs;
  };

  const imagesCarosal = [
    // selectedPackage?.image,
    selectedPackage?.image1,
    selectedPackage?.image2,
    selectedPackage?.image31,
    selectedPackage?.image32,
    selectedPackage?.image4
  ];

  const facilityList = selectedPackage?.facilityList?.length ? (
    selectedPackage.facilityList.map((item, index) => (
      <li className="pb-1" key={index}>
        {item}
      </li>
    ))
  ) : (
    <li>No facilities available</li>
  );
  const policyList = selectedPackage?.policyList?.length ? (
    selectedPackage.policyList.map((item, index) => (
      <li className="pb-1" key={index}>
        {item}
      </li>
    ))
  ) : (
    <li>No facilities available</li>
  );
  const importantList = selectedPackage?.importantList?.length ? (
    selectedPackage.importantList.map((item, index) => (
      <li className="pb-1 tracking-tight" key={index}>
        {item}
      </li>
    ))
  ) : (
    <li>No facilities available</li>
  );

  const inclusionExclusionList =
    (selectedPackage?.inclusionList &&
      selectedPackage.inclusionList.length > 0) ||
    (selectedPackage?.exclusionList &&
      selectedPackage.exclusionList.length > 0) ? (
      <div className="list-disc pl-[20px]">
        {selectedPackage?.inclusionList &&
          selectedPackage.inclusionList.length > 0 && (
            <div>
              <ul className="list-disc ">
                <li>
                  <h1>Inclusions</h1>
                </li>
                {selectedPackage.inclusionList.map((item, index) => (
                  <li className="ml-[20px]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

        {selectedPackage?.exclusionList &&
          selectedPackage.exclusionList.length > 0 && (
            <div className="mt-2">
              <ul className="list-disc ">
                <li>
                  <h1>Exclusions</h1>
                </li>
                {selectedPackage.exclusionList.map((item, index) => (
                  <li className="ml-[20px]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    ) : (
      <li>No facilities available</li>
    );
  // const [selectedTime, setSelectedTime] = useState("");

  // const handleTimeChange = (event) => {
  //   setSelectedTime(event.target.value);
  // };
  return (
    <div className="flex flex-col gap-[28px]">
      {loading && <PageLoader />}
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between gap-[22px]">
        <Breadcrumb className="font-bold font-productsans text-14 md:text-16 flex">
          <BreadcrumbList>
            <BreadcrumbItem className="ml-2 cursor-pointer">
              <BreadcrumbLink
                className="gap-[16px] flex flex-row items-center"
                href="/packages"
              >
                <FaArrowLeft className="text-[#1A3A6D]" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/packages">Package</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="">
                <span className="block sm:hidden">
                  {selectedPackage?.CategoryData
                    ? selectedPackage?.titleC?.split(" ").slice(0, 2).join(" ")
                    : selectedPackage?.title?.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="hidden sm:block">
                  {selectedPackage?.CategoryData
                    ? selectedPackage?.titleC
                    : selectedPackage?.title}
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full sm:w-auto items-center justify-center flex">
          <div className="flex justify-between max-w-[281px] w-full sm:w-auto space-x-[10px] border-b border-black py-1">
            <input
              placeholder="Search"
              title="Search"
              className="placeholder-black text-12 sm:text-14 focus:outline-none items-center"
            />
            <span className="flex w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]">
              <IoSearchOutline />
            </span>
          </div>
        </div>
      </div>
      {/* click card package image */}
      <div className="relative">
        {/* image grid */}
        <div className="w-full md:px-[20px] justify-center items-center 2xl:px-[41px]">
          <div className="hidden md:flex flex-row gap-[22px] h-full w-full xl-2000:max-h-[450px] ">
            <img
              src={selectedPackage?.image1}
              className="hover:scale-[1.01] duration-700 w-1/4 "
            />
            <img
              src={selectedPackage?.image2}
              className="hover:scale-[1.01] duration-700 w-1/4"
            />
            <div className=" flex flex-col w-full gap-[22px] justify-between xl-2000:max-w-[500px] ">
              <img
                src={selectedPackage?.image31}
                className="xl-2000:max-h-[210px] hover:scale-[1.01] duration-700 w-full"
              />
              <img
                src={selectedPackage?.image32}
                className="xl-2000:max-h-[210px] hover:scale-[1.01] duration-700 w-full"
              />
            </div>
            <img
              src={selectedPackage?.image4}
              className="hover:scale-[1.01] duration-700 w-1/4 "
            />
          </div>
        </div>

        {/* mobile carosal */}
        <div className="md:hidden w-full mb-[10px]">
          {/* <Slider {...sliderSettingsMobile}>
            {imagesswiper.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  className="w-[345px] h-[177px] object-cover items-center "
                />
              </div>
            ))}
          </Slider> */}
          <ImgCarosal images1={imagesCarosal} />
        </div>
      </div>
      {/* package details */}
      <div className="flex flex-col gap-[28px] items-center md:px-[20px] 2xl:px-[41px]">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="flex flex-col gap-[22px] md:gap-[40px]"
        >
          <div className="flex flex-col-reverse lg-1100:flex-row items-center lg-1100:items-start xl-2000:justify-between gap-[20px] xl:gap-[40px]">
            {/* description part */}
            <div className="flex flex-col gap-[28px] w-full lg-1100:w-2/3">
              <div className="flex flex-col gap-[16px] md:gap-[20px]">
                <h1 className="text-16 lg:text-24 font-bold">
                  {selectedPackage?.CategoryData
                    ? selectedPackage?.titleC
                    : selectedPackage?.title}
                </h1>

                <p className="text-12 lg:text-14 font-productsansregular">
                  {/* Mobile view 3 sentences for each paragraph*/}
                  <span className="block lg:hidden text-justify">
                    {splitDescriptionIntoParagraphs(
                      selectedPackage?.CategoryData
                        ? selectedPackage?.Ldescription || ""
                        : selectedPackage?.description || ""
                    ).map((paragraph, index) => (
                      <span key={index} className="block lg:hidden mt-4">
                        {paragraph}
                      </span>
                    ))}
                  </span>

                  {/* Desktop view */}
                  <span className="hidden lg:block font-productsansregular text-justify">
                    {selectedPackage?.CategoryData
                      ? selectedPackage?.Ldescription
                      : selectedPackage?.description}
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-[24px]">
                <h1 className="text-16 font-productsans">Highlights</h1>
                <ul className="list-disc ml-5 md:ml-6 text-14 font-productsansregular text-justify">
                  {selectedPackage?.HighlightDisc?.length ? (
                    selectedPackage.HighlightDisc.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>No highlights available</li>
                  )}
                </ul>
              </div>
            </div>
            {/* map part */}
            <div className="w-full xl:w-[600px] justify-center items-center flex flex-col gap-[20px]">
              {/* gray box */}
              <div className="flex flex-col bg-[#D9D9D9] w-full xl:w-[600px] px-[24px] lg:px-[34px] py-[39px] gap-[28px]">
                <div className="flex flex-row gap-[20px] xl:gap-[35px] items-start justify-center md:justify-between">
                  <div className="flex flex-col">
                    <div className="flex flex-row font-productsans items-center justify-between">
                      <LuUserRound className="h-5 w-5" />
                      <BsCurrencyDollar className="h-5 w-5" />
                      <h1 className="text-16 md:text-12 xl:text-16">300</h1>
                    </div>
                    <h1 className="text-16 md:text-12 xl:text-16 text-nowrap font-productsans">
                      Per Person
                    </h1>
                  </div>
                  <div className="flex flex-col sm:flex-row xl:flex-row gap-[20px] sm:gap-[40px]">
                    <div>
                      {/* Date filter */}
                      <div className="flex flex-row font-productsansregular hover:cursor-pointer border border-black min-w-[183px] w-[183px] md:w-full 2xl:w-[183px] gap-[8px]">
                        <div
                          onClick={openDatePicker}
                          className="flex items-center justify-center gap-[12px] py-[13px] sm:py-[9px] px-[12px] w-full"
                        >
                          <div className="flex flex-row gap-[8px]">
                            <FaRegCalendarAlt
                              onClick={openDatePicker}
                              className="cursor-pointer w-[20px] h-[20px]"
                            />

                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => handleDateChange(date)} // Ensure date can be null
                              dateFormat="MM/dd/yyyy"
                              className=" text-black focus:outline-none cursor-pointer bg-transparent w-auto text-14 max-w-[100px] border-none"
                              placeholderText="Date"
                              // placeholderTextStyle={{ color: "black" }} // Set placeholder text color
                              ref={datePickerRef}
                            />
                            {/* <DatePicker /> */}
                          </div>
                          {selectedDate && (
                            <h1
                              className="text-12"
                              onClick={() => setSelectedDate(null)}
                            >
                              Clear
                            </h1>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* time filter */}
                      <div className="flex flex-row font-productsansregular hover:cursor-pointer border border-black py-[13px] px-[12px] sm:py-[11px] min-w-[183px] 2xl:max-w-auto w-[183px] md:w-full xl:w-[183px] gap-[8px]">
                        <div className="w-full flex items-center justify-between">
                          <div className="relative flex flex-row gap-[12px] w-full">
                            <div
                              onClick={() => setShowTimePicker(!showTimePicker)}
                              className="flex flex-row gap-[12px]"
                            >
                              <WiTime9 className="w-[16px] h-[16px]" />
                              <label
                                htmlFor="time-picker"
                                className="text-12 text-nowrap"
                              >
                                {selectedTime || "Available Time Slot"}
                              </label>
                              <FaChevronDown className="w-[7px] h-[20px]" />
                            </div>
                            {showTimePicker && (
                              <div className="absolute p-[11px] top-[30px] -left-[12px] w-[183px] bg-white border border-gray-300 shadow-lg z-20 text-12">
                                <ul className="border border-black rounded-[10px] w-[161px] h-[154px] flex flex-col items-center justify-between px-[11px] py-[21px]">
                                  {[
                                    "09.00 AM - 11.00 AM",
                                    "10.00 AM - 01:00 PM",
                                    "01.00 PM - 02.30 PM",
                                    "11.00 AM - 11.00 PM",
                                    "09.00 AM - 11.00 PM"
                                  ].map((time) => (
                                    <li
                                      key={time}
                                      onClick={() => handleTimeSelect(time)}
                                      className="hover:bg-gray-100 cursor-pointer flex items-center justify-between w-full"
                                    >
                                      {time}
                                      <input
                                        type="checkbox"
                                        className="cursor-pointer text-black"
                                        checked={selectedTime === time}
                                        onChange={() => handleTimeSelect(time)}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* yellow button */}
                <div className="hidden sm:flex hover:opacity-90 hover:scale-[1.01] bg-[#1A3A6D]">
                  <Book_Button
                    text="Secure Your Adventure"
                    textColor="text-white"
                    width="w-full"
                    height="h-[40px]"
                    onClick={handleOpenPopup}
                  />
                </div>
              </div>
              {/* yellow button */}
              <div className="sm:hidden flex w-full hover:opacity-90 hover:scale-[1.01] bg-[#1A3A6D]">
                <Book_Button
                  text="Secure Your Adventure"
                  textColor="text-white"
                  width="w-full "
                  height="h-[40px]"
                  onClick={handleOpenPopup}
                />
              </div>
              {isDialogOpen && <PopUp onClose={handleClosePopup} />}
              {/* map for web*/}
              <iframe
                className="hidden lg:flex w-full h-[350px] 2xl:h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31718.076933913645!2d80.52098485!3d5.95492025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1413e0db7427f%3A0x3a7e8f6959b37e3c!2sMatara%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1718132400000"
                allowFullScreen
                loading="lazy"
              ></iframe>{" "}
            </div>
          </div>
          {/* map for mobile*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31718.076933913645!2d80.52098485!3d5.95492025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1413e0db7427f%3A0x3a7e8f6959b37e3c!2sMatara%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1718132400000"
            allowFullScreen
            loading="lazy"
            className="lg:hidden flex h-[250px]"
          ></iframe>{" "}
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="flex flex-wrap flex-col md:flex-row w-full h-full xl-1920:h-[224px] justify-center xl-1500:justify-between items-center gap-[12px] xl:gap-[27px]"
        >
          <PoliciesBox title="Facilities" content={facilityList} />
          <PoliciesBox title="Policies" content={policyList} />
          <PoliciesBox
            px="18px"
            title="Important Details"
            content={importantList}
          />
          <PoliciesBox
            title="Inclusions & Exclusions"
            content={inclusionExclusionList}
          />
        </div>
      </div>
    </div>
  );
};

export default P_Click;
