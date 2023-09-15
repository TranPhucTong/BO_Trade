import FilterAdmin from "@/components/components-admin/FilterAdmin";
import React, { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const headers = [
  { name: "ID" },
  { name: "Full Name" },
  { name: "Country" },
  { name: "Country Code" },
  { name: "Create At" },
  { name: "Status" },
];

const data = [
  {
    ID: "1",
    fullName: "Kha My",
    country: "Viet Nam",
    countryCode: "VN",
    createAt: "28/07/2023",
    status: "Rejected",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "Japan",
    countryCode: "JP",
    createAt: "28/07/2023",
    status: "Verified",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "China",
    countryCode: "CN",
    createAt: "28/07/2023",
    status: "Verified",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "Sigapore",
    countryCode: "SG",
    createAt: "28/07/2023",
    status: "Rejected",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "Viet Nam",
    countryCode: "VN",
    createAt: "28/07/2023",
    status: "Verified",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "Viet Nam",
    countryCode: "VN",
    createAt: "28/07/2023",
    status: "Verified",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "Viet Nam",
    countryCode: "VN",
    createAt: "28/07/2023",
    status: "Reviewing",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "China",
    countryCode: "CN",
    createAt: "28/07/2023",
    status: "Reviewing",
  },
  {
    ID: "1",
    fullName: "Kha My",
    country: "Viet Nam",
    countryCode: "VN",
    createAt: "28/07/2023",
    status: "Rejected",
  },
];

const AccountVerify = () => {
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
                    {item.ID}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.fullName}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.country}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.countryCode}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    {item.createAt}
                  </td>
                  <td className="px-4 py-2 text-sm text-textGray dark:text-text_2 font-normal">
                    <p
                      className={`px-2 py-1 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-text_4 inline-block ${
                        item.status === "Rejected"
                          ? "text-redColor"
                          : item.status === "Verified"
                          ? "text-colorSuccess"
                          : "text-Secondary dark:text-Secondary2"
                      }`}
                    >
                      {item.status}
                    </p>
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

export default AccountVerify;
