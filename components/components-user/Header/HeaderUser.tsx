import React, { useState } from "react";
import CustomSelect from "../CustomSelect";
import { Button } from "@mantine/core";
import CustomSelectAcount from "../CustomSelectAcount";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiGearLight, PiBellLight, PiUserCircleLight } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";

interface Menu {
  name: string;
}
const HeaderUser = () => {
  const Menus: Menu[] = [
    {
      name: "General",
    },
    {
      name: "Commission",
    },
    {
      name: "Network Management",
    },
    {
      name: "Upgrade Vip Level",
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState<number | null>(1);
  return (
    <div className="md:w-full h-auto md:pl-3 md:pb-6 mb-4 px-0 py-2 flex justify-between items-start md:bg-transparent bg-white dark:bg-bgColorIcon md:dark:bg-transparent">
      {/* <div className="md:block hidden"> //Header của Trade
        <CustomSelect />
      </div> */}
      {/* Header của Vipmember */}
      <div className="flex justify-center items-center w-auto h-auto bg-colorMenuNavigate rounded-3xl cursor-pointer">
        {Menus.map((menu, index) => (
          <div
            key={index}
            className={`flex flex-grow p-1 `}
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
      <div className="md:hidden flex justify-center items-center gap-2">
        <CgMenuLeft className="w-[40px] h-[40px] cursor-pointer" />
        <h1 className="font-bold text-base">Trade</h1>
      </div>
      <div className="md:hidden flex justify-center items-center gap-2">
        <CustomSelectAcount />
        <PiBellLight className="w-[40px] h-[40px]" />
      </div>
      <div className="md:flex hidden justify-center items-start gap-6">
        <div className="flex gap-4 justify-center items-center">
          <CustomSelectAcount />
          <Button className="w-[162px] h-[50px] text-white dark:text-black rounded-xl capitalize text-base font-bold bg-primaryLight dark:bg-primary">
            quick deposit
          </Button>
        </div>
        <div className="flex justify-center items-center gap-4 h-[60px]">
          <div className="flex flex-col justify-between items-center h-full">
            <PiGearLight className="w-[40px] h-[40px]" />
            <p className="font-medium text-[14px] text-textGray">Setting</p>
          </div>

          <div className="flex flex-col justify-between items-center h-full">
            <PiBellLight className="w-[40px] h-[40px]" />
            <p className="font-medium text-[14px] text-textGray">
              Notification
            </p>
          </div>

          <div className="flex flex-col justify-between items-center h-full">
            <PiUserCircleLight className="w-[40px] h-[40px]" />
            <p className="font-medium text-[14px] text-textGray">Profile</p>
          </div>
        </div>

        {/* <div className="w-[35px] h-[35px] flex justify-center items-center bg-white dark:bg-bgColorIcon rounded-full cursor-pointer">
          <BiDotsVerticalRounded className="w-5 h-5" />
        </div> */}
      </div>
    </div>
  );
};
export default HeaderUser;
