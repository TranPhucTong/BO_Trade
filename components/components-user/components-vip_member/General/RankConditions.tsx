import React from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import image_so1 from "../../../../public/VipMember_image/so1.svg";
import Image from "next/image";

const RankConditions = () => {
  return (
    <div className="px-6 py-4 bg-white dark:bg-[#151818] rounded-[10px]  dark:border dark:border-text_4">
      <div className="flex justify-end items-center">
        <div className="border border-primaryLight dark:border-primary w-[90%] rounded-tl-0 rounded-tr-[22px] rounded-bl-0 rounded-br-[8px]">
          <div className="flex relative  justify-end items-center gap-2 p-1">
            <p>Vip Level</p>
            <TbMessageCircleQuestion className="w-5 h-5 text-primaryLight dark:text-primary" />
            <button className="flex text-white dark:text-black justify-center items-center px-4 py-3 gap-2 bg-primaryLight dark:bg-primary rounded-tl-[5px] rounded-tr-[20px] rounded-br-[5px] rounded-bl-[20px]">
              <BsArrowUpRight className="w-5 h-5" />
              <p>Upgrace LV</p>
            </button>
            <Image
              src={image_so1}
              className="rounded-full w-16 h-16 object-cover absolute -top-1 -left-10"
              alt="image_so1"
            />
          </div>
        </div>
      </div>
      <h1 className="text-center text-sm font-medium my-2">Rank Conditions</h1>
      <div className="flex-col flex gap-2 p-4 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-black">
        <div className="flex justify-between items-center font-normal text-textGray dark:text-text_2">
          <p className="text-sm">F1 Volume (This Week)</p>
          <p>
            <span className="text-black dark:text-white">80 / </span>2.000
          </p>
        </div>
        <div className="flex justify-between items-center font-normal text-textGray dark:text-text_2 ">
          <p className="text-sm">F1 Vip</p>
          <p>
            <span className="text-black dark:text-white">2 / 4</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankConditions;
