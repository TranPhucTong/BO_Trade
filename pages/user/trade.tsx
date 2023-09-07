import React from "react";
import { Button } from "@mantine/core";
import Amount from "@/components/components-user/components-trade/Amount/Amount";
import Indicators from "@/components/components-user/components-trade/Indicators/Indicators";
import TradingViewWidget from "@/components/components-user/components-trade/PriceChart/TradingViewWidget";

const trade = () => {
  return (
    <div>
      <div className="bg-white w-full h-[694px]">
        <TradingViewWidget />
      </div>
      <div className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:mt-6 mt-4">
        <div className="md:w-[60%] w-full md:h-[418px] h-auto bg-white dark:bg-bgColorBox">
          <Indicators />
        </div>
        <div className="md:w-[38%] w-full md:h-[418px] h-auto bg-white dark:bg-bgColorBox">
          <Amount />
        </div>
      </div>
    </div>
  );
};

export default trade;
