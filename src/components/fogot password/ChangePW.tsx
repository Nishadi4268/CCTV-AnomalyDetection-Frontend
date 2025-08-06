import { SlArrowLeft } from "react-icons/sl";
import { Input } from "@/components/Input";
// import { useState } from "react";

function ChangePW() {
  return (
    <div className="">
      <div className="flex flex-col w-full h-[236px] font-productsansregular space-y-[20px]">
        <div className="flex flex-row items-center justify-start gap-[30px]">
          <SlArrowLeft className="w-[14px] h-[28px] text-[#919090]" />
          <span className="text-[16px] text-[#919090]">Change password</span>
        </div>
        <span className="text-[14px] text-[#919090]">
          Enter a new password below to change your password{" "}
        </span>
        <div className="flex flex-col gap-[20px]">
          <div className="text-[#919090] text-[14px] flex flex-col space-y-[5px] 2xl:space-y-[8px]">
            <span>Old Password</span>
            <div className="w-full flex h-[40px]2xl:h-[48px] ">
              <Input
                type="password"
                placeholder="***************"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  (e.target.value)
                }
              />
            </div>
          </div>
          <div className="text-[#919090] text-[14px] flex flex-col space-y-[5px] 2xl:space-y-[8px]">
            <span>New Password</span>
            <div className="w-full flex h-[40px] 2xl:h-[48px]">
              <Input
                type="password"
                placeholder="***************"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  (e.target.value)
                }
              />
            </div>{" "}
          </div>
          <p className="font-helvet text-[10px] text-[#919090]">
            Passwords must have at least 8 characters, lowercase, upper case, a
            number, and a special character.
          </p>
          <div className="text-[#919090] text-[14px] flex flex-col space-y-[5px] 2xl:space-y-[8px]">
            <span>Re - enter</span>
            <div className="w-full flex h-[40px] 2xl:h-[48px]">
              <Input
                type="password"
                placeholder="***************"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  (e.target.value)
                }
              />
            </div>{" "}
          </div>
        </div>
        <button
          className={`mt-[10px] bg-[#FA9231] h-[32px] lg:[40px] 2xl:h-[50px] font-productsans text-white w-full py-[8px] 2xl:py-[15px] text-[12px] md:text-[14px] 2xl:text-[16px] 
          }`}
          type="button"
        //   disabled={!email || Boolean(emailError)}
        //   onClick={() => setShowChangePW(true)} // 👉 Show ChangePW
        >
          RESET PASSWORD
        </button>
      </div>
    </div>
  );
}

export default ChangePW;