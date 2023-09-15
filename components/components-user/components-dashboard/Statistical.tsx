import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import dynamic from "next/dynamic";
import { GiChart } from "react-icons/gi";
import { PiChartLineDownThin, PiChartLineUpThin } from "react-icons/pi";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useTheme } from "next-themes";

const Donut = dynamic(() => import("./DonutChart"), {
  ssr: false, // Tắt Server-Side Rendering cho thành phần này
});

const Statistical = () => {
  const { theme } = useTheme();
  const themeColorRed = theme === "dark" ? "#ffa09f" : "#ff3141";
  const themeColorGreen = theme === "dark" ? "#9dfbfc" : "#008e76";
  const donutOptions = {
    legend: {
      show: false, // Ẩn chú thích
    },
    dataLabels: {
      enabled: false, // Ẩn chỉ số %
    },
    colors: [themeColorGreen, "#000", themeColorRed],
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: false, // Ẩn các nhãn trên biểu đồ
          },
        },
      },
    },
  };
  const donutOptionsSmall = {
    legend: {
      show: false, // Ẩn chú thích
    },
    dataLabels: {
      enabled: false, // Ẩn chỉ số %
    },
    colors: [themeColorGreen, "#000"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

  const donutData = {
    series: [70, 100, 41],
    labels: ["A", "B", "C"],
  };
  const donutDataSmall = {
    series: [150, 100],
    labels: ["A", "B"],
  };
  const percentageGreen = 59;
  const percentageRed = 100 - percentageGreen;

  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
      <div className="bg-white dark:bg-[#151818] dark:border-text_4 flex-grow border border-text_2 rounded-[10px] md:mx-0 mx-4">
        <div className="p-2 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
          <p className="text-sm text-textGray dark:text-text_2 font-medium">
            Trade Stats
          </p>
          <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer text-textGray" />
        </div>
        <div className="px-10 py-2 relative flex justify-center items-center">
          <Donut options={donutOptions} data={donutData} width="200px" />
          <div className="absolute text-center">
            <p className="text-sm font-medium text-textGray">Total Trade</p>
            <p className="text-lg font-bold">2235</p>
          </div>
        </div>
        <div className="flex justify-center items-center border-t border-b border-dashed border-gray-400">
          <div className="flex-1 py-1 px-6 ">
            <div className="flex justify-center items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#008e76] dark:bg-primary"></div>
              <p className="text-xs text-textGray dark:text-text_2">
                Total Win
              </p>
            </div>
            <p className="font-bold text-center text-lg">613</p>
          </div>
          <div className="flex-1 py-1 px-6 border-l border-r border-dashed border-gray-400">
            <div className="flex w-full justify-center items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#ff3141] dark:bg-colorError"></div>
              <p className="text-xs text-textGray dark:text-text_2 w-[60px]">
                Total Lose
              </p>
            </div>
            <p className="font-bold text-center text-lg">545</p>
          </div>
          <div className="flex-1 py-1 px-6 ">
            <div className="flex justify-center items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-black dark:bg-text_4"></div>
              <p className="text-xs text-textGray dark:text-text_2 w-[70px]">
                Total Draw
              </p>
            </div>
            <p className="font-bold text-center text-lg">802</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[60%] border-r px-6 py-1 border-dashed border-gray-400 flex justify-center items-center">
            <div>
              <p className="text-xs text-textGray dark:text-text_2 font-medium">
                Win Trade
              </p>
              <p className="text-lg font-bold text-primaryLight dark:text-primary">
                56%
              </p>
            </div>
            <div className="relative">
              <Donut
                options={donutOptionsSmall}
                data={donutDataSmall}
                width="90px"
              />
              <p className="absolute text-[10px] font-medium top-4 left-9">
                56%
              </p>
            </div>
          </div>
          <div className="w-[40%] px-6 py-1">
            <p className="text-xs text-textGray dark:text-text_2 font-medium">
              Total Trade
            </p>
            <p className="text-lg font-bold text-primaryLight dark:text-primary">
              $1663.53
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-4">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4">
          <div className="flex-1 rounded-[10px] border border-text_2 bg-white dark:bg-[#151818] dark:border-text_4">
            <div className="p-2 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
              <p className="text-sm text-textGray dark:text-text_2 font-medium">
                Net Profit
              </p>
              <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer text-textGray" />
            </div>
            <div className="p-4 flex justify-between items-center gap-8">
              <div className="flex justify-center items-center gap-2">
                <div className="p-4 bg-primaryLight dark:bg-text_4 rounded-[20px]">
                  <GiChart className="w-6 h-6 text-white" />
                </div>
                <div className="w-[126px]">
                  <p className="text-lg text-textGray dark:text-text_2 font-medium">
                    Net Profit
                  </p>
                  <p className="text-2xl font-medium">$ 523.64</p>
                </div>
              </div>
              <div className="w-[85px]">
                <div className="flex justify-end items-center">
                  <PiChartLineDownThin className="w-4 h-4 text-redColor dark:text-colorError" />
                  <p className="text-redColor dark:text-colorError text-lg font-medium">
                    23%
                  </p>
                </div>
                <p className="text-sm font-medium text-textGray dark:text-text_2 text-right">
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[10px] border border-text_2 bg-white dark:bg-[#151818] dark:border-text_4">
            <div className="p-2 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
              <p className="text-sm text-textGray dark:text-text_2 font-medium">
                Total Revenue
              </p>
              <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer text-textGray" />
            </div>
            <div className="p-4 flex justify-between items-center gap-8">
              <div className="flex justify-center items-center gap-2">
                <div className="p-4 bg-primaryLight dark:bg-text_4 rounded-[20px]">
                  <BiSolidDollarCircle className="w-6 h-6 text-white" />
                </div>
                <div className="w-[126px]">
                  <p className="text-lg text-textGray dark:text-text_2 font-medium">
                    Total Revenue
                  </p>
                  <p className="text-2xl font-medium">$ 1.523.64</p>
                </div>
              </div>
              <div className="w-[85px]">
                <div className="flex justify-end items-center">
                  <PiChartLineUpThin className="w-4 h-4 text-primaryLight" />
                  <p className="text-primaryLight text-lg font-medium">19%</p>
                </div>
                <p className="text-sm font-medium text-textGray dark:text-text_2 text-right">
                  this month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#151818] dark:border-text_4 border border-text_2 rounded-[10px]">
          <div className="p-2 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
            <p className="text-sm text-textGray dark:text-text_2 font-medium">
              Trades Summary
            </p>
            <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer text-textGray" />
          </div>
          <div className="px-8 py-11">
            <div className="relative w-full h-2">
              <div
                className="absolute rounded-xl top-0 left-0 w-full h-full bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${themeColorGreen} ${percentageGreen}%, ${themeColorRed} ${percentageRed}%)`,
                }}
              ></div>
            </div>
            <div className="justify-between items-center flex mt-2 text-lg">
              <div className="font-medium text-greenColor dark:text-primary">
                Buy{" "}
                <span className=" text-black dark:text-white">
                  {percentageGreen}%
                </span>
              </div>
              <div className="font-medium text-redColor dark:text-colorError">
                Sell{" "}
                <span className=" text-black dark:text-white">
                  {percentageRed}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistical;
