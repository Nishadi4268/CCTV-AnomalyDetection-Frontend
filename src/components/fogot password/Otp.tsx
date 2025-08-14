import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import signin from "/images/signup/signin.png";
import { useState } from "react";
import { Input } from "@/components/Input";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const isOtpFilled = otp.length === 6;

  return (
    <div className="grid lg:grid-cols-2 grid-row-1 min-h-screen lg:h-screen w-full md:px-[16px] lg:px-0 mobile-background bg-cover bg-center lg:bg-none ">
      <div
        className="overflow-hidden px-[15px] sm:px-[100px] md:px-[160px] lg:px-[60px] xl:px-[60px] 2xl:px-[196px] 
         justify-center 2xl:items-center py-[163px] md:py-[126px] lg:py-[40px] xl:py-[40px] 2xl:py-[100px] lg:space-y-[30px] 2xl:space-y-[60px] w-full flex flex-col"
      >
        <div className="flex flex-col font-productsansregular space-y-[20px] justify-center">
          <div className="flex flex-row items-center justify-start gap-[30px] ">
            <SlArrowLeft
              className="w-[14px] h-[28px] cursor-pointer"
              onClick={() => navigate("/signin")}
            />
            <span className="text-[16px]">Enter OTP</span>
          </div>
          <div className="flex flex-col w-full xl:min-w-[450px] space-y-[6px] md:space-y-[10px]">
            <span className="text-12 md:text-[14px] font-productsansregular">
              Email
            </span>
            <Input
              type="email"
              placeholder="Enter Your Email"
              // onChange={(e) => setEmail(e.target.value)}
              // disabled={loading}
            />
            <h1 className="w-full text-end text-12 md:text-14 text-red-500 italic underline cursor-pointer">
              Send OTP
            </h1>
          </div>
          <div className="flex flex-col space-y-[30px] ">
            <div className="flex flex-col space-y-[12px]">
              <span className="text-[14px]">
                Enter the 4-digit OTP code send to the email
              </span>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                //   pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <div className="px-1">--</div>
                  <InputOTPSlot className="border-l" index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="flex flex-col gap-[20px]">
                <div className="text-[14px] flex space-x-[4px]">
                  <span>Haven't received the OTP?</span>
                  <span
                    className="text-[#FA9231] cursor-pointer"
                    onClick={() => navigate("")}
                  >
                    Resend
                  </span>
                </div>
              </div>
            </div>
            <button
              className={`${
                isOtpFilled
                  ? "bg-[#FA9231] cursor-pointer"
                  : "cursor-not-allowed"
              } mt-[10px] bg-[#D9D9D9] h-[32px] lg:[40px] 2xl:h-[50px] font-productsans w-full py-[8px] 2xl:py-[15px] text-[12px] md:text-[14px] 2xl:text-[16px] 
          }`}
              onClick={() => navigate("/signin/change-password")}
              type="button"
            >
              VERIFY OTP
            </button>
          </div>
        </div>
      </div>
      {/* right image */}
      <div className="w-full hidden lg:flex">
        <img src={signin} className="h-screen w-full scale-x-[-1]" />
      </div>
    </div>
  );
}

export default Otp;
