import signup from "/images/signup/signup.png";
import { useState, useEffect } from "react";
import PageLoader from "@/components/PageLoader";
import thabili from "/images/navbar/thabili.png";
import { Input } from "@/components/Input";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function Forgetpw() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Email format validation (moved to useEffect)
  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      setEmailError("Wrong Email Format.");
    } else {
      setEmailError(""); // Clear error if format is correct
    }
  }, [email]); // This will run whenever the email state changes

  return (
    <div className="flex flex-col md:flex w-full relative overflow-hidden">
      {loading && <PageLoader />}
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 grid-row-1 min-h-screen lg:h-screen w-full bg-signup-bg bg-cover bg-center lg:bg-none ">
        {/* Left side */}
        <div className="h-full flex flex-col justify-center items-center px-[15px] 2xl:px-[196px] min-h-screen w-full">
          <div className="flex flex-col w-[345px] h-[349px] lg:w-[400px] xl:w-[544px] xl:h-[414px] space-y-[40px] xl:space-y-[60px]">
            <img
              src={thabili}
              className=" w-[188px] xl:w-[230px] 2xl:w-[280px] flex "
            />

            {/* Content */}
            <div
              onClick={() => navigate("/signin")}
              className="flex flex-col w-full h-[236px] font-productsansregular space-y-[20px] "
            >
              <div className="flex flex-row gap-[30px] items-center">
                <SlArrowLeft className="cursor-pointer text-[#919090]" />
                <span className="text-[16px] text-[#919090] cursor-pointer">
                  Forgot your password?
                </span>
              </div>
              <span className="text-[14px] text-[#919090]">
                Enter your email and we will help you reset your password.
              </span>
              <div className="text-[#919090] text-[14px] flex flex-col space-y-[5px] 2xl:space-y-[8px]">
                <span>Email</span>
                <div className="w-full flex h-[40px] 2xl:h-[48px]">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>
              <button
                className={`bg-[#1A3A6D] h-[32px] lg:[40px] 2xl:h-[50px] font-productsans text-white w-full py-[8px] 2xl:py-[15px] text-[12px] md:text-[14px] 2xl:text-[16px] ${
                  !email || emailError ? "cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!email || Boolean(emailError)} // Convert emailError to a boolean
              >
                RESET PASSWORD
              </button>
            </div>
          </div>
        </div>

        <div className="w-full hidden lg:flex">
          <img src={signup} className="h-screen w-full" />
        </div>
      </div>
    </div>
  );
}

export default Forgetpw;
