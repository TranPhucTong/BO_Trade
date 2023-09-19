import Image from "next/image";
import React, { useEffect, useState } from "react";
import so_1 from "../../../public/VipMember_image/so1.svg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { useTheme } from "next-themes";

const Upgrade = () => {
  const [isMdScreen, setIsMdScreen] = useState<boolean>(false);

  useEffect(() => {
    const mdMediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMdScreen(event.matches);
    };

    mdMediaQuery.addListener(handleResize);
    handleResize(mdMediaQuery);

    return () => {
      mdMediaQuery.removeListener(handleResize);
    };
  }, []);
  const { theme } = useTheme();
  return (
    <div
      className={`w-full h-auto md:px-[300px] md:py-28 p-4 rounded-[10px] ${
        isMdScreen ? "bg_upgrade" : ""
      }`}
    >
      <div
        className={`${
          isMdScreen ? "bg-blur" : `bg-white ${theme === "dark" && "bg-blur"}`
        }  p-4 flex w-full flex-col gap-4 border border-primaryLight dark:border-primary rounded-[20px] `}
      >
        <div className="rounded-[15px] bg-colorMenuNavigate p-4 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Image
              src={so_1}
              alt="Image number one"
              className="h-[60px] rounded-full w-auto object-cover"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-medium md:text-white text-black dark:text-white">
                Upgrade Aygency Rank
              </h1>
              <p className="text-sm font-medium md:text-text_2 text-textGray">
                Thai Kha My / Level 1
              </p>
            </div>
          </div>
          <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer md:text-white text-black dark:text-white" />
        </div>

        <div className="rounded-[15px] bg-colorMenuNavigate p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-sm md:text-white text-black dark:text-white font-medium leading-[18.42px]">
              Upgrade VIP Level
            </h2>
            <div className="flex justify-center items-center gap-1">
              <AiOutlineMinus className="w-5 h-5  md:text-white text-black cursor-pointer rounded-full md:border shadow-lg md:border-primary md:bg-transparent bg-white dark:border dark:border-primary dark:bg-transparent dark:text-white" />
              <p className="text-sm font-medium leading-[18.42px] md:border md:border-primary rounded-xl px-6 py-[2px] md:text-text_2 text-textGray bg-white md:bg-transparent dark:border dark:border-primary dark:bg-transparent dark:text-white">
                Level 2
              </p>
              <AiOutlinePlus className="w-5 h-5 md:text-white text-black cursor-pointer rounded-full md:border shadow-lg md:border-primary md:bg-transparent bg-white dark:border dark:border-primary dark:bg-transparent dark:text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <h2 className="text-sm md:text-white text-black dark:text-white font-medium leading-[18.42px]">
                Upgrade Fee
              </h2>
              <TbMessageCircleQuestion className="w-4 h-4 text-primaryLight dark:text-primary" />
            </div>
            <div className="font-medium text-sm md:text-text_2 text-textGray">
              $42.86
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sm md:text-white text-black dark:text-white font-medium leading-[18.42px]">
              F1 Purchased VIP Member
            </h2>
            <div className="font-medium text-sm md:text-text_2 text-textGray">
              1 / 3
            </div>
          </div>
        </div>
        <div className="rounded-[15px] bg-colorMenuNavigate p-4 flex gap-2 justify-start items-center">
          <input type="checkbox" className="w-4 h-4 rounded-lg" />
          <div className="font-medium text-sm md:text-white text-black dark:text-white">
            I confirm and accept{" "}
            <span className="underline text-primaryLight dark:text-primary cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
        <button className="w-full text-white font-bold text-lg leading-[20.42px] bg-primaryLight dark:bg-primary dark:text-black py-4 rounded-2xl">
          Upgrade Level
        </button>
      </div>
      <p className="md:hidden block text-xs font-normal text-textGray mt-6">
        Your default Level after becoming VIP member is Level 1. To be able to
        upgrade VIP Level, you must pay upgrade fee and have enough F1 purchased
        VIP member. At 00:00:00 (UTC) every Sunday the Level you have upgraded
        will expire, your new Level will be updated based on the Weekly Trading
        Volume from only F1 and the Number of F1 purchased VIP member in the
        past 7 days.
      </p>
    </div>
  );
};

export default Upgrade;
