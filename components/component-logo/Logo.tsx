import React from "react";
import logoDark from "../../public/images/Logo.svg";
import logoLight from "../../public/images/Logo_Light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoDark : logoLight;
  return (
    <div className="flex justify-center items-center md:gap-4 gap-2">
      <Image
        src={logo}
        alt="logoBOTrade"
        className="md:w-[40px] w-[43px] h-[38px] md:h-auto object-cover"
      />
      <h1
        className={`font-bold md:text-[20px] text-xl text-black dark:text-white leading-[38.28px] `}
      >
        AdTrade
      </h1>
    </div>
  );
};

export default Logo;
