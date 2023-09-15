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
  { name: "Vip Level" },
  { name: "Balance" },
  { name: "Created At" },
];

const data = [
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "tiendv@blackoakholdings.net",
    memberShip: "Normal",
    vipLevel: "Pick",
    balance: "$12,565",
    createAt: "09/06/2023",
  },
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "tiendv@blackoakholdings.net",
    memberShip: "Vip 1",
    vipLevel: "Pick",
    balance: "$12,565",
    createAt: "09/06/2023",
  },
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "tiendv@blackoakholdings.net",
    memberShip: "Marketing",
    vipLevel: "Pick",
    balance: "$12,565",
    createAt: "09/06/2023",
  },
];

const AllAccount = () => {
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
  const options = [
    { value: "Normal", label: "Normal" },
    { value: "Marketing", label: "Marketing" },
    { value: "Vip", label: "Vip" },
    { value: "Vip 1", label: "Vip 1" },
  ];
  const optionsVipLevel = [{ value: "Pick", label: "Pick" }];
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
                <th
                  className={`py-4 md:px-4 px-0 text-sm text-black dark:text-text_2 text-center font-medium `}
                >
                  Details
                </th>
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
                    <select
                      className="px-4 py-2 bg-colorBgBoxMemberLight dark:bg-text_4 font-normal text-sm rounded-lg"
                      defaultValue={item.memberShip}
                    >
                      {options?.map((option) => (
                        <option
                          className="text-sm"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    <select
                      className="px-4 py-2 bg-colorBgBoxMemberLight dark:bg-text_4 font-normal text-sm rounded-lg"
                      defaultValue={item.vipLevel}
                    >
                      {optionsVipLevel?.map((option) => (
                        <option
                          className="text-sm"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 text-sm   font-normal text-left text-greenColor dark:text-colorSuccess">
                    {item.balance}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.createAt}
                  </td>

                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal flex justify-center">
                    <BiShow className="w-7 h-7 text-textGray dark:text-text_2 cursor-pointer" />
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

export default AllAccount;
