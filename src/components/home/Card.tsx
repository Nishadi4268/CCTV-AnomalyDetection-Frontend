import React from "react";
import { motion } from "framer-motion";

// Define the type for the props
interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(26,58,109,0.18)" }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      className="group flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 w-full items-center "
    >
      <div className="overflow-hidden w-full md:w-[60%] lg:w-[35%] 2xl:w-[200px] md:h-[146px] flex flex-col">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start 2xl:gap-[10px]">
        <span className="font-productsans text-sm">{title}</span>
        <span className="font-productsansregular text-xs text-center lg:text-start 2xl:w-[210px]">
          {description}
        </span>
      </div>
    </motion.div>
  );
};

export default Card;
