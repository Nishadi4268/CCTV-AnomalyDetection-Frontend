type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <button className="font-productsans animated-button
        text-black bg-white border-2 border-black
        text-[10px] sm:text-xs xl:text-sm
        rounded-3xl w-full xl-1800:w-[187px] h-[28px] md:h-[38px] py-1 sm:px-4
        transition-all duration-500 ease-in-out">
      {title}
    </button>
  );
};

export default Button;
