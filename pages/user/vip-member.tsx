import Links from "@/components/components-user/components-vip_member/General/Links";
import RankConditions from "@/components/components-user/components-vip_member/General/RankConditions";
import Referral from "@/components/components-user/components-vip_member/General/Referral";
import Statistics from "@/components/components-user/components-vip_member/General/Statistics";
import Support from "@/components/components-user/components-vip_member/General/Support";
import TradingVolume from "@/components/components-user/components-vip_member/General/TradingVolume";
import React from "react";

const vipmember = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <RankConditions />
        </div>
        <div className="flex-1">
          <Referral />
        </div>
        <div className="flex-1">
          <Links />
        </div>
      </div>
      <div className="flex gap-4 justify-between items-start">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="bg-white rounded-[10px] w-full">
            <Statistics />
          </div>
          <div className="bg-white rounded-[10px] w-full">
            <Support />
          </div>
        </div>
        <div className="w-1/3 bg-white rounded-[10px]">
          <TradingVolume />
        </div>
      </div>
    </div>
  );
};

export default vipmember;
