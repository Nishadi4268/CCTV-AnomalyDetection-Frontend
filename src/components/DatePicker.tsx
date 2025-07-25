"use client";

import * as React from "react";
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false); // Track popover state

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setOpen(false); // Close popover after date selection
    }
  };

  return (
    <div className="flex flex-col">
      {/* date picker */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size={"lg"}
            variant={"outline"}
            className={cn(
              "border-none text-[10px] font-productsansregular justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <SlCalender className="mr-[10px] h-[12px] w-[12px] " />
            {date ? (
              format(date, "EEEE, PPP")
            ) : (
              <span className="text-[10px] font-productsansregular">
                Pick a date
              </span>
            )}{" "}
            {/* Display day of the week */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect} // Handle undefined selectedDate
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {/* time picker */}
    </div>
  );
}
