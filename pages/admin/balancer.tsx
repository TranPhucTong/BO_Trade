import TradingViewWidget from "@/components/components-user/components-trade/PriceChart/TradingViewWidget";
import React from "react";

const Balancer = () => {
  const percentageGreen = 59;
  const percentageRed = 100 - percentageGreen;
  return (
    <div>
      <div className="bg-white w-full h-[340px]">
        <TradingViewWidget />
      </div>
      <div className="w-full rounded-[10px] p-4 bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 shadow-lg border border-text_2 mt-4">
        <h1 className="text-lg font-medium">Psychological indicator</h1>
        <div className="flex justify-between items-center gap-2 font-medium text-lg mt-4">
          <p className="text-greenColor">{percentageGreen}%</p>
          <div className="relative w-full h-2">
            <div
              className="absolute rounded-xl top-0 left-0 w-full h-full bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${"rgba(0, 142, 118, 1)"} ${percentageGreen}%, ${"rgba(255, 49, 65, 1)"} ${percentageRed}%)`,
              }}
            ></div>
          </div>
          <p className="text-redColor">{percentageRed}%</p>
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <div className="font-normal text-sm text-greenColor">
            <p>Total Amount $0</p>
            <p>Total Buy 0</p>
          </div>
          <div className="font-normal text-sm text-redColor text-right">
            <p>Total Amount $0</p>
            <p>Total Buy 0</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <button className="px-6 py-2 rounded-[10px] text-white font-bold text-center text-sm bg-redColor">
            Inverse <br /> Low
          </button>
          <button className="px-6 py-2 rounded-[10px] text-white dark:text-black font-bold text-center text-sm bg-Secondary dark:bg-Secondary2">
            Balancer <br /> Auto
          </button>
          <button className="px-6 py-2 rounded-[10px] text-white font-bold text-center text-sm bg-primaryLight">
            Inverse <br /> High
          </button>
        </div>
      </div>
    </div>
  );
};

export default Balancer;
