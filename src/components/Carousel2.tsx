import { useState, useEffect, useRef } from "react";

interface CarouselProps {
  components: React.ReactNode[];
  widthNumerator?: number;
  bgColor?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

function Carousel2({
  components,
  widthNumerator = 1,
  bgColor = "white",
  showDots = true,
  autoPlay = true,
  autoPlayInterval = 4000
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.clientWidth;
        setContainerWidth(width);
        setItemWidth(window.innerWidth < 500 ? width : width / widthNumerator);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [widthNumerator]);

  // Calculate the maximum valid index to prevent empty space at the end
  const maxIndex =
  window.innerWidth < 500
    ? components.length - 1 // On small screens, allow moving to only the last item
    : Math.max(0, components.length - Math.floor(containerWidth / itemWidth)/1.2);

  useEffect(() => {
    if (!autoPlay) return; // ✅ Autoplay is always enabled, no size restriction

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : 0
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, components.length, itemWidth, containerWidth]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index > maxIndex ? maxIndex : index); // ✅ Prevents overscrolling when clicking dots
  };

  return (
    <div ref={carouselRef} className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full flex items-center overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {components.map((component, index) => (
            <div
              key={index}
              className="cursor-pointer flex-shrink-0"
              style={{
                width: `${itemWidth}px`,
                marginRight: index < components.length - 1 ? (window.innerWidth >= 500 ? "20px" : "0px") : "0px",
              }}
              onClick={() => goToIndex(index)}
            >
              {component}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      {showDots && (
        <div className="flex items-start justify-center w-full mt-[20px] lg:mt-[50px]">
          {components.map((_, index) => (
            <div
              key={index}
              className="relative h-5 mx-1 cursor-pointer flex items-center justify-center"
              onClick={() => goToIndex(index)}
            >
              <div
                className={`rounded-xl ${
                  currentIndex === index ? "w-[21px] h-[10px]" : "w-[10px] h-[10px]"
                }`}
                style={{ backgroundColor: bgColor }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel2;
