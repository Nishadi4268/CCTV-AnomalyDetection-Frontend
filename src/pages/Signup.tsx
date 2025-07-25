import signup from "/images/signup/signup.jpg";
import apple from "/images/signup/apple.png";
import google from "/images/signup/google.png";
import Facebook from "/images/signup/Facebook.png";
import { Input } from "@/components/Input";
// import signupmob from "/images/signup/signupmob.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageLoader from "@/components/PageLoader";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pwError, setPWError] = useState("");

  // Validate email format using RegEx
  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid) {
      setEmailError("Wrong Email Format.");
      return;
    } else {
      setEmailError(""); // Clear error if format is correct
    }
    if (password !== confirmPassword) {
      setPWError("Passwords do not match.");
      return;
    } else {
      setPWError(""); // Clear error when passwords match
    }

    const data = { email, password };
    console.log("Signup Data:", data);
    navigate("/");
  };

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }
  //   const data = { email, password };
  //   console.log(data);
  // };

  const handleAppleSignin = () => {
    window.location.href = "https://appleid.apple.com/auth/authorize";
  };

  return (
    <div className="flex flex-col md:flex w-full relative overflow-hidden">
      {loading && <PageLoader />}
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 grid-row-1 min-h-screen lg:h-screen  w-full bg-signup-bg bg-cover bg-center lg:bg-none ">
        {/* left side */}
        <div
          className="h-full flex flex-col justify-center 2xl:items-center px-[15px] sm:px-[100px] xl:items-center md:px-[160px] lg:px-[60px] 2xl:px-[196px] 
   min-h-screen md:py-[126px]  lg:py-[40px]  2xl:py-[100px] w-full"
        >
          <div className="flex flex-col lg:space-y-[30px] 2xl:space-y-[60px]  xl:w-[540px] ">
            <div className="font-productsans text-[32px] lg:flex hidden">
              Welcome to the Thabili
            </div>
            <div className="flex flex-col font-productsans text-[20px] md:text-[32px] lg:hidden mb-[40px] ">
              Welcome to the <br />
              <span className="text-[36px] md:text-[60px] -mt-3 md:-mt-4">
                Thabili
              </span>
            </div>
            {/* content */}
            <div className="space-y-[53px] lg:space-y-[40px] w-full">
              {/* email */}
              <form onSubmit={handleSignup}>
                {" "}
                <div className="space-y-[30px] md:space-y-[48px]">
                  <div className="space-y-[19px] xl:space-y-[29px] flex flex-col  ">
                    <div className="flex flex-col w-full space-y-[6px] md:space-y-[10px]  ">
                      <span className="text-[12px] md:text-[14px] font-productsansregular">
                        {" "}
                        Email
                      </span>
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                      />
                      {emailError && (
                        <span className="text-red-500 text-sm font-productsansregular">
                          {emailError}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col w-full space-y-[6px] md:space-y-[10px]">
                      <span className="text-[12px] md:text-[14px] font-productsansregular">
                        {" "}
                        Password
                      </span>
                      <Input
                        type="password"
                        placeholder="Enter Your Password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPassword(e.target.value)
                        }
                      />
                    </div>

                    <div className="flex flex-col w-full space-y-[6px] md:space-y-[10px]">
                      <span className="text-[12px] md:text-[14px] font-productsansregular">
                        Confirm Password
                      </span>
                      <Input
                        type="password"
                        placeholder="ReEnter Your Password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setConfirmPassword(e.target.value)
                        }
                      />
                      {pwError && (
                        <span className="text-red-500 text-sm font-productsansregular">
                          {pwError}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className={`bg-[#1A3A6D] font-productsans h-[32px] md:h-[50px] text-white w-full py-[8px] 2xl:py-[10px] text-12 md:text-16 ${
                      !email || !password || !confirmPassword
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                    type="submit"
                    disabled={!email || !password || !confirmPassword}
                  >
                    SIGN UP
                  </button>
                </div>
              </form>

              <span className="font-productsansregular flex justify-center text-[10px] md:text-[14px]">
                or continue with
              </span>
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
                <div className="font-productsansregular flex text-[10px] md:text-[14px] space-x-[10px]">
                  <span className="text-black opacity-50">
                    If you have an account?
                  </span>
                  <button
                    className="text-[#1A3A6D] hover:text-[#ce8a4a]"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full hidden lg:flex">
          <img src={signup} className="h-screen w-full" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
