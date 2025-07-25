interface PoliciesBoxProps {
  title: string;
  content: React.ReactNode;
  px?: string; // Add the px prop to allow dynamic padding
}

function PoliciesBox({ title, content, px = "22px" }: PoliciesBoxProps) {
  return (
    <div
      className={`flex flex-col border border-black gap-[16px] lg:gap-[28px] w-full md:w-[382px] lg:w-[370px] xl-1920:w-[389px] min-h-[224px] h-full 2xl:h-[228px] px-[${px}] py-[26px] lg:py-[24px] font-productsansregular`}
    >
      <h1 className="text-black font-semibold text-16 lg:text-20 tracking-wider">
        {title}
      </h1>
      <div className="text-14 sm:text-nowrap ml-2">{content}</div>
    </div>
  );
}

export default PoliciesBox;
