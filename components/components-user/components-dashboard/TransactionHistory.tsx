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

const data1: TableData[] = [
  {
    id: 1,
    username: "user1",
    email: "user1@example.com",
    amount: 100,
    status: "Active",
    money: 500,
    tong: "alo alo",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    amount: 200,
    status: "Inactive",
    money: 800,
    tong: "alo alo",
  },
  {
    id: 3,
    username: "user3",
    email: "user3@example.com",
    amount: 300,
    status: "Active",
    money: 1200,
    tong: "alo alo",
  },
  {
    id: 4,
    username: "user4",
    email: "user4@example.com",
    amount: 150,
    status: "Active",
    money: 700,
    tong: "alo alo",
  },
  {
    id: 5,
    username: "user5",
    email: "user5@example.com",
    amount: 400,
    status: "Inactive",
    money: 1000,
    tong: "alo alo",
  },
];

const columnsToShowDesktop = Object.keys(data1[0]).length; // Hiển thị tất cả cột trên màn hình desktop
const columnsToShowMobile = 3; // Hiển thị 3 cột trên màn hình điện thoại
const TransactionHistory = () => {
  const [startColumn, setStartColumn] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Chuyển sang chế độ mobile khi độ rộng màn hình nhỏ hơn hoặc bằng 768px
    };

    handleResize(); // Kiểm tra ban đầu
    window.addEventListener("resize", handleResize); // Theo dõi sự kiện thay đổi kích thước màn hình
    return () => {
      window.removeEventListener("resize", handleResize); // Hủy đăng ký lắng nghe khi component bị hủy
    };
  }, []);

  const showNextColumns = () => {
    if (startColumn + columnsToShowMobile < columnsToShowDesktop) {
      setStartColumn((prev) => prev + columnsToShowMobile);
    }
  };

  const showPrevColumns = () => {
    if (startColumn - columnsToShowMobile >= 0) {
      setStartColumn((prev) => prev - columnsToShowMobile);
    }
  };
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
      <div className="mt-2">
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
