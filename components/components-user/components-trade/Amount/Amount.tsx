import React from "react";
import { Plus, Minus, ArrowUpRight, ArrowDownRight } from "react-feather";
import { Button } from "@mantine/core";

const Amount = () => {
  const percentageGreen = 59;
  const percentageRed = 100 - percentageGreen;
  return (
    <div className="md:py-2 md:px-4 pb-8 p-2 flex flex-col gap-2">
      <h2 className="md:block hidden font-bold text-base">Amount</h2>
      <div className="flex md:hidden justify-center items-center gap-2">
        <div className="text-[14px] font-normal">
          <span>Profit</span>{" "}
          <span className="text-primaryLight dark:text-primary">95%</span>
        </div>
        <div className="font-bold text-[20px] text-greenColor">+$50.5</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-center items-center gap-1">
          <div className="p-1 rounded-lg bg-redColor text-white dark:bg-bgColorIcon cursor-pointer">
            <Minus />
          </div>
          <div className="flex rounded-sm justify-center items-center relative flex-grow py-2 bg-bgColorIconLight dark:bg-bgColorIcon">
            <p>0</p>
            <div className="absolute left-3 top-2 text-sm font-medium">$</div>
          </div>
          <div className="p-1 rounded-md bg-greenColor text-white cursor-pointer">
            <Plus />
          </div>
        </div>
        <div className="md:flex hidden justify-center items-center w-full">
          <div className="flex flex-grow gap-2">
            <div className="flex-grow text-sm flex justify-center py-2 rounded-md bg-bgColorIconLight dark:bg-bgColorIcon dark:text-white cursor-pointer">
              +5
            </div>
            <div className="flex-grow text-sm flex justify-center py-2 rounded-md bg-bgColorIconLight dark:bg-bgColorIcon dark:text-white cursor-pointer">
              +10
            </div>
            <div className="flex-grow text-sm flex justify-center py-2 rounded-md bg-bgColorIconLight dark:bg-bgColorIcon dark:text-white cursor-pointer">
              +20
            </div>
            <div className="flex-grow text-sm flex justify-center py-2 rounded-md bg-bgColorIconLight dark:bg-bgColorIcon dark:text-white cursor-pointer">
              +50
            </div>
            <div className="flex-grow text-sm flex justify-center py-2 rounded-md bg-bgColorIconLight dark:bg-bgColorIcon dark:text-white cursor-pointer">
              +100
            </div>
            <div className="flex-grow text-sm flex justify-center py-2 rounded-md bg-bgColorIconLight dark:bg-bgColorIcon dark:text-white cursor-pointer">
              All
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex hidden justify-center items-center flex-col">
        <div className="text-sm">
          <span className="font-normal">Profit</span>{" "}
          <span className="font-medium text-primaryLight dark:text-primary">
            95%
          </span>
        </div>
        <div className="font-bold text-2xl text-greenColor mt-1 leading-4">
          +$50.5
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-normal text-sm md:block hidden">
          Traders sentiments
        </h3>
        <div className="flex justify-between items-center gap-2 font-normal text-base">
          <p className="text-greenColor">{percentageGreen}%</p>
          <div className="relative w-full h-1">
            <div
              className="absolute rounded-xl top-0 left-0 w-full h-full bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${"rgba(0, 142, 118, 1)"} ${percentageGreen}%, ${"rgba(255, 49, 65, 1)"} ${percentageRed}%)`,
              }}
            ></div>
          </div>
          <p className="text-redColor">{percentageRed}%</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="flex-1">
          <Button className="bg-greenColor text-white w-full md:h-[40px] h-[44px] rounded-xl">
            <p className="font-bold uppercase text-[20px]">buy</p>
            <ArrowUpRight className="ml-2" size={30} />
          </Button>
        </div>
        <div className="flex-1">
          <div className="md:px-6 p-0 bg-bgColorIconLight dark:bg-bgColorIcon text-center rounded-xl">
            <p className="font-normal text-textGray text-[14px]">
              Please Trade
            </p>
            <p className="font-bold text-base">26s</p>
          </div>
        </div>
        <div className="flex-1">
          <Button className="bg-redColor text-white w-full md:h-[40px] h-[44px] rounded-xl">
            <p className="font-bold uppercase text-[20px]">sell</p>
            <ArrowDownRight className="ml-2" size={30} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Amount;
