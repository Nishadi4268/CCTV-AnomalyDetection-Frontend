type Props = {
  title: string;
  bgcolor: string;
  textcolor: string;
  borderColor: string;
  className?: string;
  hoverBgColor?: string;
  hoverTextColor?: string; // Add hover text color prop
};

const Button = ({
  title,
  borderColor,
  bgcolor,
  textcolor,
  className,
  hoverBgColor,
  hoverTextColor, // Accept hover text color
}: Props) => {
  return (
    <button
      className={`font-productsans lg:text-sm border-2 border-black rounded-3xl py-[14px] lg:py-[10px] px-[31px] items-center justify-center flex w-[260px] transition-all duration-300 h-[38px] lg:h-[31px] lg:w-[120px] ${className}`}
      style={{
        backgroundColor: bgcolor,
        color: textcolor,
        borderColor: borderColor,
      }}
      onMouseEnter={(e) => {
        if (hoverBgColor) {
          (e.target as HTMLButtonElement).style.backgroundColor = hoverBgColor;
        }
        if (hoverTextColor) {
          (e.target as HTMLButtonElement).style.color = hoverTextColor;
        }
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = bgcolor;
        (e.target as HTMLButtonElement).style.color = textcolor;
      }}
    >
      {title}
    </button>
  );
};

export default Button;
