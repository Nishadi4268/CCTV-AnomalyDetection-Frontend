import signin from "/images/signup/signin.png";
import apple from "/images/signup/apple.png";
import google from "/images/signup/google.png";
import Facebook from "/images/signup/Facebook.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import PageLoader from "@/components/PageLoader";
import Otp from "@/components/fogot password/Otp";
import { useLocation } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwError, setPWError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isOtpRoute = location.pathname === "/signin/verifyotp";

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Wrong Email Format.");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPWError("Please enter your password");
      return;
    } else {
      setPWError("");
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          password: password.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Sign-in failed");
      }

      // Successful sign-in
      console.log("Sign-in successful:", data);

      if (data.token) {
  localStorage.setItem("authToken", data.token);
  console.log("Generated Token:", data.token); // ✅ check token in console
  console.log("Token in localStorage:", localStorage.getItem("authToken")); // ✅ verify storage
}


      navigate("/");
    } catch (error) {
      console.error("Sign-in error:", error);

      // Type-safe error handling
      if (error instanceof Error) {
        setPWError(error.message || "Sign-in failed. Please try again.");
      } else {
        setPWError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignin = () => {
    window.location.href = "https://appleid.apple.com/auth/authorize";
    // Replace with actual Apple Sign-In URL for your application.
  };
  return (
    <div className="flex flex-col md:flex w-full relative mobile-background  ">
      {loading && <PageLoader />}
      <div className="grid lg:grid-cols-2 grid-row-1 min-h-screen lg:h-screen w-full md:px-[16px] lg:px-0">
        <div
          className="overflow-hidden px-[15px] sm:px-[100px] md:px-[160px] lg:px-[60px] xl:px-[60px] 2xl:px-[196px] 
         justify-center 2xl:items-center py-[163px] md:py-[126px] lg:py-[40px] xl:py-[40px] 2xl:py-[100px] lg:space-y-[30px] 2xl:space-y-[60px] w-full flex flex-col"
        >
          {isOtpRoute ? (
            <Otp />
          ) : (
            <div className="flex flex-col lg:space-y-[30px] 2xl:space-y-[60px] ">
              <div className="items-center justify-center text-center font-productsans text-[32px] lg:flex hidden mb-5">
                Welcome to SafeVision
              </div>
              <div className="text-center flex flex-col font-productsans text-[20px] md:text-[32px] lg:hidden mb-[40px]">
                Welcome to
                <span className="text-[36px] md:text-[60px] -mt-3 md:-mt-4 mb-5">
                SafeVision
              </span>
              </div>
              {/* content */}
              <div className="space-y-[53px] lg:space-y-[80px] 2xl:w-[540px]">
                {/* email, pw */}
                <form onSubmit={handleSignin}>
                  <div className="space-y-[12px] xl:space-y-[16px]">
                    <div className="space-y-[18px] xl:space-y-[29px] flex flex-col">
                      <div className="flex flex-col w-full space-y-[6px] md:space-y-[10px]">
                        <span className="text-12 md:text-[14px] font-productsansregular">
                          Email
                        </span>
                        <Input
                          type="email"
                          placeholder="Enter Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                          // disabled={loading}
                        />
                        {emailError && (
                          <span className="text-red-500 text-sm">
                            {emailError}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col w-full space-y-[6px] md:space-y-[10px]">
                        <span className="text-12 md:text-[14px] font-productsansregular">
                          Password
                        </span>
                        <Input
                          type="password"
                          placeholder="Enter Your Password"
                          onChange={(e) => setPassword(e.target.value)}
                          // disabled={loading}
                        />
                        {pwError && <div className="error">{pwError}</div>}
                      </div>
                    </div>
                    <h1
                      className="xl:mt-[2px] font-productsansregular text-end w-full cursor-pointer hover:opacity-75 hover:text-[#1A3A6D] text-10 lg:text-12"
                      onClick={() => {
                        navigate("/signin/verifyotp");
                      }}
                    >
                      Forget Password ?
                    </h1>
                    <button
                      className={`bg-[#1A3A6D] h-[32.17px] lg:h-[50px] font-productsans text-white w-full py-[8px] 2xl:py-[10px] text-12 md:text-16 ${
                        !email || !password ? "cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={!email || !password}
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>

                <h1 className="font-productsansregular flex justify-center text-[10px] md:text-14">
                  or continue with
                </h1>
                {/* icons */}
                <div className="space-y-[12px] justify-center flex flex-col items-center  ">
                  {/* icons */}
                  <div className="flex space-x-[5px] md:space-x-[8px]">
                    <button
                      className="w-[68px] md:w-[106px] h-[30px] md:h-[46px] rounded-[6px] md:rounded-[10px] border-[1px] md:border-[0.5px] border-black border-opacity-20 bg-white"
                      onClick={() =>
                        (window.location.href = "https://www.google.com")
                      }
                    >
                      <img
                        src={google}
                        className="rotate-y-on-hover w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                      />
                    </button>

                    <button
                      className="w-[68px] md:w-[106px] h-[30px] md:h-[46px] rounded-[6px] md:rounded-[10px] border-[1px] md:border-[0.5px] border-black border-opacity-20 bg-white"
                      onClick={handleAppleSignin}
                    >
                      <img
                        src={apple}
                        className="rotate-y-on-hover w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                      />
                    </button>
                    <button
                      className="w-[68px] md:w-[106px] h-[30px] md:h-[46px] rounded-[6px] md:rounded-[10px] border-[1px] md:border-[0.5px] border-black border-opacity-20 bg-white"
                      onClick={() =>
                        (window.location.href = "https://www.facebook.com")
                      }
                    >
                      <img
                        src={Facebook}
                        className="rotate-y-on-hover w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                      />
                    </button>
                  </div>
                  {/* text */}
                  <div className="font-productsansregular flex text-[10px] md:text-14 gap-[10px]">
                    <h1 className="text-black opacity-50">
                      If you haven’t an account?
                    </h1>
                    <button
                      className="text-[#1A3A6D] hover:text-[#ce8a4a]"
                      onClick={() => navigate("/signup")}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full hidden lg:flex">
          <img src={signin} className="h-screen w-full scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
