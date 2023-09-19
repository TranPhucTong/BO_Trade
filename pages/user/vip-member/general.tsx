import Links from "@/components/components-user/components-vip_member/general/Links";
import RankConditions from "@/components/components-user/components-vip_member/general/RankConditions";
import Referral from "@/components/components-user/components-vip_member/general/Referral";
import Statistics from "@/components/components-user/components-vip_member/general/Statistics";
import Support from "@/components/components-user/components-vip_member/general/Support";
import TradingVolume from "@/components/components-user/components-vip_member/general/TradingVolume";
import React from "react";

const General = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col w-full justify-between items-center gap-2 px-2 md:px-0 mt-2 md:mt-0">
        <div className="md:flex-1 w-full">
          <RankConditions />
        </div>
        <div className="md:flex-1 w-full">
          <Referral />
        </div>
        <div className="md:flex-1 w-full">
          <Links />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-2 justify-between items-start mt-2 px-2 md:px-0 ">
        <div className="md:w-2/3 w-full flex flex-col gap-2">
          <div className="bg-white rounded-[10px] w-full">
            <Statistics />
          </div>
          <div className="bg-white rounded-[10px] md:block hidden w-full">
            <Support />
          </div>
        </div>
        <div className="md:w-1/3 w-full bg-white dark:bg-[#151818] dark:border dark:border-text_4 rounded-[10px]">
          <TradingVolume />
        </div>
        <div className="bg-white md:hidden block rounded-[10px] w-full md:mb-0 mb-5">
          <Support />
        </div>
      </div>
    </div>
  );
};

export default General;
