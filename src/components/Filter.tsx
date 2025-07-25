import { useState, useRef, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { WiTime9 } from "react-icons/wi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from "react-time-picker";
import { LuArrowLeftFromLine } from "react-icons/lu";
import dateImage from "/images/date.png";
import priceImage from "/images/price.png";

// import { GoArrowLeft } from "react-icons/go";
// interface FilterProps {
//   // title: string;
//   children?: React.ReactNode;
//   // icon?: React.ReactNode;
// }

function Filter() {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // const [time, setTime] = useState("");
  const [time, setTime] = useState("");
  // const [amPm, setAmPm] = useState<"AM" | "PM">("AM");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const handleTimeSelect = (time: string | null) => {
    setSelectedTime(time);
    setShowTimePicker(false); // Hide dropdown after selection
  };
  // const toggleAmPm = () => {
  //   setAmPm((prev) => (prev === "AM" ? "PM" : "AM"));
  // };
  const toggleMenu = () => {
    setIsFilterMenuOpen((prev) => !prev);
  };
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };
  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen((prev) => !prev);
  };

  const handleLocationSelect = (location: string | null) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
  };
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    } else {
      setSelectedDate(null); // Handle null case if needed
    }
  };
  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen((prev) => !prev);
  };

  const handlePriceSelect = (price: string | null) => {
    setSelectedPrice(price);
    setIsPriceDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the dropdowns
      const locationDropdown = document.getElementById("location-dropdown");
      const priceDropdown = document.getElementById("price-dropdown");
      if (
        locationDropdown &&
        !locationDropdown.contains(event.target as Node)
      ) {
        setIsLocationDropdownOpen(false);
      }
      if (priceDropdown && !priceDropdown.contains(event.target as Node)) {
        setIsPriceDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isFilterMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent full-page scroll
    } else {
      document.body.style.overflow = "auto"; // Restore normal scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isFilterMenuOpen]);
  return (
    <div className="relative">
      <div className="flex flex-col items-start justify-between w-full gap-[10px]">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="w-full justify-between items-center flex flex-row">
            {/* Filter web*/}
            <div className="hidden xl-900:flex flex-row gap-[50px] 2xl:gap-[116px]">
              <div
                onClick={toggleFilterVisibility}
                className="flex flex-row font-productsansregular items-center justify-center hover:cursor-pointer border border-black py-[13px] px-[15px] sm:py-[11px] sm:px-[49px] w-full gap-[8px]"
              >
                <h1 className="text-14 text-nowrap">Filter by</h1>
                <div className="flex items-center justify-center">
                  <HiOutlineAdjustmentsHorizontal className="w-[20px] h-[20px]" />
                </div>
              </div>

              {isFilterVisible && (
                <div className="flex flex-row gap-[25px] 2xl:gap-[56px] duration-1000 transition-all ease-in">
                  {/* Location filter */}
                  <div
                    id="location-dropdown"
                    className="relative font-productsansregular border border-black py-[13px] px-[15px] sm:py-[11px] w-full 2xl:w-[183px]"
                  >
                    <div
                      onClick={toggleLocationDropdown}
                      className="flex items-center justify-center gap-[12px] cursor-pointer"
                    >
                      <IoLocationOutline className="w-[20px] h-[20px]" />
                      <h1 className="text-12">
                        {selectedLocation || "Locations"}
                      </h1>
                      <RiArrowDownSLine className="w-[20px] h-[20px]" />
                    </div>
                    {isLocationDropdownOpen && (
                      <div className="absolute top-[50px] left-0 w-full bg-white border border-gray-300 shadow-lg z-10">
                        <ul>
                          {/* Location Options */}
                          {["Matara", "Weligama", "Ratnapura"].map(
                            (location) => (
                              <li
                                key={location}
                                onClick={() => handleLocationSelect(location)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {location}
                              </li>
                            )
                          )}
                          {/* Clear Location Option */}
                          <li
                            onClick={() => handleLocationSelect(null)}
                            className="px-4 py-2 text-12 text-end cursor-pointer text-red-500"
                          >
                            Clear Location
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Date filter */}
                  <div className="font-productsansregular border border-black py-[13px] px-[15px] sm:py-[11px] w-full 2xl:w-[183px]">
                    <div className="flex items-center justify-center gap-[12px] px-[15px]">
                      <div className="flex flex-row items-center gap-[8px] relative">
                        <img
                          src={dateImage}
                          onClick={openDatePicker}
                          className="w-[16px] h-[16px] cursor-pointer"
                        />
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => handleDateChange(date)} // Ensure date can be null
                          dateFormat="MM/dd/yyyy"
                          className=" text-black focus:outline-none w-auto text-12 max-w-[80px] border-none"
                          placeholderText="Date"
                          // placeholderTextStyle={{ color: "black" }} // Set placeholder text color
                          ref={datePickerRef}
                        />
                      </div>
                      {/* Clear Date */}
                      {selectedDate && (
                        <h1
                          className="text-12 z-20 cursor-pointer text-black"
                          onClick={() => setSelectedDate(null)}
                        >
                          Clear
                        </h1>
                      )}
                    </div>
                  </div>

                  {/* Price filter */}
                  <div
                    id="price-dropdown"
                    className="relative font-productsansregular border border-black py-[13px] px-[15px] sm:py-[11px] w-full 2xl:w-[183px]"
                  >
                    <div
                      onClick={togglePriceDropdown}
                      className="flex items-center justify-center gap-[12px] cursor-pointer"
                    >
                      <img
                        src={priceImage}
                        className="bg-white w-[20px] h-[14px]"
                      />
                      <h1 className="text-12 w-[80px] max-w-[80px]">
                        {selectedPrice || "Price"}{" "}
                      </h1>
                      <RiArrowDownSLine className="w-[20px] h-[20px]" />
                    </div>
                    {isPriceDropdownOpen && (
                      <div className="absolute top-[50px] left-0 w-full bg-white border border-gray-300 shadow-lg z-10">
                        <ul>
                          {["100", "200", "400"].map((price) => (
                            <li
                              key={price}
                              onClick={() => handlePriceSelect(price)}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {price}
                            </li>
                          ))}
                          <li
                            onClick={() => handlePriceSelect(null)}
                            className="px-4 py-2 text-12 text-end cursor-pointer text-red-500"
                          >
                            Clear Price
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {isFilterVisible && (
            <div className="hidden lg:flex  flex-row gap-[9px] items-center w-full justify-end">
              <h1
                className="cursor-pointer hover:opacity-75 text-12 lg:text-14 font-productsansregular"
                onClick={() => setIsFilterVisible(false)}
              >
                Clear Filters{" "}
              </h1>
              <LuArrowLeftFromLine className="w-[38px] h-[38px]" />
            </div>
          )}
        </div>
        {isFilterVisible && (
          <div className="hidden xl-900:flex lg:hidden flex-row gap-[9px] items-center w-full justify-end">
            <h1
              className="cursor-pointer hover:opacity-75 text-12 lg:text-14 font-productsansregular"
              onClick={() => setIsFilterVisible(false)}
            >
              Clear Filters{" "}
            </h1>
            <LuArrowLeftFromLine className="w-[20px] h-[20px]" />
          </div>
        )}
      </div>

      {/* filter mobile */}
      <div className="relative flex xl-900:hidden flex-col gap-[116px] items-center">
        <div
          ref={filterRef}
          className="flex flex-row items-center justify-between font-productsansregular border border-black h-[40px] sm:h-auto py-[12px] px-[15px] sm:py-[11px] 2xl:px-[49px] w-full"
        >
          <h1 className="text-14 text-nowrap">Filter by</h1>
          <div
            onClick={toggleMenu}
            className="flex items-center justify-center cursor-pointer"
          >
            <HiOutlineAdjustmentsHorizontal className="w-[16px] h-[16px]" />
          </div>
        </div>
        {/* Filter Menu */}
        {isFilterMenuOpen && (
          <>
            <div
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              className="absolute right-0 top-[40px] bg-white z-20 px-[18px] py-[14px] w-[219px]"
            >
              <div className="flex flex-col gap-[16px]">
                {/* Location Filter */}
                <div className="font-productsansregular justify-start flex border border-black px-[15px]  2xl:px-[49px] w-[183px] h-[38px]">
                  <div
                    onClick={toggleLocationDropdown}
                    className="flex items-center justify-between w-full gap-[12px]"
                  >
                    <div className="flex flex-row gap-[12px] ">
                      <IoLocationOutline className="w-[14px] md:w-[20px] h-[18px] md:h-[20px]" />
                      <h1 className="text-12">
                        {selectedLocation || "Locations"}
                      </h1>
                    </div>
                    <RiArrowDownSLine className="w-[12px] md:w-[20px] h-[24px] md:h-[20px] flex justify-end" />
                  </div>
                  {isLocationDropdownOpen && (
                    <div className="absolute top-[50px] left-0 w-full bg-white border border-gray-300 shadow-lg z-10">
                      <ul>
                        {/* Location Options */}
                        {["Matara", "Weligama", "Ratnapura"].map((location) => (
                          <li
                            key={location}
                            onClick={() => handleLocationSelect(location)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
                          >
                            {location}
                          </li>
                        ))}
                        {/* Clear Location Option */}
                        <li
                          onClick={() => handleLocationSelect(null)}
                          className="px-4 py-2 text-12 cursor-pointer text-red-500 text-end"
                        >
                          Clear Location
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Date filter */}
                <div className="font-productsansregular border border-black flex items-center px-[15px] 2xl:px-[49px] w-[183px] h-[38px]">
                  <div className="flex items-center justify-center gap-[8px]">
                    <div className="flex flex-row items-center gap-[12px] relative">
                      <img
                        src={dateImage}
                        onClick={openDatePicker}
                        className="w-[16px] md:w-[20px] h-[16px] md:h-[20px] cursor-pointer"
                      />
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => handleDateChange(date)} // Ensure date can be null
                        dateFormat="MM/dd/yyyy"
                        className="text-black focus:outline-none w-[90px] text-12 max-w-[120px]"
                        placeholderText="Date"
                        // placeholderTextStyle={{ color: "black" }} // Set placeholder text color
                        ref={datePickerRef}
                      />
                    </div>
                    {/* Clear Date */}
                    {selectedDate && (
                      <h1
                        className="text-12 cursor-pointer text-red-500"
                        onClick={() => setSelectedDate(null)}
                      >
                        Clear
                      </h1>
                    )}
                  </div>
                </div>

                {/* Price filter */}
                <div
                  id="price-dropdown"
                  className="relative font-productsansregular border border-black py-[8px] px-[15px] sm:py-[11px] 2xl:px-[49px] w-[183px] h-[38px]"
                >
                  <div
                    onClick={togglePriceDropdown}
                    className="flex w-full items-center justify-between gap-[12px]"
                  >
                    <div className="flex flex-row gap-[12px] items-center">
                      <img
                        src={priceImage}
                        className="bg-white w-[20px] h-[14px] md:h-[20px]"
                      />
                      <h1 className="text-12">{selectedPrice || "Price"}</h1>
                    </div>
                    <RiArrowDownSLine className="w-[12px] md:w-[20px] h-[24px] md:h-[20px] cursor-pointer" />
                  </div>
                  {isPriceDropdownOpen && (
                    <div className="absolute top-[50px] left-0 w-full bg-white border border-gray-300 shadow-lg z-10">
                      <ul>
                        {["100", "200", "400"].map((price) => (
                          <li
                            key={price}
                            onClick={() => handlePriceSelect(price)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {price}
                          </li>
                        ))}
                        <li
                          onClick={() => handlePriceSelect(null)}
                          className="px-4 py-2 text-12 text-end cursor-pointer text-red-500"
                        >
                          Clear Price
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Time Filter */}
                <div className="relative font-productsansregular border border-black py-[7px] px-[15px] sm:py-[11px] 2xl:px-[49px] w-[183px] h-[38px]">
                  <div className="w-full flex items-center justify-between gap-[12px]">
                    {!showTimePicker && (
                      <div
                        className="flex flex-row gap-[12px] items-center cursor-pointer"
                        onClick={() => setShowTimePicker(true)}
                      >
                        <WiTime9 className="bg-white w-[16px] md:w-[20px] h-[16px] md:h-[20px]" />
                        <h1 className="text-12">
                        {selectedTime || "Time"}
                          {/* Show selected time */}
                        </h1>
                      </div>
                    )}
                    {/* <h1 className="text-12">
                      {time ? `${time} ${amPm}` : ""} 
                    </h1> */}
                    <h1
                      className="text-12 cursor-pointer"
                      onClick={() => {
                        setTime("");
                        handleTimeSelect(time);
                      }}
                    >
                      Clear
                    </h1>
                  </div>

                  {showTimePicker && !time && (
                    // <div className="-mt-4 bg-transparent w-[100px] absolute">
                    //   <div className="flex items-center gap-2">
                    //     {/* TimePicker */}
                    //     <TimePicker
                    //       value={time}
                    //       onChange={(value) => setTime(value ?? "")}
                    //       clearIcon={null}
                    //       disableClock={true}
                    //       className="w-full rounded px-[8px] text-12"
                    //       format="h:mm"
                    //     />
                    //     {/* Custom AM/PM Toggle */}
                    //     <button
                    //       onClick={toggleAmPm}
                    //       className="px-3 rounded text-black text-12"
                    //     >
                    //       {amPm}
                    //     </button>
                    //   </div>
                    // </div>
                      <div className="absolute p-[11px] top-[30px] left-[14px] w-[153px] bg-white border border-gray-300 shadow-lg z-20 text-12">
                        <ul className="border border-black rounded-[10px] w-[131px] h-[154px] flex flex-col items-center justify-between px-[11px] py-[21px]">
                          {[
                            "09.00 AM",
                            "10.00 AM",
                            "01.00 PM",
                            "11.00 AM",
                            "09.00 AM"
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

              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="mt-[22px] w-full text-12 lg:text-14  font-productsans text-end text-black "
              >
                Clear Filters
              </button>
            </div>{" "}
            {/* blur background */}
            <div className="bg-white/10 backdrop-blur-md absolute top-[40px] w-screen h-[calc(500vh)] z-10"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default Filter;
