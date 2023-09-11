import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const Support = () => {
  return (
    <div className="flex md:flex-row flex-col px-6 py-3 md:justify-between md:items-center gap-2 justify-center items-start dark:border dark:border-text_4 dark:bg-[#151818] rounded-lg">
      <div className="flex justify-center items-center gap-2">
        <BiSupport className="md:w-8 md:h-8 w-14 h-14 text-primaryLight" />
        <p className="text-sm font-normal text-textGray">
          Lorem ipsum dolor sit amet consectetur. Diam pretium massa
          <br className="md:block hidden" /> nullam amet accumsan est donec.
        </p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <CiMail className="w-8 h-8 text-primaryLight" />
        <div>
          <p className="text-sm font-normal text-textGray">
            contact@adtrade.net
          </p>
          <p className="text-xs font-normal text-text_2">email support 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
