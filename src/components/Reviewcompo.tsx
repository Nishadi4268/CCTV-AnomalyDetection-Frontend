import PropTypes from "prop-types";

interface ReviewcompoProps {
  image: string;
  imageMobile: string;
  name: string;
  rates: number;
  msg: string;
}

const Reviewcompo: React.FC<ReviewcompoProps> = ({
  image,
  imageMobile,
  name,
  rates,
  msg
}) => {
  
  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`full-${i}`}
          src="/images/home/rates/full.png"
          alt="Full Star"
          className="w-[18px] h-[18px]"
        />
      );
    }

    // Add half star
    if (hasHalfStar) {
      stars.push(
        <img
          key="half-star"
          src="/images/home/rates/half.png"
          alt="Half Star"
          className="w-[18px] h-[18px]"
        />
      );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img
          key={`empty-${i}`}
          src="/images/home/rates/empty.png"
          alt="Empty Star"
          className="w-[18px] h-[18px]"
        />
      );
    }

    return <div className="flex space-x-1">{stars}</div>;
  };

  return (
    <div className="flex flex-col space-y-20 md:space-y-20  md:justify-between relative lg:h-[252px] w-[100%] xl-1500:w-[340px] justify-center  items-center ">
      <div className="flex w-full px-10  space-x-[20px] justify-center ">
        {/* Image */}
        <div className="flex  justify-center">
          <div className=" hidden md:flex ">
          <img
            src={image}
            alt="Category Swiper"
            className="object-cover w-[79px]"
          />
          </div>
         <div className="flex md:hidden">
         <img
            src={imageMobile}
            alt="Category Swiper"
            className="h-auto object-cover  w-[79px]"
          />
         </div>
        </div>

        <div className="flex flex-col  justify-center">
          <span className="flex flex-col text-[16px] font-productsans text-white justify-center w-full lg:text-start">
            {name}
          </span>
          <span className="flex text-white w-fit">{renderStars(rates)}</span>
        </div>
      </div>
      <span className="text-center flex flex-col top-5 md:h-1/6 lg:h-auto text-white font-rockwell absolute text-7xl lg:text-8xl">
        “
      </span>
      <div className="flex px-5 text-center text-white text-[14px] md:text-[10px] xl:text-[14px] leading-5 font-productsansregular">
        {msg}
      </div>
    </div>
  );
};

Reviewcompo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageMobile: PropTypes.string.isRequired,
  rates: PropTypes.number.isRequired, 
  msg: PropTypes.string.isRequired
};

export default Reviewcompo;
