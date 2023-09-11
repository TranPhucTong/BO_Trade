import Logo from "@/components/component-logo/Logo";
import { Button } from "@mantine/core";
import React from "react";
import ButtonHome from "../ButtonHome/ButtonHome";
import ThemeSwitcher from "@/pages/ThemeSwitcher";

const HeaderHome = () => {
  return (
    <header className="header dark:bg-bgHeader shadow-2xl bg-white flex w-full justify-between items-center px-6 py-6 md:py-[16px] md:px-[100px]">
      <div className="header-left hidden md:flex gap-6 justify-center items-center">
        <ThemeSwitcher />
        <select className="h-[24px] w-[88px] bg-transparent text-black dark:text-white">
          <option className="dark:bg-black bg-white" value="en">
            English
          </option>
          <option className="dark:bg-black bg-white" value="vn">
            VietNam
          </option>
        </select>
      </div>
      <div className="header-center cursor-pointer">
        <Logo />
      </div>
      <div className="header-right flex justify-center items-center gap-2 md:gap-8">
        <Button className="p-0 dark:text-white text-black" size="xs">
          <p className="text-sm font-bold md:text-[16px] ">Sign In</p>
        </Button>
        <ButtonHome smallButton={true} text="join now" />
      </div>
    </header>
  );
};

export default HeaderHome;
