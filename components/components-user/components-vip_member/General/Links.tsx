import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const Links = () => {
  return (
    <div className="bg-white w-full relative rounded-[10px] px-6 py-6">
      <div>
        <div className="flex gap-2 text-textGray justify-start items-center mb-[14px]">
          <AiOutlineLink className="w-8 h-8" />
          <h2 className="font-medium text-base leading-[20.42px]">
            Registration Link
          </h2>
        </div>
        <div className="flex flex-grow">
          <div className="flex-1 p-4 bg-colorBgBoxMemberLight rounded-l-lg">
            <p className="font-light text-base leading-[20.42px] text-textGray overflow-hidden whitespace-nowrap">
              https://adtrade.net/en?ref=...
            </p>
          </div>
          <button className="py-4 px-6 text-base rounded-r-lg text-white font-medium leading-[20.42px] bg-primaryLight">
            Copy
          </button>
        </div>
      </div>
      <div className="mt-4 w-full">
        <div className="flex gap-2 text-textGray justify-start items-center mb-[14px]">
          <AiOutlineLink className="w-8 h-8" />
          <h2 className="font-medium text-base leading-[20.42px]">
            Referral Code
          </h2>
        </div>
        <div className="flex flex-grow">
          <div className="flex-1 p-4 bg-colorBgBoxMemberLight rounded-l-lg">
            <p className="font-light text-base leading-[20.42px] text-textGray overflow-hidden whitespace-nowrap">
              xC9aMFa4cE
            </p>
          </div>
          <button className="py-4 px-6 text-base rounded-r-lg text-white font-medium leading-[20.42px] bg-primaryLight">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
