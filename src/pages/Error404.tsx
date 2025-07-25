import ErrorImage from "/images/404.png";
import Error_1 from "/images/404_1.png";
import Button from "@/components/Book_Button";

function Error404() {
  return (
    <div className="relative h-screen w-full text-black  -mt-4 md:-mt-10">
      {/* This container will center the content */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <img src={Error_1} alt="Error 404" />
        <h1 className="text-[48px] font-productsans mt-[16px] md:mt-[28px]">
          Oops <span className="text-[#1A3A6D]">!</span>
        </h1>
        <h1 className="text-24 font-productsansblack mt-[12px] md:mt-[24px]">
          PAGE NOT FOUND
        </h1>
        <h1 className="text-20 font-productsans text-center mt-[12px] md:mt-[16px]">
          The page you are looking for is temporarily Unavailable
        </h1>
        <div className="mt-[16px] md:mt-[28px]">
          <Button
            text="BACK"
            textColor="text-white hover:text-black"
            width="w-[222px] h-[48px] rounded-[20px]"
            btn4="btn-4"
          />
        </div>
      </div>

      {/* Background image at the bottom-right corner */}
      <img
        src={ErrorImage}
        className="absolute bottom-0 right-0 w-[210px] xl:w-[350px]"
        alt="Error 404 Background"
      />
    </div>
  );
}

export default Error404;
