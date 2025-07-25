import React from "react";

// Define the type for the props
interface CardProps {
  image: string;
  title: string;
  location: string; 
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, location, description }) => {
  return (
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 w-full items-center ">
      <img src={image} alt={title} className="w-full md:w-[60%] lg:w-[35%] 2xl:w-[230px] md:h-[146px] flex flex-col " />
      <div className="flex flex-col justify-center items-center lg:items-start">
        <span className="font-productsans text-sm">{title}</span>
        <span className="font-productsansregular text-xs text-center lg:text-start 2xl:w-[210px]">
          {location} <br />
          {description}
        </span>
      </div> 
    </div>
  );
};

export default Card;
