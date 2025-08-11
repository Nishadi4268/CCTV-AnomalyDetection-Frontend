import { SlArrowLeft } from "react-icons/sl";
import { Input } from "@/components/Input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import signin from "/images/signup/signin.png";
import PageLoader from "../PageLoader";

// import { useState } from "react";

function ChangePW() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <div className="flex flex-col md:flex w-full relative mobile-background  ">
      {loading && <PageLoader />}{" "}
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 grid-row-1 min-h-screen lg:h-screen w-full bg-signup-bg bg-cover bg-center lg:bg-none ">
        {/* content */}
        <div
          className="overflow-hidden text-black px-[15px] sm:px-[100px] md:px-[160px] lg:px-[60px] xl:px-[60px] 2xl:px-[196px] 
         justify-center 2xl:items-center py-[163px] md:py-[126px] lg:py-[40px] xl:py-[40px] 2xl:py-[100px] lg:space-y-[30px] 2xl:space-y-[60px] w-full flex flex-col"
        >
            <div className="flex flex-col w-full font-productsansregular space-y-[20px] justify-center ">
              <div className="flex flex-row items-center justify-start gap-[30px]">
                <SlArrowLeft
                  className="w-[14px] h-[28px]  cursor-pointer"
                  onClick={() => navigate("/signin/verifyotp")}
                />
                <span className="text-[16px] ">Change password</span>
              </div>
              <span className="text-[14px] ">
                Enter a new password below to change your password{" "}
              </span>
              <div className="flex flex-col gap-[20px]">
               
                <div className=" text-[14px] flex flex-col space-y-[5px] 2xl:space-y-[8px]">
                  <span>New Password</span>
                  <div className="w-full flex h-[40px] 2xl:h-[48px]">
                    <Input
                      type="password"
                      placeholder="***************"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        e.target.value
                      }
                    />
                  </div>{" "}
                </div>
                <p className="font-helvet text-[10px] text-red-500">
                  Passwords must have at least 8 characters, lowercase, upper
                  case, a number, and a special character.
                </p>
                <div className=" text-[14px] flex flex-col space-y-[5px] 2xl:space-y-[8px]">
                  <span>Re - enter New Password</span>
                  <div className="w-full flex h-[40px] 2xl:h-[48px]">
                    <Input
                      type="password"
                      placeholder="***************"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        e.target.value
                      }
                    />
                  </div>{" "}
                </div>
              </div>
              <button
                className={`mt-[10px] bg-[#FA9231] h-[32px] lg:[40px] 2xl:h-[50px] font-productsans text-white w-full py-[8px] 2xl:py-[15px] text-[12px] md:text-[14px] 2xl:text-[16px] 
          }`}
                onClick={() => navigate("/signin")}
                type="button"
              >
                RESET PASSWORD
              </button>
            </div>
        </div>

        {/* right image */}
        <div className="w-full hidden lg:flex">
          <img src={signin} className="h-screen w-full scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
}

export default ChangePW;
