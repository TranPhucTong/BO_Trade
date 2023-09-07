import Image from "next/image";
import React from "react";
import buttonFrame from "../../../public/images/framebutton.svg";
import buttonFrameBig from "../../../public/images/BiggerFrame.svg";
import buttonFrameLight from "../../../public/images/framebuttonlight.svg";
import buttonFrameBigLight from "../../../public/images/bigFrameLight.svg";
import { useTheme } from "next-themes";

interface ButtonHomeProps {
  text: string;
  smallButton: Boolean;
}

const ButtonHome: React.FC<ButtonHomeProps> = ({ text, smallButton }) => {
  const { theme } = useTheme();
  const buttonFrameBigImage =
    theme === "dark" ? buttonFrameBig : buttonFrameBigLight;
  const buttomFrameSmallImage =
    theme === "dark" ? buttonFrame : buttonFrameLight;
  return smallButton ? (
    <div className="relative cursor-pointer md:w-[159px] md:h-[50px] w-[127px] h-[37px]">
      <Image
        src={buttomFrameSmallImage}
        alt="Frame Button"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute text-[14px] dark:text-primary text-black font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize
      "
      >
        {text}
      </div>
    </div>
  ) : (
    <div className="relative cursor-pointer w-auto h-auto">
      <Image
        src={buttonFrameBigImage}
        alt="Frame Button"
        className="w-auto h-auto object-cover"
      />
      <div
        className="absolute w-[200px] flex justify-center items-center text-[16px] dark:text-primary text-black font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      "
      >
        {text}
      </div>
    </div>
  );
};

export default ButtonHome;
