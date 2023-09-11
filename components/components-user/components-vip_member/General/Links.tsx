import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const Links = () => {
  return (
    <div className="px-6 py-3 bg-white dark:bg-[#151818] rounded-[10px] dark:border dark:border-text_4 flex flex-col gap-4">
      <div className="flex justify-start items-center gap-2 text-textGray dark:text-text_2">
        <AiOutlineLink className="w-7 h-7" />
        <p className="text-sm font-medium">Registration Link</p>
      </div>
      <div className="flex w-full">
        <div className="p-2 pr-16 text-sm text-textGray bg-colorBgBoxMemberLight dark:bg-black">
          https://adtrade.net/en?ref=...
        </div>
        <button className=" flex-grow rounded-tr-lg rounded-br-lg text-white text-sm font-medium bg-primaryLight dark:bg-primary dark:text-black">
          Copy
        </button>
      </div>
      <div className="flex justify-start items-center gap-2 text-textGray dark:text-text_2">
        <AiOutlineLink className="w-7 h-7" />
        <p className="text-sm font-medium">Referral Code</p>
      </div>
      <div className="flex w-full">
        <div className="p-2 pr-44 text-sm text-textGray bg-colorBgBoxMemberLight dark:bg-black">
          xC9aMFa4cE
        </div>
        <button className=" flex-grow rounded-tr-lg rounded-br-lg text-white text-sm font-medium bg-primaryLight dark:bg-primary dark:text-black">
          Copy
        </button>
      </div>
    </div>
  );
};

export default Links;
