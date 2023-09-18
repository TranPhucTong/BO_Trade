import Image from "next/image";
import React, { useState } from "react";
import { PiChartLineDownThin, PiChartLineUpThin } from "react-icons/pi";
import imageChartDown from "../../public/admin_images/analytics/FrameRedLight.svg";
import imageChartUpLight from "../../public/admin_images/analytics/FrameGreenLight.svg";
import imageChartUpDark from "../../public/admin_images/analytics/FrameGreenDark.svg";
import DateRangePicker from "@/components/components-user/components-vip_member/DateRangePicker";
import { useTheme } from "next-themes";

const Analytics = () => {
  const dataRemaining = [
    {
      money: "0.00",
      nameBalance: "USDT Balance",
    },
    {
      money: "0.00",
      nameBalance: "BITCOIN Balance",
    },
    {
      money: "0.00",
      nameBalance: "TRC20 Balance",
    },
    {
      money: "0.00",
      nameBalance: "BUSD Balance",
    },
    {
      money: "0.00",
      nameBalance: "BNB Balance",
    },
    {
      money: "0.00",
      nameBalance: "ETH Balance",
    },
    {
      money: "0.00",
      nameBalance: "MATIC Balance",
    },
    {
      money: "0.00",
      nameBalance: "FTM Balance",
    },
    {
      money: "0.00",
      nameBalance: "DOGE Balance",
    },
    {
      money: "",
      nameBalance: "",
    },
  ];
  const { theme } = useTheme();
  const imageChartUp = theme === "dark" ? imageChartUpDark : imageChartUpLight;
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:mx-0 mx-4 md:my-0 my-4">
      <div className="md:w-[50%] w-full">
        <div className="flex flex-wrap gap-4">
          <div className="p-4 flex-grow bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 gap-20 rounded-[10px] shadow-lg border border-text_2 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-textGray dark:text-text_2">
                Total Users
              </p>
              <p className="text-2xl font-medium">1.378</p>
            </div>
            <div>
              <Image
                src={imageChartUp}
                alt="imageChartUp"
                className="w-auto h-auto object-cover"
              />
              <div className="flex justify-center items-center">
                <PiChartLineUpThin className="w-5 h-5 text-greenColor dark:text-colorSuccess" />
                <p className="text-greenColor dark:text-colorSuccess text-lg font-medium">
                  19%
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 flex-grow bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 gap-20 rounded-[10px] shadow-lg border border-text_2 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-textGray dark:text-text_2">
                Total Users
              </p>
              <p className="text-2xl font-medium">1.378</p>
            </div>
            <div>
              <Image
                src={imageChartDown}
                alt="imageChartDown"
                className="w-auto h-auto object-cover"
              />
              <div className="flex justify-center items-center">
                <PiChartLineDownThin className="w-5 h-5 text-colorError" />
                <p className="text-colorError text-lg font-medium">19%</p>
              </div>
            </div>
          </div>{" "}
          <div className="p-4 flex-grow bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 gap-20 rounded-[10px] shadow-lg border border-text_2 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-textGray dark:text-text_2">
                Total Users
              </p>
              <p className="text-2xl font-medium">1.378</p>
            </div>
            <div>
              <Image
                src={imageChartUp}
                alt="imageChartUp"
                className="w-auto h-auto object-cover"
              />
              <div className="flex justify-center items-center">
                <PiChartLineUpThin className="w-5 h-5 text-greenColor dark:text-colorSuccess" />
                <p className="text-greenColor dark:text-colorSuccess text-lg font-medium">
                  19%
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="p-4 flex-grow bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 gap-20 rounded-[10px] shadow-lg border border-text_2 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-textGray dark:text-text_2">
                Total Users
              </p>
              <p className="text-2xl font-medium">1.378</p>
            </div>
            <div>
              <Image
                src={imageChartUp}
                alt="imageChartUp"
                className="w-auto h-auto object-cover"
              />
              <div className="flex justify-center items-center">
                <PiChartLineUpThin className="w-5 h-5 text-greenColor dark:text-colorSuccess" />
                <p className="text-greenColor dark:text-colorSuccess text-lg font-medium">
                  19%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 gap-20 rounded-[10px] shadow-lg border border-text_2 w-full">
          <p className="font-medium text-sm text-textGray dark:text-text_2">
            Remaining User Balance
          </p>
          <div className="grid md:grid-cols-5 grid-cols-3 w-full mt-2">
            {dataRemaining.map((item, index) => (
              <div
                key={index}
                className="border-dashed border border-gray-400 px-2 py-4"
              >
                <p className="font-medium text-greenColor dark:text-colorSuccess text-sm">
                  {item.money} {index === 9 ? "" : "$"}
                </p>
                <p className="font-medium text-textGray dark:text-text_2 text-xs mt-2">
                  {item.nameBalance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-full h-full">
        <div className="flex md:flex-row md:gap-0 gap-2 flex-col justify-between items-center">
          <div className="font-medium md:block flex justify-between items-center w-full">
            <p className="md:text-sm text-xs text-textGray dark:text-text_2">
              Account Deposited
            </p>
            <p className="md:text-[22px] md:mt-2 text-xl">1.378</p>
          </div>
          <div className="flex md:justify-center justify-between items-center gap-4">
            <div className="">
              <DateRangePicker />
            </div>
            <button className="py-2 px-4 text-sm text-black  bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 dark:text-white rounded-lg border border-text_2 shadow-lg">
              Search
            </button>
          </div>
        </div>
        <div className="w-full md:h-[380px] h-[405px] mt-3 shadow-xl rounded-[10px] bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 border border-text_2"></div>
      </div>
    </div>
  );
};

export default Analytics;
