import React from "react";
import { Button, Input, Tooltip } from "@mantine/core";
import { useId } from "@mantine/hooks";
import InputAdmin from "@/components/components-admin/InputAdmin";

const Settings = () => {
  const DataSettingWallet = [
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
    {
      name: "USDT Wallet",
      value: "0x9FcA1Fa8152C6Ca95b666A859...",
    },
  ];
  const DataSetting = [
    {
      name: "Trade Profit",
      value: "95",
      rightSection: "percent",
    },
    {
      name: "Trade Profit",
      value: "95",
      rightSection: "dollar",
    },
    {
      name: "Trade Profit",
      value: "95",
      rightSection: "dollar",
    },
    {
      name: "Trade Profit",
      value: "95",
      rightSection: "dollar",
    },
    {
      name: "Trade Profit",
      value: "95",
      rightSection: "percent",
    },
    {
      name: "Trade Profit",
      value: "95",
      rightSection: "percent",
    },
  ];
  const DataTradeCommission = [
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
    {
      name: "Level 1",
      value: "0.5",
      rightSection: "percent",
    },
  ];
  const DataVipCommission = [
    {
      name: "Level 1",
      value: "0.25",
    },
    {
      name: "Level 1",
      value: "0.25",
    },
    {
      name: "Level 1",
      value: "0.25",
    },
    {
      name: "Level 1",
      value: "0.25",
    },
    {
      name: "Level 1",
      value: "0.25",
    },
    {
      name: "Level 1",
      value: "0.25",
    },
    {
      name: "Level 1",
      value: "0.25",
    },
  ];
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1 p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark">
        <p className="font-medium text-lg text-black dark:text-white">Wallet</p>
        <div className="flex flex-col gap-2 mt-4">
          {DataSettingWallet.map((item, index) => (
            <InputAdmin
              key={index}
              label={item.name}
              placeholder={item.value}
            />
          ))}
        </div>
        <Button className="w-full mt-4 bg-primaryLight dark:bg-primary dark:text-black">
          Save
        </Button>
      </div>
      <div className="flex-1 p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark">
        <p className="font-medium text-lg text-black dark:text-white">
          Setting
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {DataSetting.map((item, index) => (
            <InputAdmin
              key={index}
              label={item.name}
              placeholder={item.value}
              rightSection={item.rightSection}
            />
          ))}
        </div>
        <Button className="w-full mt-4 bg-primaryLight dark:bg-primary dark:text-black">
          Save
        </Button>
      </div>
      <div className="flex-1 p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark">
        <p className="font-medium text-lg text-black dark:text-white">
          Trade Commission
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {DataTradeCommission.map((item, index) => (
            <InputAdmin
              key={index}
              label={item.name}
              placeholder={item.value}
              rightSection={item.rightSection}
            />
          ))}
        </div>
        <Button className="w-full mt-4 bg-primaryLight dark:bg-primary dark:text-black">
          Save
        </Button>
      </div>
      <div className="flex-1 p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark">
        <p className="font-medium text-lg text-black dark:text-white">
          Vip Commission
        </p>
        <div className="flex flex-col gap-2 mt-4">
          {DataVipCommission.map((item, index) => (
            <InputAdmin
              key={index}
              label={item.name}
              placeholder={item.value}
            />
          ))}
        </div>
        <Button className="w-full mt-4 bg-primaryLight dark:bg-primary dark:text-black">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Settings;
