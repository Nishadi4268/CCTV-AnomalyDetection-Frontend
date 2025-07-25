import React from "react";

interface ImageGridProps {
  images: string[];
  text: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, text }) => {
  return (
    <div className="relative w-full group">
      <img
        src={images[0]} 
        className=" w-[345px] h-[212px] xs400:w-full xs400:h-auto rounded-xl "
        alt="Gradient Image"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] rounded-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
       <span className="absolute text-center bottom-4 left-1/2 transform -translate-x-1/2 text-white font-productsans 
       text-[14px] z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
    </div>
  );
};

export default ImageGrid;
