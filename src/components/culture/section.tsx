import Marquee from "react-fast-marquee";

type Props = {
  title: string;
  content: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  firstimage: string;
};

const section = ({
  title,
  content,
  img1,
  img2,
  img3,
  img4,
  img5,
  firstimage,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-[50px] w-full items-center lg:items-stretch lg:h-[324px] ">
      <img
        src={firstimage}
        alt="firstimage"
        className="hidden lg:flex w-[30%]  "
      />
      <div className="flex flex-col py-[10px] space-y-[34px] lg:space-y-[20px] lg:w-[70%]">
        <div className="space-y-[20px] flex flex-col  ">
          <span className="flex font-productsansblack text-[14px] lg:text-[20px] justify-center lg:justify-start ">
            {title}
          </span>
          <img src={firstimage} alt="firstimage" className="flex lg:hidden  " />
          <p className="font-productsansregular text-[12px] flex text-justify ">{content}</p>
        </div>
        {/* <div className="hidden lg:grid grid-cols-5 grid-rows-1 gap-x-[12px] items-stretch ">
          <img src={img1} alt="Image 1"  />
          <img src={img2} alt="Image 2" />
          <img src={img3} alt="Image 3" />
          <img src={img4} alt="Image 4" />
          <img src={img5} alt="Image 5" />
        </div> */}
        <div className="flex ">
        <Marquee autoFill >
          <div className=" grid grid-cols-5 grid-rows-1 gap-x-[24px] lg:gap-x-[12px] h-32 lg:h-36 items-stretch w-full px-[12px] lg:px-[6px]">
          <img src={img1} alt="Marquee Image 1" className="w-[140px] md:w-full" />
            <img src={img2} alt="Marquee Image 2" className="w-[140px] md:w-full" />
            <img src={img3} alt="Marquee Image 3" className="w-[140px] md:w-full"/>
            <img src={img4} alt="Marquee Image 4" className="w-[140px] md:w-full"/>
            <img src={img5} alt="Marquee Image 5" className="w-[140px] md:w-full"/>
          </div>
        </Marquee>
        </div>
      </div>
    </div>
  );
};

export default section;
