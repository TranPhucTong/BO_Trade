import { SegmentedControl } from "@mantine/core";
import React, { useState } from "react";

interface Menu {
  name: string;
}
const Statistics = () => {
  const Menus: Menu[] = [
    {
      name: "This month",
    },
    {
      name: "Last month",
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState<number | null>(1);
  return (
    <div className="px-6 py-6">
      <div className="flex justify-start items-center w-auto h-auto bg-colorMenuNavigate rounded-3xl cursor-pointer">
        {Menus.map((menu, index) => (
          <div
            key={index}
            className={`p-1 `}
            onClick={() => setSelectedMenu(index)}
          >
            <div
              className={`text-base font-medium leading-[20.42px] flex-grow flex justify-center px-4 py-3 rounded-3xl bg-transparent transition-colors duration-300 ease-linear
              ${selectedMenu === index ? "bg-white" : ""}`}
            >
              {menu.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full items-start">
        <div className="flex flex-col "></div>
      </div>
    </div>
  );
};

export default Statistics;
