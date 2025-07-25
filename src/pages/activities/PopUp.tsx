import { LuUserRound } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/pages/activities/ConfirmPopUp";
import IncreseDecButton from "@/components/IncreseDecButton";
import { useState } from "react";
import { DatePicker } from "@/components/DatePicker";
import { WiTime8 } from "react-icons/wi";
import Button from "@/components/Book_Button";

interface PopUpProps {
  onClose: () => void;
}

function PopUp({ onClose }: PopUpProps) {
  const pricePerAdult = 300;
  const pricePerChild = 200;

  // State to store the quantity of adults and children
  const [quantityAdult, setQuantityAdult] = useState(0);
  const [quantityChild, setQuantityChild] = useState(0);

  // State to store selected start and end times
  const [startTime, setStartTime] = useState("15:00"); // 3:00 PM in 24-hour format
  const [endTime, setEndTime] = useState("19:00");
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  // Helper function to format time to 12-hour format
  const formatTimeTo12Hour = (time: string): string => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(Number(hours), Number(minutes));
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };

  // Handle updating the value for adults
  const handleAdultValueChange = (newValue: number) => {
    setQuantityAdult(newValue);
  };

  // Handle updating the value for children
  const handleChildValueChange = (newValue: number) => {
    setQuantityChild(newValue);
  };

  // Handle time change for start and end time
  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);

    // Ensure both times are fully entered before closing the time picker
    // if (startTime && endTime) {
    //   setTimePickerVisible(false);
    // }
  };

  // Toggle the time picker visibility
  const handleTimePickerToggle = () => {
    setTimePickerVisible(!timePickerVisible);
  };

  // Calculate total price
  const totalPrice =
    quantityAdult * pricePerAdult + quantityChild * pricePerChild;

  return (
    <div className="border-4">
      <Dialog open={true} onOpenChange={onClose}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="bg-white border-2 border-black min-w-[317px] w-[317px] xs400:w-auto lg:w-[702px] rounded-[10px] px-[25px] lg:px-[50px] min-h-[454px] focus:outline-none">
          <DialogHeader className="w-[259px] gap-[16px] sm:gap-[28px] sm:mt-[22px] sm:w-[559px] md:w-[602px]">
            <DialogTitle className="text-16 lg:text-24 font-productsans text-start">
              Secure Your Adventure
            </DialogTitle>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-14 lg:text-16 font-productsans text-start">
                Evening Safari at Yala National Park
              </h1>
              <DialogDescription className="text-justify text-12 lg:text-14 w-full font-productsansregular leading-tight tracking-tight">
                Embark on an enchanting evening safari at Yala National Park,
                where wildlife and nature's beauty come alive under the golden
                hues of dusk. Witness majestic leopards, elephants, and diverse
                birdlife while soaking in the tranquil ambiance of the park.
              </DialogDescription>
            </div>
            <div>
              <div className="w-full flex flex-col sm:flex-row gap-[12px]">
                {/* Adult price */}
                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-center sm:px-[20px] justify-between">
                    <div className="flex flex-row gap-[4px] text-12 items-center justify-center">
                      <h1 className="font-productsansregular">Adult</h1>
                      <LuUserRound
                        className="w-[9px] h-[10px]"
                        strokeWidth={2.5}
                      />
                      <h1 className="font-productsansregular">$300</h1>
                    </div>
                    <IncreseDecButton onValueChange={handleAdultValueChange} />
                  </div>
                  <div className="border-t border-black mt-[4px] mb-[8px]"></div>
                  <div className="flex flex-row sm:px-[20px] text-12 font-productsansregular items-center justify-between">
                    <h1>Sub total Price</h1>
                    <h1>${quantityAdult * pricePerAdult}</h1>
                  </div>
                </div>

                {/* Children price */}
                <div className="w-full">
                  <div className="flex flex-row sm:px-[20px] items-center justify-between">
                    <div className="flex flex-row gap-[4px] text-12 items-center justify-center">
                      <h1 className="font-productsansregular">Children</h1>
                      <LuUserRound
                        className="w-[9px] h-[10px]"
                        strokeWidth={2.5}
                      />
                      <h1 className="font-productsansregular">$200</h1>
                    </div>
                    <IncreseDecButton onValueChange={handleChildValueChange} />
                  </div>
                  <div className="border-t border-black mt-[4px] mb-[8px]"></div>
                  <div className="flex flex-row sm:px-[20px] text-12 font-productsansregular items-center justify-between">
                    <h1>Sub total Price</h1>
                    <h1>${quantityChild * pricePerChild}</h1>
                  </div>
                </div>
              </div>
              <div className="border-t border-black mt-[8px] sm:mt-[16px] mb-[20px]"></div>
              {/* Total Price */}
              <div className="flex flex-row text-14 font-productsans items-center justify-between mt-4">
                <h1 className="text-12">Total</h1>
                <h1 className="text-12">${totalPrice}</h1>
              </div>
              <div className="border-t border-black mt-[18px] mb-[28px] sm:mb-[20px]"></div>
              <div className="flex flex-row items-center justify-between gap-[38px]">
                <div className="flex flex-col gap-[6px] lg:gap-[8px] ">
                  <DatePicker />
                  {/* Time picker */}
                  <div className="">
                    <div
                      className="flex flex-row gap-[12px]"
                      onClick={handleTimePickerToggle}
                    >
                      <WiTime8 className="w-5 h-5 cursor-pointer -ml-[2px] items-start flex justify-start" />
                      {startTime && endTime && (
                        <div className="flex flex-row gap-2 ml-[3px] text-12 text-nowrap">
                          <p className="text-[10px] font-productsansregular">
                            {formatTimeTo12Hour(startTime)}
                          </p>
                          <h1 className="text-[10px] font-productsansregular">
                            -
                          </h1>
                          <p className="text-[10px] font-productsansregular">
                            {formatTimeTo12Hour(endTime)}
                          </p>
                        </div>
                      )}
                    </div>

                    {timePickerVisible && (
                      <div className="flex flex-row items-end">
                        <div className="flex flex-col mt-2">
                          <div className="flex flex-row items-center gap-4">
                            <label
                              htmlFor="start-time"
                              className="text-12 font-productsansregular text-nowrap"
                            >
                              Start Time:
                            </label>
                            <input
                              type="time"
                              id="start-time"
                              value={startTime}
                              onChange={handleStartTimeChange}
                              className="text-12 font-productsans p-2 cursor-pointer "
                            />
                          </div>
                          <div className="flex flex-row items-center gap-4">
                            <label
                              htmlFor="end-time"
                              className="text-12 font-productsansregular"
                            >
                              End Time:
                            </label>
                            <input
                              type="time"
                              id="end-time"
                              value={endTime}
                              onChange={handleEndTimeChange}
                              className="text-12 ml-1 font-productsans p-2 cursor-pointer"
                            />
                          </div>
                        </div>
                        <div>
                          <h1
                            onClick={() => setTimePickerVisible(false)}
                            className="font-productsansregular text-12 -mt-6 ml-2 hover:opacity-85 hover:text-red-500 cursor-pointer flex "
                          >
                            Enter Time
                          </h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  text="Confirm"
                  textColor="text-black"
                  width="w-[106px] sm:w-[140px] h-[28px] lg:h-[32px] hover:opacity-75 hover:scale-[1.05]"
                  btn4="btn-4"
                />
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PopUp;
