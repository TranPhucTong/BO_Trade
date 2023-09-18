import { Input, Tooltip } from "@mantine/core";
import React from "react";

const QuickDeposit = () => {
  return (
    <div className="md:hidden block px-4 w-full">
      <div>
        <p className="text-black dark:text-text_2 font-medium text-sm text-left mb-2">
          Choose Wallet
        </p>
        <div className="bg-white dark:bg-bgColorBox border border-text_2 rounded-[5px] px-2 py-1 flex justify-between items-center">
          <p className="font-bold text-primaryLight dark:text-primary text-2xl">
            T
          </p>
          <p className="text-sm font-medium">0.00</p>
        </div>
      </div>
      <div className="mt-2">
        <Input.Wrapper
          id="input-demo"
          label={
            <label className="text-black dark:text-text_2 font-medium text-sm mb-2">
              Deposit Amount
            </label>
          }
        >
          <Input
            id="input-deposit"
            placeholder="Please enter amount"
            rightSection={
              <Tooltip label="This is public" position="top-end" withArrow>
                <div className="text-primaryLight dark:text-primary font-medium text-sm">
                  All
                </div>
              </Tooltip>
            }
          />
        </Input.Wrapper>
      </div>
      <div className="mt-3">
        <p className="text-black dark:text-text_2 font-medium text-sm text-left">
          Total Receive Amount
        </p>
        <h1 className="text-center text-3xl text-black dark:text-white font-medium mt-3">
          $0.00
        </h1>
      </div>
      <button className="rounded-[5px] w-full py-3 text-white dark:text-black bg-primaryLight dark:bg-primary text-sm font-medium mt-3">
        Deposit Now
      </button>
    </div>
  );
};

export default QuickDeposit;
