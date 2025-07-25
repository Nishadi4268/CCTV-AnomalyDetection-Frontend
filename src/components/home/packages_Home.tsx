import React from "react";

interface Packages_HomeProps {
  imageSrc: string;
  title: string;
  locations: string;
  isPackagePage?: boolean;
}

const Packages_Home: React.FC<Packages_HomeProps> = ({
  imageSrc,
  title,
  locations,
  isPackagePage = false
}) => {
  return (
    <div className="flex relative justify-center ">
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-2xl" />
      
      <div
        className="flex flex-col z-10 text-center bottom-[10%] text-[12px] md:text-sm xs400:text-[10px] md:text-[9px] lg:text-[10px] 2xl:text-[12px]
      px-2 lg:px-2 2xl:px-4 border border-white text-white font-productsansregular absolute"
      >
        <span>{title}</span>
        <span>{locations}</span>
      </div>
      {/* Gradient Overlay for activities*/}
      {isPackagePage && (
        <div
          className="absolute rounded-[10px] inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(33, 34, 35, 0.0001) 0%, rgba(33, 34, 35, 0.658798) 100%)"
          }}
        ></div>
      )}
    </div>
  );
};

export default Packages_Home;
