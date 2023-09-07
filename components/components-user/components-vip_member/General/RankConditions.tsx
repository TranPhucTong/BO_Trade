import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import questionImage from "../../../../public/VipMember_image/so1.svg";
import Image from "next/image";

const RankConditions = () => {
  return (
    <div className="bg-white relative rounded-[10px] px-6 py-6">
      <div className="flex justify-end items-center">
        <div className="flex w-[85%] justify-end items-center h-auto p-[2px] border border-primaryLight rounded-tl-none rounded-bl-none rounded-tr-[22px] rounded-br-[8px]">
          <div className="flex justify-center items-center gap-4">
            <p className="font-medium text-base leading-[20.42px]">Vip Level</p>
            <TbMessageCircleQuestion className="w-5 h-5 text-primaryLight" />
            <div className="py-4 px-4 bg-primaryLight rounded-tl-[5px] rounded-tr-[20px] rounded-br-[5px] rounded-bl-[20px] flex justify-center items-center text-white gap-2">
              <BsArrowUpRight className="w-5 h-5" />
              <p className="font-bold leading-[20.42px] text-base">
                Upgrace LV
              </p>
            </div>
            <Image
              src={questionImage}
              alt="questionImage"
              className="absolute left-6 top-4 h-[70px] object-cover rounded-full "
            />
          </div>
        </div>
      </div>
      <h2 className="font-medium text-base text-center leading-[20.42px] mt-8">
        Rank Conditions
      </h2>
      <div className="p-4 mt-6 rounded-lg bg-colorBgBoxMemberLight text-base font-normal leading-[20.42px]">
        <div className="flex justify-between items-center">
          <p>F1 Volume (This Week)</p>
          <p>
            80 / <span className="text-textGray">2.000</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p>F1 Vip</p>
          <p>2 / 4</p>
        </div>
      </div>
    </div>
  );
};

export default RankConditions;
