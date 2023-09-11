import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiEyeClosedLight } from "react-icons/pi";
import withdraw from "../../../public/wallet/Withdraw.svg";
import deposit from "../../../public/wallet/Deposit.svg";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";

import { BsChevronDown } from "react-icons/bs";

const Exchange = () => {
  const dataTable = [
    {
      id: 200,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 199,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 198,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Fail",
      create: "06/08/2023 3:53",
    },
    {
      id: 197,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 196,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Fail",
      create: "06/08/2023 3:53",
    },
    {
      id: 195,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 195,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 195,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 195,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
    {
      id: 195,
      type: "Transfer",
      amount: "1,207.1 TRX",
      hash: "",
      status: "Success",
      create: "06/08/2023 3:53",
    },
  ];
  return (
    <div className="px-4">
      <div className="p-6 bg-colorMenuNavigate dark:bg-[#151818] rounded-lg">
        <div className="flex justify-between items-center gap-4">
          <div className="px-4 py-5 rounded-[10px] bg-primaryLight dark:bg-primary text-white dark:text-black">
            <p className="text-lg font-medium">Total Assets (USDT)</p>
            <div className="flex justify-center items-center gap-4 mt-2">
              <p className="text-4xl font-medium">$15,243.56</p>
              <PiEyeClosedLight className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-grow px-4 py-5 bg-white dark:bg-black rounded-lg text-left flex flex-col gap-2 border border-text_2">
            <h2 className="text-textGray dark:text-text_2 text-lg">
              Real Account
            </h2>
            <div className="flex justify-between items-center gap-4">
              <p className="font-medium text-4xl">$0,023.8</p>
              <button className="flex px-6 py-2 gap-2 dark:bg-primary bg-primaryLight text-white rounded-[10px]">
                <p className="dark:text-black font-medium">Transfer</p>
                <GrPowerCycle className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="px-4 py-5 bg-white dark:bg-black rounded-lg text-left flex flex-col gap-2 border border-text_2">
            <h2 className="text-textGray dark:text-text_2 text-lg">
              Demo Account
            </h2>
            <div className="flex justify-between items-center gap-4">
              <p className="font-medium text-4xl">$1,000.54</p>
              <button className="flex px-10 py-2 gap-2 dark:bg-primary bg-primaryLight text-white rounded-[10px]">
                <p className="dark:text-black font-medium">Refill Balance</p>
                <GrPowerCycle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-start items-center gap-2 mb-6">
            <RiMoneyDollarCircleLine className="w-5 h-5 text-primaryLight dark:text-primary" />
            <h1 className="font-medium text-lg">Transaction History</h1>
          </div>
          <div className="bg-white dark:bg-black rounded-lg border border-text_2">
            <div className="flex justify-between items-center border-b border-text_2">
              <div className="p-1 flex justify-start items-center cursor-pointer">
                <div className="px-6 py-2 font-bold rounded-lg bg-text_2 dark:bg-text_4 text-black dark:text-white">
                  Transactions
                </div>
                <div className="px-6 py-2 font-bold rounded-lg">
                  Commissions
                </div>
              </div>
              <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer mr-4 shadow-lg" />
            </div>
            <div className="overflow-auto h-[300px]">
              <table className="md:min-w-full w-full h-auto rounded-lg dark:bg-black">
                <thead className="border-b border-text_2 dark:border-text_4 ">
                  <tr className="bg-colorBgBoxMemberLight dark:bg-[#151818] text-textGray dark:text-text_2 font-normal md:text-sm text-[8px] rounded-lg">
                    <th className="py-2">ID</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Tx.Hash</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((item, index) => (
                    <tr key={index} className="text-textGray">
                      <td className="py-2 text-center">{item.id}</td>
                      <td className="py-2 text-center">{item.type}</td>
                      <td className="py-2 text-center">{item.amount}</td>
                      <td className="py-2 text-center">{item.hash}</td>
                      <td
                        className={`py-2 text-center ${
                          item.status === "Fail"
                            ? "text-[#ffa09f]"
                            : "text-[#7bccc5]"
                        }`}
                      >
                        {item.status}
                      </td>
                      <td className="py-2 text-center">{item.create}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
