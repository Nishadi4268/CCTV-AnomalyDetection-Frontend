import check from "/icon.webp";
import { MdArrowDropUp } from "react-icons/md";

interface PlanCardProps {
  title: string;
  duration: string;
  desc: string;
  price: string;
  features: string[];
  variant?: "default" | "alternative";
  onClose?: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  duration,
  desc,
  price,
  features,
  variant = "default",
  onClose
}) => {
  const alternativeStyle = {
    background: "linear-gradient(340deg, #327BC1, #469EFD99 5%, #2E1839)"
  };

  const defaultStyle = {
    background: "linear-gradient(to top, #030304, #34353C)"
  };

  const gradientStyle =
    variant === "alternative" ? alternativeStyle : defaultStyle;
  return (
    <div
      style={variant === "alternative" ? gradientStyle : undefined}
      className="rounded-[1.875rem] w-full h-full p-[10px] border border-[#FFFFFF33] mx-auto xssm:max-w-[640px] sm:max-w-[768px] md:max-w-none"
    >
      <div
        style={gradientStyle}
        className="rounded-[1.25rem] w-full h-full p-4 xl:p-5 text-white flex flex-col bg-gradient-to-t from-[#1E1D20] to-[#4A4B53] border border-[#FFFFFF33] backdrop-blur-sm"
      >
        <div
          className="h-16 w-16 pt-[1px] pl-[1px] bg-gradient-to-tr from-[#4A97F200] via-[#AC61FD] to-[#469EFD] absolute left-0 top-0 rounded-tl-[1.25rem]
        "
          style={{
            WebkitClipPath:
              "polygon(0 0, 100% 0, 100% 1px, 1px 1px,  1px 100%, 0 100%)"
          }}
        />
        <div className="flex-grow">
          {onClose && (
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="self-end mb-2 text-white opacity-80 hover:opacity-100 text-xl"
              >
                <MdArrowDropUp size={29} />
              </button>
            </div>
          )}
          <div className="">
                        <h1 className="text-[35px] mb-4 text-center ">{duration}</h1>

            <h1 className="text-[35px] mb-4">{title}</h1>
            <p className="text-[1.125rem]">{desc}</p>
          </div>

          <div className="my-5 xl:my-[30px] h-[2px] bg-gradient-to-r from-black/20 via-white/20 to-black/20" />

          <div>
            <p className="text-[35px] h-14">
              <span className="align-super">$</span>
              <span className="text-[3.125rem]">{price}/mo</span>
            </p>

            <p className="text-[1.125rem] pt-3 pb-5 md:pb-[30px]">
              Pause or cancel anytime. 7 days money-back guarantee
            </p>
            <div className="flex flex-col gap-2 xl:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <img
                    src={check}
                    className="w-[14px] h-[14px] md:w-[17px] md:h-[17px]"
                  />
                  <p className="text-[0.875rem] md:text-[1.125rem] max-w-[269px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-[46px]">
          <button className="text-black hover:opacity-90 px-[39px] py-[21px] bg-white rounded-[60px] tracking-wider w-[195px] h-[55px] flex justify-center items-center text-center">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
