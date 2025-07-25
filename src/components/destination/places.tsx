type Props = {
    topic: string;
    des: string;
  };
  
  const places = ({
    topic,
    des,
  }: Props) => {

    return (
      <div className="flex flex-col lg:flex-row w-full lg:items-center ">
          <div className="space-y-[14px] flex flex-col  ">
            <span className="flex font-productsans text-[14px] justify-start ">
              {topic}
            </span>
            <p className="flex font-productsansregular text-[14px] justify-start">{des}</p>
          </div>
      </div>
    );
  };
  
  export default places;