import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs"; // Import biểu tượng từ react-icons

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const dateFormat = "dd MMM yyyy";

  return (
    <div className="flex gap-1 cursor-pointer items-center justify-center p-2 border border-text_2 dark:border-text_4 dark:bg-black bg-colorBgBoxMemberLight rounded-lg ">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat={dateFormat}
        placeholderText="From Date"
        className="bg-transparent w-[92px] text-sm leading-[18.42px] font-normal "
      />
      <span className="px-2">-</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat={dateFormat}
        placeholderText="To Date"
        className="bg-transparent w-[92px] text-sm leading-[18.42px] font-normal"
      />
      <BsCalendar className="w-4 h-4 text-textGray" />
    </div>
  );
};

export default DateRangePicker;
