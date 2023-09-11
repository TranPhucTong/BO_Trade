import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";

const TradingVolume = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex gap-2 justify-start items-center">
        <AiOutlineBarChart className="w-5 h-5 text-primaryLight dark:text-primary" />
        <p className="text-sm font-bold">Trading Volume</p>
      </div>
      <div className="flex justify-between items-center font-medium text-sm text-textGray dark:text-text_2 my-2">
        <p>Month</p>
        <p>Valume</p>
      </div>
      <div className="rounded-[10px] bg-colorBgBoxMemberLight dark:bg-black px-3 py-2 h-[264px] overflow-auto">
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
        <div className="flex justify-between items-center text-sm font-normal border-b border-colorMenuNavigate dark:border-text_4 py-2">
          <p>01/2023</p>
          <p>3 $</p>
        </div>
      </div>
      <button className="flex w-full mt-5 justify-between items-center px-3 py-3 rounded-lg bg-primaryLight dark:bg-primary dark:text-black text-white font-bold text-sm">
        <p>Total</p>
        <p>726.12 $</p>
      </button>
    </div>
  );
};

export default TradingVolume;
