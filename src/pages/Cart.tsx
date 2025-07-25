import { ChangeEvent, useState } from "react";
import Button from "@/components/Book_Button";
import { IoSearchOutline, IoArrowBackOutline } from "react-icons/io5";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { LuUserRound, LuClock9, LuPencilLine } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import CustomRadioButton from "@/components/cart/CustomRadioButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomTimePicker from "@/components/cart/CustomTimePicker";
import { cart } from "@/constants/cartItem";
import CustomInput from "@/components/cart/CustomInput";

export default function Cart() {
  const [paymentOption, setPaymentOption] = useState("");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const paymentOptions = [
    { id: "credit", value: "credit", label: "Credit Card" },
    { id: "debit", value: "debit", label: "Debit Card" },
    { id: "crypto", value: "crypto", label: "Pay with CryptoCurrency" }
  ];
  const [expiry, setExpiry] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const timeOptions = [
    "08:00 AM - 12:00 PM",
    "12:00 PM - 04:00 PM",
    "03:00 PM - 07:00 PM"
  ];

  // New state for guest counts and time selection
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleExpDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setExpiry(value);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    value = value.slice(0, 16); // Limit to 16 digits
    const formattedValue = value.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  // Calculate sub-totals and total
  const adultSubtotal = adults * cart.adultPrice;
  const childrenSubtotal = children * cart.childrenPrice;
  const total = adultSubtotal + childrenSubtotal;

  const formattedDate = startDate
    ? startDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric"
      })
    : "";

  return (
    <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-[25px] lg:gap-[80px]">
      {/* Top header and search section */}
      <div className="flex flex-col sm:flex-row justify-between gap-[22px]">
        <div className="text-center sm:text-left">
          <p className="text-[16px] font-medium sm:font-bold leading-8">
            Discover Sri Lanka <br className="hidden sm:block" />
            in Your Way Adventure, Culture and More
          </p>
        </div>
        <div className="flex items-center justify-center w-full sm:w-[264px]">
          <div className="flex justify-between max-w-[281px] w-full space-x-[10px] border-b border-black py-1">
            <input
              placeholder="Search"
              title="Search"
              className="items-center placeholder-black text-12 sm:text-14 focus:outline-none"
            />
            <span className="flex w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]">
              <IoSearchOutline />
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-5 sm:gap-[30px]">
        {/* Breadcrumbs */}
        <div className="flex gap-[10px] items-center">
          <IoArrowBackOutline className="hidden w-4 h-4 cursor-pointer md:block" />
          <p className="text-sm leading-4 cursor-pointer text-[#919090] md:text-black">
            <span className="hover:font-semibold">Home</span> |
            <span className="hover:font-semibold"> Category</span> |
            <span className="hover:font-semibold"> Surfing</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-[30px]">
          {/* Left Form Section */}
          <div className="flex flex-col gap-[30px] w-full lg:w-[55%]">
            <div className="flex flex-col gap-[30px]">
              {/* Personal Information */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-11">
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="firstName"
                      className="text-sm leading-4 text-black"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="border border-black text-black focus:outline-none py-4 px-5 focus:border-black text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="lastName"
                      className="text-sm leading-4 text-black"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="border border-black focus:outline-none py-4 px-5 focus:border-black text-[14px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-11">
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="email"
                      className="text-sm leading-4 text-black"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-black text-black focus:outline-none py-4 px-5 focus:border-black text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="contact"
                      className="text-sm leading-4 text-black"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="border border-black focus:outline-none py-4 px-5 focus:border-black text-[14px]"
                    />
                  </div>
                </div>
              </div>

              {/* Date, Time & Guest Information */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-11">
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="date"
                      className="text-sm leading-4 text-black"
                    >
                      Date
                    </label>
                    <div className="relative flex items-center w-full px-5 py-4 border border-black">
                      <SlCalender className="mr-2 text-gray-500" />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="EEE, MMMM d"
                        className="w-full focus:outline-none bg-transparent text-black font-normal text-[14px] leading-[100%] tracking-[0%]"
                      />
                      <LuPencilLine className="absolute text-gray-500 cursor-pointer right-5" />
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="time"
                      className="text-sm leading-4 text-black"
                    >
                      Time Slot
                    </label>
                    <CustomTimePicker
                      values={timeOptions}
                      selectedTime={selectedTime}
                      onChange={setSelectedTime}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-11">
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="adults"
                      className="text-sm leading-4 text-black"
                    >
                      Guest (Adults)
                    </label>
                    <CustomInput
                      type="number"
                      id="adults"
                      name="adults"
                      value={adults}
                      onChange={(e) => setAdults(parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <label
                      htmlFor="children"
                      className="text-sm leading-4 text-black"
                    >
                      Guest (Children)
                    </label>
                    <CustomInput
                      type="number"
                      id="children"
                      name="children"
                      value={children}
                      onChange={(e) =>
                        setChildren(parseInt(e.target.value) || 0)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="requests"
                  className="text-sm leading-4 text-black"
                >
                  Special Requests
                </label>
                <textarea
                  rows={7}
                  id="requests"
                  name="requests"
                  className="border border-black text-black focus:outline-none py-4 px-5 focus:border-black text-[14px]"
                />
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <div
                className="flex gap-[43px] w-full sm:px-[63px] sm:py-[36px] py-5 px-5 border border-black items-center cursor-pointer"
                onClick={() => setShowPaymentOptions((prev) => !prev)}
              >
                {showPaymentOptions ? (
                  <FaCheckCircle className="w-[22.5px] h-[22.5px] text-[#1A3A6D]" />
                ) : (
                  <FaRegCircle className="w-[22.5px] h-[22.5px]" />
                )}
                <p className="text-base leading-[22px] cursor-pointer">
                  Payment Method
                </p>
              </div>
              <div
                className={`
                  flex flex-col w-full border border-black border-t-0 gap-6 overflow-hidden
                  transition-all duration-300
                  ${
                    showPaymentOptions
                      ? "max-h-max opacity-100 sm:py-[30px] sm:px-[62px] py-5 px-5"
                      : "max-h-0 opacity-0 py-0 px-0"
                  }
                `}
              >
                {paymentOptions.map((option) => (
                  <div key={option.id} className="flex flex-col gap-5">
                    <CustomRadioButton
                      id={option.id}
                      name="payment-option"
                      value={option.value}
                      label={option.label}
                      selectedValue={paymentOption}
                      onChange={setPaymentOption}
                    />
                    {paymentOption === option.value && (
                      <div className="flex flex-row gap-5">
                        {option.value === "credit" ||
                        option.value === "debit" ? (
                          <div className="flex flex-col gap-[20px]  w-full ">
                            <div className="flex flex-row gap-[21px]">
                              <label className="w-[96px] h-[30px] flex overflow-hidden border-[1px] border-gray-500 cursor-pointer peer-checked:border-black ">
                                <input
                                  type="radio"
                                  name="payment"
                                  value="visa"
                                  className="hidden peer"
                                />
                                <img
                                  alt="visalogo"
                                  src="/images/visa-blue.png"
                                  className="object-contain w-[50px] h-[26px] mx-auto"
                                />
                              </label>

                              <label className="w-[96px] h-[30px] flex items-center justify-center overflow-hidden border-[1px] border-gray-500 cursor-pointer peer-checked:border-black">
                                <input
                                  type="radio"
                                  name="payment"
                                  value="mastercard"
                                  className="hidden peer"
                                />
                                <img
                                  alt="mastercardlogo"
                                  src="/images/master.png"
                                  className="object-contain w-[38px] h-[24px]"
                                />
                              </label>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-col min-[1540px]:flex-row gap-[20px] md:gap-[30px] w-full">
                              <div className="flex flex-col gap-[10px] w-full lg:min-w-[270px]">
                                <label htmlFor="card-number">Card Number</label>
                                <input
                                  type="text"
                                  id="card-number"
                                  name="card-number"
                                  value={cardNumber}
                                  onChange={handleCardNumberChange}
                                  placeholder="1234 1234 1234 1234"
                                  className="border border-black text-gray-400 focus:outline-none px-2 py-2 focus:border-black placeholder:text-[14px] placeholder:text-[#B0B0B0]  w-full "
                                  maxLength={19}
                                />
                              </div>
                              <div className="flex flex-col w-full gap-[10px]">
                                <label htmlFor="card-number">
                                  Expiration Date
                                </label>
                                <input
                                  type="text"
                                  id="card-number"
                                  name="card-number"
                                  placeholder="MM/YY"
                                  value={expiry}
                                  onChange={handleExpDateChange}
                                  className="border border-black text-gray-400 focus:outline-none px-2 py-2 focus:border-black placeholder:text-[14px] placeholder:text-[#B0B0B0]"
                                  maxLength={5}
                                />
                              </div>
                              <div className="flex flex-col w-full gap-[10px]">
                                <label htmlFor="card-number">
                                  Security Code
                                </label>
                                <input
                                  type="number"
                                  id="card-number"
                                  name="card-number"
                                  maxLength={4}
                                  placeholder="CVC"
                                  className="border border-black text-gray-400 focus:outline-none px-2 py-2 focus:border-black placeholder:text-[14px] placeholder:text-[#B0B0B0]"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          "ETH"
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary Section */}
          <div className="flex flex-col lg:gap-[30px] gap-[16px] w-full lg:w-[40%] bg-[#F3F3F3] lg:bg-transparent p-5 max-h-max">
            <img src={cart.image} alt="Cart" />
            <div className="flex flex-col gap-5 md:gap-[30px] bg-[#F3F3F3] md:py-[39px] lg:px-[30px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <p className="text-[14px] sm:text-[16px] font-bold leading-4">
                    {cart.title}
                  </p>
                  <p className="text-xs font-normal text-justify sm:text-sm">
                    {cart.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3 sm:justify-between sm:flex-row lg:flex-col xl:flex-row">
                      {/* Adults Summary */}
                      <div className="flex flex-col w-full gap-2">
                        <div className="flex gap-1">
                          <p className="text-xs font-normal">
                            Adults ({adults})
                          </p>
                          <LuUserRound />
                          <p className="text-xs font-normal">
                            $ {cart.adultPrice}
                          </p>
                        </div>
                        <div className="w-full border-[0.5px] border-black" />
                        <div className="flex justify-between w-full">
                          <p className="text-xs font-normal">Sub total Price</p>
                          <p className="text-xs font-normal">
                            $ {adultSubtotal}
                          </p>
                        </div>
                      </div>
                      {/* Children Summary */}
                      <div className="flex flex-col w-full gap-2">
                        <div className="flex gap-1">
                          <p className="text-xs font-normal">
                            Children ({children})
                          </p>
                          <LuUserRound />
                          <p className="text-xs font-normal">
                            $ {cart.childrenPrice}
                          </p>
                        </div>
                        <div className="w-full border-[0.5px] border-black" />
                        <div className="flex justify-between w-full">
                          <p className="text-xs font-normal">Sub total Price</p>
                          <p className="text-xs font-normal">
                            $ {childrenSubtotal}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full border-[0.5px] border-black" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between w-full text-sm font-bold leading-6">
                      <p>Total</p>
                      <p>$ {total}</p>
                    </div>
                    <div className="w-full border-[0.5px] border-black" />
                  </div>
                  <div className="flex flex-col xl:flex-row justify-between w-full gap-[17px]">
                    <div className="flex justify-between gap-2 text-xs font-normal leading-3 xl:flex-col xl:justify-normal">
                      <div className="flex gap-1">
                        <SlCalender className="h-[12px] w-[12px]" />
                        <p>{formattedDate}</p>
                      </div>
                      <div className="flex gap-1">
                        <LuClock9 className="h-[12px] w-[12px] " />
                        <p>{selectedTime}</p>
                      </div>
                    </div>
                    <Button
                      text="BOOK NOW"
                      textColor="text-black"
                      width={`w-full sm:w-[150px] md:w-[199px] !duration-1000 bg-[#1A3A6D] hover:bg-transparent ${
                        showPaymentOptions
                          ? "hover:bg-white hover:scale-[1.05]"
                          : "bg-white !border-0 !cursor-not-allowed "
                      } `}
                      height="h-[42px]"
                      btn4="btn-4"
                    />
                  </div>
                </div>
              </div>
              <p className="text-[10px] leading-4 text-justify md:text-xs">
                By Clicking the Pay Online button you have agree to term of
                <Link
                  to={"/condition"}
                  className="text-[#1A3A6D] cursor-pointer"
                >
                  {" "}
                  Terms Condition{" "}
                </Link>
                and Person
                <Link to={"/privacy"} className="text-[#1A3A6D] cursor-pointer">
                  {" "}
                  privacy policy{" "}
                </Link>
                related to Thabili.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
