import React from "react";

const Referral = () => {
  return (
    <div className="px-6 py-3 bg-white dark:bg-[#151818] rounded-[10px] dark:border dark:border-text_4">
      <div className="p-2 flex justify-between items-center text-sm font-medium bg-colorBgBoxMemberLight dark:bg-black rounded-[10px]">
        <p className="text-textGray dark:text-text_2">Referral Sponsor</p>
        <p>abc1234</p>
      </div>
      <div className="my-2">
        <div className="flex justify-between items-center gap-4 ">
          <div className="md:text-sm text-xs flex-1 font-medium p-2 text-textGray bg-colorBgBoxMemberLight dark:bg-black rounded-[10px]">
            <p className="mb-2">Total Referrals</p>
            <p className="text-primary">3</p>
          </div>
          <div className="md:text-sm text-xs flex-1 font-medium p-2 text-textGray bg-colorBgBoxMemberLight dark:bg-black rounded-[10px]">
            <p className="mb-2">Total Vip Member</p>
            <p className="text-primaryLight dark:text-primary">2</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center gap-4 ">
          <div className="md:text-sm text-xs flex-1 font-medium p-2 text-textGray bg-colorBgBoxMemberLight dark:bg-black rounded-[10px]">
            <p className="mb-2">Trading Commission</p>
            <p className="text-[#ffa09f]">$53.5</p>
          </div>
          <div className="md:text-sm text-xs flex-1 font-medium p-2 text-textGray bg-colorBgBoxMemberLight dark:bg-black rounded-[10px]">
            <p className="mb-2">VIP Commission</p>
            <p className="text-primaryLight dark:text-primary">$51.2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
