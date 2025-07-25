import PropTypes from "prop-types";

interface CategorySwiperProps {
  image?: string;
  imageMobile?: string;
  text?: string;
  isCategoryPage?: boolean;
  isActivityPage?: boolean;
  rounded?:string;
}

const CategorySwiper: React.FC<CategorySwiperProps> = ({
  image,
  text,
  imageMobile,
  rounded,
  isCategoryPage = false,
  isActivityPage = false
}) => {
  return (
    <div className="relative items-center flex flex-col">
      {/* Image */}
      <img
        src={image}
        alt="Category Swiper"
        // className="w-full rounded-[10px]  object-cover hidden md:flex h-[300px]"
        className={`${rounded} w-full object-cover hidden md:flex font-productsansblack h-[344px] `}
      />
      <img
        src={imageMobile}
        alt="Category Swiper"
        className="justify-center items-center rounded-[10px] object-cover w-full h-[177px] md:h-[345px] flex md:hidden relative"
      />

      {/* Gradient Overlay */}
      {isCategoryPage && (
        <div className="absolute xs500:hidden w-full rounded-[10px] inset-0 bg-gradient-to-l from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] left-1/2 -translate-x-1/2"></div>
      )}
      {/* Gradient Overlay for activities*/}
      {isActivityPage && (
        <div
          className="absolute xs500:hidden  rounded-[10px] inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(33, 34, 35, 0.0001) 0%, rgba(33, 34, 35, 0.658798) 100%)"
          }}
        ></div>
      )}
      <p className="absolute tracking-wider top-[120px] md:top-[214px] text-[16px] lg:text-[24px] flex text-white justify-center w-full lg:text-start font-productsansblack">
        {text}
      </p>
    </div>
  );
};

CategorySwiper.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rounded: PropTypes.string.isRequired,
  isCategoryPage: PropTypes.bool // Add prop type for isCategoryPage
  // imageMobile: PropTypes.string.isRequired
};

export default CategorySwiper;
