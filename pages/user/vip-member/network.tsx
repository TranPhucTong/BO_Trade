import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { VscLayoutMenubar } from "react-icons/vsc";

const Network = () => {
  const options = [
    { value: "option1", label: "Search by Username" },
    { value: "option2", label: "Search by Level" },
  ];
  const optionDate = [
    {
      name: "Yesterday",
    },
    {
      name: "Last 7 Days",
    },
    {
      name: "Last 30 Days",
    },
    {
      name: "All Time",
    },
  ];
  const [selectedDate, setSelectedDate] = useState<number | null>(2);
  return (
    <div className="bg-white dark:bg-[#151818] dark:border dark:border-text_4 w-full rounded-[10px] px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <select
            className="px-4 py-2 bg-colorBgBoxMemberLight dark:bg-black text-sm border border-text_2 dark:border-text_4 rounded-lg"
            defaultValue="option1"
          >
            {options?.map((option) => (
              <option
                className="text-sm"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Username"
            className="md:block hidden px-8 py-2 bg-colorBgBoxMemberLight dark:bg-black text-sm border border-text_2 dark:border-text_4 rounded-lg"
          />
          <button className="md:block hidden py-2 px-4 text-sm text-white dark:text-black bg-primaryLight dark:bg-primary rounded-lg">
            Search
          </button>
        </div>
        <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="md:hidden flex w-full justify-between items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Enter Username"
          className="flex-grow px-4 py-2 bg-colorBgBoxMemberLight dark:bg-black text-sm border border-text_2 dark:border-text_4 rounded-lg"
        />
        <button className="py-2 px-4 text-sm text-white dark:text-black bg-primaryLight dark:bg-primary rounded-lg">
          Search
        </button>
      </div>
      <div className="w-full mt-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <VscLayoutMenubar className="w-6 h-6 text-primaryLight dark:text-primary" />
            <p className="text-lg font-medium leading-[20.42px]">
              Search Results
            </p>
          </div>
          <div className="md:flex justify-center items-center gap-2 hidden">
            <p className="font-medium text-sm mr-2 dark:text-textGray">
              Time Range
            </p>
            {optionDate.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedDate(index)}
              >
                <button
                  className={`px-3 py-2 rounded-lg bg-colorBgBoxMemberLight dark:bg-black border border-text_2 text-textGray font-normal text-sm transition-all duration-300 ease-out 
                  ${
                    selectedDate === index
                      ? "bg-primaryLight text-white dark:bg-primary dark:text-black"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
          <div className="md:hidden block">
            <select
              className="px-2 py-2 bg-colorBgBoxMemberLight dark:bg-black text-sm border border-text_2 dark:border-text_4 rounded-lg"
              defaultValue="Last 7 Days"
            >
              {optionDate?.map((option, index) => (
                <option className="text-sm" key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full mt-4">
          <div className="md:overflow-x-auto border border-text_2 dark:border-text_4 rounded-lg">
            <table className="md:min-w-full w-auto h-[334px] rounded-lg dark:bg-black ">
              <thead className="border-b border-text_2 dark:border-text_4">
                <tr className="font-normal md:text-sm text-xs rounded-lg">
                  <th className="md:px-6 md:py-3 px-5 py-1">Username</th>
                  <th className="md:px-6 md:py-3 px-5 py-1">Level</th>
                  <th className="md:px-6 md:py-3 px-5 py-1">Total Volume</th>
                  <th className="md:px-6 md:py-3 px-5 py-1">
                    Commission Earned
                  </th>
                </tr>
              </thead>
              <tbody>{/* Add your data rows here */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
