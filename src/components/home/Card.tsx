import React from "react";

// Define the type for the props
interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="group flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 w-full items-center ">
      <img src={image} alt={title} className="group-hover:scale-[1.02] duration-500 w-full md:w-[60%] lg:w-[35%] 2xl:w-[200px] md:h-[146px] flex flex-col " />
      <div className="flex flex-col justify-center items-center lg:items-start 2xl:gap-[10px]">
        <span className="font-productsans text-sm">{title}</span>
        <span className="font-productsansregular text-xs text-center lg:text-start 2xl:w-[210px]">
          
          {description}
        </span>
      </div> 
    </div>
  );
};

export default Card;
