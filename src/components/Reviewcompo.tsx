import PropTypes from "prop-types";

interface ReviewcompoProps {
  image: string;
  name: string;
  rates: number;
  msg: string;
}

const Reviewcompo: React.FC<ReviewcompoProps> = ({
  image,
  name,
  rates,
  msg
}) => {
  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-[#FA9231]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className="w-5 h-5 text-[#FA9231]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2.927V15.5l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69L10 2.927z" />
        </svg>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      );
    }
    return <div className="flex space-x-1">{stars}</div>;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1A3A6D] via-[#232946] to-[#0F172A] shadow-xl rounded-2xl p-8 m-4 w-full xl-1500:w-[340px] min-h-[320px] h-[340px] relative transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center w-full flex-1">
        <div className="flex justify-center mb-2">
          <img
            src={image}
            alt={name}
            className="object-cover w-[72px] h-[72px] rounded-full border-4 border-[#FA9231] shadow-lg"
          />
        </div>
        <span className="text-[18px] font-bold text-white text-center mb-1 font-productsans">
          {name}
        </span>
        <span className="flex justify-center mb-2">{renderStars(rates)}</span>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 flex-1">
        <span className="absolute left-4 top-4 text-[#FA9231] text-5xl opacity-30">
          “
        </span>
        <p className="text-center text-white text-[15px] md:text-[13px] xl:text-[15px] leading-6 font-productsansregular z-10">
          {msg}
        </p>
      </div>
    </div>
  );
};

Reviewcompo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rates: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired
};

export default Reviewcompo;
