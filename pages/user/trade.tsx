import React from "react";
import { Button } from "@mantine/core";
import Amount from "@/components/components-user/components-trade/Amount/Amount";
import Indicators from "@/components/components-user/components-trade/Indicators/Indicators";
import TradingViewWidget from "@/components/components-user/components-trade/PriceChart/TradingViewWidget";

const trade = () => {
  return (
    <div>
      <div className="bg-white w-full h-[340px]">
        <TradingViewWidget />
      </div>
      <div className="w-full flex md:flex-row flex-col md:justify-between md:gap-1 justify-center items-center md:mt-1 mt-4">
        <div className="md:w-[60%] w-full md:h-[290px] h-auto bg-white dark:bg-bgColorBox">
          <Indicators />
        </div>
        <div className="md:w-[40%] w-full md:h-[290px] h-auto bg-white dark:bg-bgColorBox">
          <Amount />
        </div>
      </div>
    </div>
  );
};

export default trade;
