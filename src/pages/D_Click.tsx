import { FaArrowLeft } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { LuUserRound } from "react-icons/lu";
import { RxSlash } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BookCard1 } from "@/types/BookCardTypes";
import { Imagephases } from "@/constants/Desti_packItmes";
import { useParams } from "react-router-dom";
import Book_Button from "@/components/Book_Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { WiTime9 } from "react-icons/wi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import PoliciesBox from "@/components/package/policiesBox";
import PopUp from "@/pages/activities/PopUp";
import DatePicker from "react-datepicker";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLoader from "@/components/PageLoader";
import Section from "@/components/culture/section";
import Places from "@/components/destination/places";
import { placesData } from "@/constants/placesData";

interface P_ClickProps {
  packagephase?: BookCard1;
  onClick?: () => void;
}

const D_Click: React.FC<P_ClickProps> = () => {
  const { id } = useParams<{
    id: string;
    destination: string;
    image1: string;
    image2: string;
    image31: string;
    image32: string;
    image4: string;
    HighlightDisc: string;
    facilityList: string;
  }>();

  const selectedPackage = Imagephases.find((blog) => blog.Id === id);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker | null>(null);
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
  const inclusionList =
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

  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to handle opening the popup
  const handleOpenPopup = () => {
    setIsDialogOpen(true);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setIsDialogOpen(false);
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
  const selectedId = selectedPackage?.Id;
  return (
    <div className="flex flex-col gap-[28px] lg:gap-[80px]">
      {loading && <PageLoader />}
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between gap-[22px]">
        <Breadcrumb className="font-bold font-productsans text-14 md:text-16 flex">
          <BreadcrumbList>
            <BreadcrumbItem className="ml-2 cursor-pointer">
              <BreadcrumbLink className="gap-[16px] flex flex-row" href="/">
                <FaArrowLeft className="text-[#1A3A6D]" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/destination">Destination</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="">{selectedPackage?.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center md:items-end justify-center md:justify-end ">
          <div className="flex w-[281px] xl:w-[264px] justify-between items-center space-x-[10px] md:pb-1 xl:pb-0 border-b border-black h-[24px] xl:h-[40px]">
            <input
              placeholder="Search"
              title="Search"
              className="placeholder-black text-12 md:text-14 focus:outline-none items-center"
            />
            <button className="flex">
              <IoSearchOutline className="cursor-pointer md:w-[24px] md:h-[24px]" />
            </button>
          </div>
        </div>
      </div>

      {/* package details */}
      <div className="flex flex-col gap-[28px] items-center md:px-[20px] 2xl:px-[42px]">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="flex flex-col gap-[22px] md:gap-[40px] "
        >
          <div className="flex flex-col w-full gap-[28px]">
            {/* description part */}
            <div className="w-full flex flex-col gap-[28px] lg:gap-[71px]">
              <Section
                title={selectedPackage?.title ?? "Default Title"}
                content={selectedPackage?.content ?? "Default Title"}
                firstimage={selectedPackage?.firstimage ?? "Default Title"}
                img1={selectedPackage?.img1 ?? "Default Title"}
                img2={selectedPackage?.img2 ?? "Default Title"}
                img3={selectedPackage?.img3 ?? "Default Title"}
                img4={selectedPackage?.img4 ?? "Default Title"}
                img5={selectedPackage?.img5 ?? "Default Title"}
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-between w-full gap-x-[39px]">
              {/* mobile gray box */}
              <div className="flex lg:hidden w-full flex-col gap-[20px]">
                {/* gray box */}
                <div className="flex flex-col justify-end  bg-[#D9D9D9] w-full px-[24px] md:px-[10px] py-[39px] md:py-[39px] gap-[28px]">
                  <div className="flex flex-row gap-[20px] md:gap-[4px] lg:gap-[20px] xl:gap-[35px] items-center justify-center ">
                    <div className="flex flex-col ">
                      <div className="flex flex-row font-semibold items-center justify-between">
                        <LuUserRound className="h-6 w-6" />
                        <BsCurrencyDollar className="h-5 w-5" />
                        <h1 className="text-16 md:text-12 xl:text-16">300</h1>
                      </div>
                      <h1 className="text-16 md:text-12 xl:text-16 text-nowrap font-productsans">
                        Per Person
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[40px]">
                      {/* Date filter */}
                      <div className="flex flex-row font-productsansregular hover:cursor-pointer border border-black min-w-[183px] w-full gap-[8px]">
                        <div
                          onClick={openDatePicker}
                          className="flex items-center justify-center gap-[12px] py-[13px] px-[12px] sm:py-[11px] w-full"
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
                              className=" text-black focus:outline-none bg-transparent w-auto text-14 max-w-[100px] border-none cursor-pointer"
                              placeholderText="Date"
                              // placeholderTextStyle={{ color: "black" }} // Set placeholder text color
                              ref={datePickerRef}
                            />
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
                      {/* time filter */}
                      <div className="flex flex-row font-productsansregular hover:cursor-pointer border border-black py-[13px] px-[12px] sm:py-[11px] min-w-[183px] 2xl:max-w-auto w-[183px] md:w-full xl:w-[183px] gap-[8px]">
                        <div className="w-full flex items-center justify-between">
                          <div className="relative flex flex-row gap-[12px] w-full">
                            <div
                              onClick={() => setShowTimePicker(!showTimePicker)}
                              className="flex flex-row gap-[12px] cursor-pointer"
                            >
                              <WiTime9 className="w-[16px] h-[16px]" />
                              <label
                                htmlFor="time-picker"
                                className="text-12 text-nowrap cursor-pointer"
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
                  {/* yellow button */}
                  <div className="hidden sm:flex hover:opacity-90 hover:scale-[1.01] bg-[#1A3A6D] ">
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
                <div className="sm:hidden flex hover:opacity-90 hover:scale-[1.01] bg-[#1A3A6D]">
                  <Book_Button
                    text="Secure Your Adventure"
                    textColor="text-white"
                    width="w-full"
                    height="h-[40px]"
                    onClick={handleOpenPopup}
                  />
                </div>
              </div>

              {/* left */}
              <div className="space-y-[24px] flex flex-col mt-[28px] lg:mt-0">
                <div className="flex font-productsans text-[16px]">
                  Places to Visit in {selectedPackage?.title}
                </div>
                <div className="space-y-[16px] flex flex-col">
                  {placesData
                    .filter((place) => place.Id === selectedId) // Get matching places
                    .flatMap((place) => {
                      const topics = Array.isArray(place.topic)
                        ? place.topic
                        : [place.topic]; // Ensure it's an array
                      const descriptions = Array.isArray(place.des)
                        ? place.des
                        : [place.des]; // Ensure it's an array
                      return topics.map((topic, index) => (
                        <Places
                          key={index}
                          topic={topic}
                          des={descriptions[index] ?? ""}
                        />
                      ));
                    })}
                </div>

                {/* map for mobile*/}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31718.076933913645!2d80.52098485!3d5.95492025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1413e0db7427f%3A0x3a7e8f6959b37e3c!2sMatara%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1718132400000"
                  allowFullScreen
                  loading="lazy"
                  className="lg:hidden flex h-[250px]"
                ></iframe>
              </div>
              {/* right part */}
              <div className="w-full hidden lg:flex 2xl:w-[600px] justify-start md:items-end flex-col gap-[20px]">
                {/* gray box */}
                <div className="flex flex-col justify-end  bg-[#D9D9D9] w-full 2xl:w-[600px] px-[24px] md:px-[10px] lg:px-[34px] py-[39px] md:py-[39px] gap-[28px]">
                  <div className="flex flex-row gap-[20px] md:gap-[4px] lg:gap-[20px] xl:gap-[35px] items-center justify-center md:justify-between">
                    <div className="flex flex-col ">
                      <div className="flex flex-row font-semibold items-center justify-between">
                        <LuUserRound className="h-6 w-6" />
                        <BsCurrencyDollar className="h-5 w-5" />
                        <h1 className="text-16 md:text-12 xl:text-16">300</h1>
                      </div>
                      <h1 className="text-16 md:text-12 xl:text-16 text-nowrap font-productsans">
                        Per Person
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col 2xl:flex-row gap-[20px] lg:gap-[40px]">
                      {/* Date filter */}
                      <div className="flex flex-row font-productsansregular hover:cursor-pointer border border-black min-w-[183px] w-full gap-[8px]">
                        <div
                          onClick={openDatePicker}
                          className="flex items-center justify-center gap-[12px] py-[13px] px-[12px] sm:py-[11px] w-full"
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
                              className=" text-black focus:outline-none bg-transparent w-auto text-14 max-w-[100px] border-none cursor-pointer"
                              placeholderText="Date"
                              // placeholderTextStyle={{ color: "black" }} // Set placeholder text color
                              ref={datePickerRef}
                            />
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
                      {/* time filter */}
                      <div className="flex flex-row font-productsansregular hover:cursor-pointer border border-black py-[13px] px-[12px] sm:py-[11px] min-w-[183px] 2xl:max-w-auto w-[183px] md:w-full xl:w-[183px] gap-[8px]">
                        <div className="w-full flex items-center justify-between">
                          <div className="relative flex flex-row gap-[12px] w-full">
                            <div
                              onClick={() => setShowTimePicker(!showTimePicker)}
                              className="flex flex-row gap-[12px] cursor-pointer"
                            >
                              <WiTime9 className="w-[16px] h-[16px]" />
                              <label
                                htmlFor="time-picker"
                                className="text-12 text-nowrap cursor-pointer"
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
                  {/* yellow button */}
                  <div className="hidden sm:flex hover:opacity-90 hover:scale-[1.01] bg-[#1A3A6D] ">
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
                <div className="sm:hidden flex hover:opacity-90 hover:scale-[1.01] bg-[#1A3A6D]">
                  <Book_Button
                    text="Secure Your Adventure"
                    textColor="text-white"
                    width="w-full"
                    height="h-[40px]"
                    onClick={handleOpenPopup}
                  />
                </div>
                {/* PopUp Component */}
                {isDialogOpen && <PopUp onClose={handleClosePopup} />}
                {/* <PopUp/> */}
                {/* map for web*/}
                <iframe
                  className="hidden lg:flex w-full h-[350px] 2xl:h-[300px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31718.076933913645!2d80.52098485!3d5.95492025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1413e0db7427f%3A0x3a7e8f6959b37e3c!2sMatara%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1718132400000"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* polici box */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="flex flex-wrap flex-col md:flex-row w-full h-full justify-center xl-1500:justify-between items-center gap-[12px] md:gap-[27px]"
        >
          <PoliciesBox title="Facilities" content={facilityList} />
          <PoliciesBox title="Important Details" content={importantList} />
          <PoliciesBox title="Policies" content={policyList} />
          <PoliciesBox
            title="Inclusions & Exclusions"
            content={inclusionList}
          />
        </div>
      </div>
    </div>
  );
};

export default D_Click;
