import React from "react";

const Referral = () => {
  return (
    <div className="bg-white relative rounded-[10px] px-6 py-6">
      <div className="p-4 flex justify-between items-center rounded-lg bg-colorBgBoxMemberLight text-base font-medium leading-[20.42px]">
        <h2 className="text-textGray">Referral Sponsor</h2>
        <p>abc1234</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-colorBgBoxMemberLight rounded-lg py-2 px-4 text-textGray text-[13px] font-medium leading-[20.42px]">
          <h2 className="mb-2">Total Referrals</h2>
          <p className="text-[#7bccc5]">3</p>
        </div>
        <div className="bg-colorBgBoxMemberLight rounded-lg py-2 px-4 text-textGray text-[13px] font-medium leading-[20.42px]">
          <h2 className="mb-2">Total Vip Member</h2>
          <p className="text-primaryLight">2</p>
        </div>
        <div className="bg-colorBgBoxMemberLight rounded-lg py-2 px-4 text-textGray text-[13px] font-medium leading-[20.42px]">
          <h2 className="mb-2">Trading Commission</h2>
          <p className="text-colorError">$53.5</p>
        </div>
        <div className="bg-colorBgBoxMemberLight rounded-lg py-2 px-4 text-textGray text-[13px] font-medium leading-[20.42px]">
          <h2 className="mb-2">VIP Commission</h2>
          <p className="text-primaryLight">$51.2</p>
        </div>
      </div>
    </div>
  );
};

export default Referral;
