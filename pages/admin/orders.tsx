import FilterAdmin from "@/components/components-admin/FilterAdmin";
import React, { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import avtAccount from "../../public/admin_images/all-account/man 1.svg";
import Image from "next/image";

const headers = [
  { name: "ID" },
  { name: "Username" },
  { name: "Email" },
  { name: "Membership" },
  { name: "Order Type" },
  { name: "Option Type" },
  { name: "Open Base" },
  { name: "Close Base" },
  { name: "Amount" },
  { name: "Profit" },
  { name: "Created At" },
];

const data = [
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "tiendv@blackoakholdings.net",
    memberShip: "Vip",
    orderType: "Buy",
    optionType: "BTCUSDT",
    openBase: "29252.4",
    closeBase: "29252.1",
    amount: "$100",
    profit: "$100",
    createdAt: "28/07/2023",
  },
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "tiendv@blackoakholdings.net",
    memberShip: "Vip",
    orderType: "Buy",
    optionType: "BTCUSDT",
    openBase: "29252.4",
    closeBase: "29252.1",
    amount: "$100",
    profit: "$100",
    createdAt: "28/07/2023",
  },
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "tiendv@blackoakholdings.net",
    memberShip: "Vip",
    orderType: "Buy",
    optionType: "BTCUSDT",
    openBase: "29252.4",
    closeBase: "29252.1",
    amount: "$100",
    profit: "$100",
    createdAt: "28/07/2023",
  },
];

const Orders = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8;
  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: any[] = data.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
  return (
    <div>
      <FilterAdmin />
      <div className="mt-4">
        <div className="w-full bg-white dark:bg-[#151818] dark:border-text_4 rounded-xl border border-text_2 ">
          <table className="w-full border-collapse">
            <thead className="rounded-t-lg border-b border-text_2 dark:border-text_4">
              <tr className="">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className={`py-4 md:px-4 px-0 text-sm text-black dark:text-text_2 text-left font-medium `}
                  >
                    {header.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    <Image
                      src={item.id}
                      alt="AVT Account"
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.username}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    <p className="px-2 py-1 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-text_4 inline-block">
                      {item.memberShip}
                    </p>
                  </td>
                  <td className="px-4 py-2 text-sm text-primaryLight dark:text-primary font-normal">
                    <p className="px-2 py-1 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-text_4 inline-block">
                      {item.orderType}
                    </p>
                  </td>
                  <td className="px-4 py-2 text-sm text-colorError dark:text-Secondary3 font-normal">
                    <p className="px-2 py-1 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-text_4 inline-block">
                      {item.optionType}
                    </p>
                  </td>
                  <td className="px-4 py-2 text-sm text-redColor dark:text-colorError font-normal">
                    {item.openBase}
                  </td>
                  <td className="px-4 py-2 text-sm text-primaryLight dark:text-colorSuccess font-normal">
                    {item.closeBase}
                  </td>
                  <td className="px-4 py-2 text-sm   font-normal text-right text-Secondary dark:text-Secondary2">
                    {item.amount}
                  </td>
                  <td className="px-4 py-2 text-sm   font-normal text-right text-Secondary dark:text-Secondary2">
                    {item.profit}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center border-t border-text_2 dark:border-text_4 py-4 px-8">
            <div className="flex items-center">
              <input
                type="number"
                value={currentPage}
                onChange={(e) => {
                  const newPage = parseInt(e.target.value);
                  if (
                    !isNaN(newPage) &&
                    newPage >= 1 &&
                    newPage <= totalPages
                  ) {
                    handlePageChange(newPage);
                  }
                }}
                className="w-[41px] h-6 border rounded p-1 text-center text-sm font-medium text-textGray dark:text-text_2 dark:bg-transparent"
              />
              <span className="ml-1 text-sm font-medium text-textGray dark:text-text_2">
                {" "}
                of {totalPages}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`border border-textGray rounded-lg p-2 ${
                  currentPage === 1 ? "text-gray-400" : ""
                }`}
              >
                <BsArrowLeft />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`border border-textGray rounded-lg p-2 ${
                  currentPage === totalPages ? "text-gray-400" : ""
                }`}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
