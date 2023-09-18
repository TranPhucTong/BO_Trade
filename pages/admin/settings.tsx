import React, { useState } from "react";
import { Button, Input, Tooltip } from "@mantine/core";
import { useId } from "@mantine/hooks";
import InputAdmin from "@/components/components-admin/InputAdmin";
import { BsChevronDown } from "react-icons/bs";

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
  const [openWallet, setOpenWallet] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openCommission, setOpenCommission] = useState(false);
  const [openVipCommission, setOpenVipCommission] = useState(false);

  return (
    <div className="flex md:flex-row flex-col justify-between items-start gap-4 md:mx-0 mx-4 md:mb-0 mb-4">
      <div
        onClick={() => setOpenWallet(!openWallet)}
        className="md:hidden bg-white w-full px-4 py-4 shadow-xl flex justify-between items-center border border-text_2 rounded-[10px]"
      >
        <p>Wallet</p>
        <div
          className={` ${
            openWallet &&
            "transform rotate-180 transition-all duration-200 ease-in-out"
          }`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={`md:flex-1 w-full p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark
      ${openWallet ? "block" : "hidden md:block"}
      `}
      >
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
      <div
        onClick={() => setOpenSetting(!openSetting)}
        className="md:hidden bg-white w-full px-4 py-4 shadow-xl flex justify-between items-center border border-text_2 rounded-[10px]"
      >
        <p>Setting</p>
        <div
          className={` ${
            openSetting &&
            "transform rotate-180 transition-all duration-200 ease-in-out"
          }`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={`md:flex-1 w-full p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark
      ${openSetting ? "block" : "hidden md:block"}
      `}
      >
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
      <div
        onClick={() => setOpenCommission(!openCommission)}
        className="md:hidden bg-white w-full px-4 py-4 shadow-xl flex justify-between items-center border border-text_2 rounded-[10px]"
      >
        <p>Trade Commission</p>
        <div
          className={` ${
            openCommission &&
            "transform rotate-180 transition-all duration-200 ease-in-out"
          }`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={`md:flex-1 w-full p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark
      ${openCommission ? "block" : "hidden md:block"}
      `}
      >
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
      <div
        onClick={() => setOpenVipCommission(!openVipCommission)}
        className="md:hidden bg-white w-full px-4 py-4 shadow-xl flex justify-between items-center border border-text_2 rounded-[10px]"
      >
        <p>Vip Commission</p>
        <div
          className={` ${
            openVipCommission &&
            "transform rotate-180 transition-all duration-200 ease-in-out"
          }`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={`md:flex-1 w-full p-2 rounded-[10px] border border-text_2 shadow-xl bg-white dark:bg-bgBoxDark
      ${openVipCommission ? "block" : "hidden md:block"}
      `}
      >
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
