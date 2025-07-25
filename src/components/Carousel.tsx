import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";

interface CarouselProps {
  components: React.ReactNode[];
  slidesToShow?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  bgColor?: string;
  showDots?: boolean;
} 

function Carousel({
  components,
  slidesToShow = 3,
  autoPlay = true,
  autoPlayInterval = 3000,
  bgColor = "#FEFFB5",
  showDots = true,
}: CarouselProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = components.length;
  const totalDots = totalSlides; // Generate a dot for each slide

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: autoPlay,
    autoplaySpeed: autoPlayInterval,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    // responsive: [
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
  
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 550,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const goToIndex = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Slider Container */}
      <div className="w-full flex items-center overflow-hidden">
        <div className="flex w-full">
          <Slider ref={sliderRef} {...sliderSettings} className="w-full">
            {components.map((component, index) => (
              <div key={index} className="cursor-pointer px-[12px] md:px-[24px]">
                {component}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Dynamic Dot Indicators (Fixed) */}
      {showDots && (
        <div className="flex items-center justify-center mt-[20px] lg:mt-[50px]">
          {Array.from({ length: totalDots }).map((_, dotIndex) => {
            const isActive = currentSlide === dotIndex; // Ensure active dot is correctly highlighted

            return (
              <button
                key={dotIndex}
                onClick={() => goToIndex(dotIndex)}
                className={`mx-1 transition-all duration-300 rounded-full ${
                  isActive ? "w-[12px] h-[6px] md:w-[21px] md:h-[10px]" : "w-[6px] h-[6px] md:w-[10px] md:h-[10px]"
                }`}
                style={{ backgroundColor: bgColor }}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Carousel;
