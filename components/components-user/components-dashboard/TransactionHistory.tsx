import React, { useEffect, useState } from "react";
import { PiCurrencyCircleDollarThin } from "react-icons/pi";
import DateRangePicker from "../components-vip_member/DateRangePicker";
import Table from "@/components/Table";

const headers = [
  { header: "ID", key: "ID" },
  { header: "Start Time", key: "startTime" },
  { header: "Option Type", key: "optionType" },
  { header: "Balance Type", key: "balanceType" },
  { header: "Base Price", key: "basePrice" },
  { header: "Closed Price", key: "closedPrice" },
  { header: "Trade Amount", key: "tradeAmount" },
  { header: "Payout", key: "payout" },
];

const data = [
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
  {
    ID: "1000518",
    startTime: "03:46:35",
    optionType: "BTCUSDT",
    balanceType: "Buy",
    basePrice: "29420.4",
    closedPrice: "29420.4",
    tradeAmount: "$162.26",
    payout: "$0",
  },
];

interface TableData {
  id: number;
  username: string;
  email: string;
  amount: number;
  status: string;
  money: number;
  tong: string;
}
const TransactionHistory = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:px-0 px-6 md:gap-0 gap-2">
        <div className="flex justify-center items-center">
          <PiCurrencyCircleDollarThin className="w-7 h-7 text-primaryLight dark:text-primary" />
          <p className="text-lg font-medium">Transaction History</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <DateRangePicker />
          </div>
          <button className="py-2 px-4 text-sm text-white dark:text-black bg-primaryLight dark:bg-primary rounded-lg">
            Search
          </button>
        </div>
      </div>
      <div className="mt-2 md:mb-0 mb-4 md:mx-0 mx-6">
        <Table headers={headers} data={data} />
      </div>
      {/* <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              {isMobile && (
                <th>
                  <button
                    onClick={showPrevColumns}
                    className="px-2 py-1 border rounded mr-2"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={showNextColumns}
                    className="px-2 py-1 border rounded"
                  >
                    &gt;
                  </button>
                </th>
              )}
              {Object.keys(data1[0])
                .slice(
                  startColumn,
                  startColumn +
                    (isMobile ? columnsToShowMobile : columnsToShowDesktop)
                )
                .map((column, index) => (
                  <th key={index} className="px-4 py-2">
                    {column}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data1.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {isMobile && (
                  <td>
                    <button className="px-2 py-1 border rounded">👁</button>
                  </td>
                )}
                {Object.keys(row)
                  .slice(
                    startColumn,
                    startColumn +
                      (isMobile ? columnsToShowMobile : columnsToShowDesktop)
                  )
                  .map((key, colIndex) => (
                    <td key={colIndex} className="px-4 py-2">
                      {row[key as keyof TableData]}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default TransactionHistory;
