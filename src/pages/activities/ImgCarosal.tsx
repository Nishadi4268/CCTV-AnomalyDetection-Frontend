import React, { useState, useEffect } from "react";

interface ImgCarosalProps {
  images1: (string | undefined)[];
}

const ImgCarosal: React.FC<ImgCarosalProps> = ({ images1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images1.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images1.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex flex-col w-full items-center">
      {/* Carousel images */}
      <div className="w-full h-60 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden flex justify-center items-center">
        <img
          src={images1[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-0 flex gap-2 mb-4">
        {images1.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-[5px] rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-[10px]" : "bg-white w-[5px]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgCarosal;
