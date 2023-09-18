import React, { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiEyeClosedLight } from "react-icons/pi";
import withdraw from "../../../public/wallet/Withdraw.svg";
import deposit from "../../../public/wallet/Deposit.svg";
import Image from "next/image";
import { BiDotsVerticalRounded, BiShow } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsEye,
} from "react-icons/bs";

const headersTable = [
  { name: "ID", key: "id" },
  { name: "Type", key: "type" },
  { name: "Amount", key: "amount" },
  { name: "Tx.Hash", key: "hash" },
  { name: "Created At", key: "create" },
  { name: "Status", key: "status" },
];

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
const Main = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  const totalPages: number = Math.ceil(dataTable.length / itemsPerPage);

  const [startColumn, setStartColumn] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const columnsToShowMobile = 3; // Số cột hiển thị trên màn hình điện thoại
  const columnsToShowDesktop = isMobile
    ? columnsToShowMobile
    : headersTable.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Chuyển sang chế độ mobile khi độ rộng màn hình nhỏ hơn hoặc bằng 768px
      setStartColumn((prev) => {
        if (isMobile) {
          return Math.max(0, prev); // Nếu đang ở chế độ mobile, không cho startColumn âm
        } else {
          return 0; // Nếu đang ở chế độ desktop, reset startColumn về 0
        }
      });
    };

    handleResize(); // Kiểm tra ban đầu
    window.addEventListener("resize", handleResize); // Theo dõi sự kiện thay đổi kích thước màn hình
    return () => {
      window.removeEventListener("resize", handleResize); // Hủy đăng ký lắng nghe khi component bị hủy
    };
  }, [isMobile]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: any[] = dataTable.slice(startIndex, endIndex);

  const showNextColumns = () => {
    if (startColumn + columnsToShowDesktop < headersTable.length) {
      setStartColumn((prev) => prev + columnsToShowDesktop);
    }
  };

  const showPrevColumns = () => {
    if (startColumn - columnsToShowDesktop >= 0) {
      setStartColumn((prev) => prev - columnsToShowDesktop);
    }
  };
  return (
    <div className="px-4 mb-4">
      <div className="md:p-6 md:bg-colorMenuNavigate md:dark:bg-[#151818] bg-transparent rounded-lg">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
          <div className="md:block hidden px-4 py-7 rounded-[10px] bg-primaryLight dark:bg-primary text-white dark:text-black">
            <p className="text-lg font-medium">Total Assets (USDT)</p>
            <div className="flex md:justify-center justify-start items-center gap-4 mt-2">
              <p className="text-4xl font-medium">$15,243.56</p>
              <PiEyeClosedLight className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-grow p-4 bg-white dark:bg-black rounded-lg border border-text_2">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-bold">Manual Deposit</h2>
              <div className="flex justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-2">
                  <Image src={deposit} alt="deposit" />
                  <p className="font-medium text-sm">Deposit</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Image src={withdraw} alt="withdraw" />
                  <p className="font-medium text-sm">Withdraw</p>
                </div>
              </div>
            </div>
            <div className="relative px-4 py-1 rounded-xl border border-text_2 mt-2 bg-colorMenuNavigate dark:bg-[#151818] flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <h1 className="text-6xl text-primaryLight dark:text-primary font-bold">
                  T
                </h1>
                <div className="flex flex-col justify-between items-start">
                  <p className="font-medium text-lg ">USDT</p>
                  <p className="font-medium text-xs text-textGray">BEP20</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <p className="font-medium text-lg ">1,335.32</p>
                <p className="font-medium text-xs text-textGray">~$ 102.65</p>
              </div>
              <div
                className={`absolute z-50 flex bg-white dark:bg-bgColorIcon shadow-md justify-center items-center cursor-pointer top-6 -right-3   w-[20px] h-[20px] rounded-full
                }`}
              >
                <BsChevronDown className="text-sm font-bold z-50" />
              </div>
            </div>
          </div>
          <div className="px-4 py-5 bg-white dark:bg-black rounded-lg text-left flex flex-col gap-2 border border-text_2">
            <h3 className="text-sm font-medium">Auto Deposit </h3>
            <p className="text-textGray dark:text-text_2 text-xs font-normal">
              Connect to wallets to make deposit
            </p>
            <button className="px-20 py-2 rounded-lg bg-primaryLight dark:bg-primary text-white dark:text-black text-sm font-medium">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-start items-center gap-2 mb-6">
            <RiMoneyDollarCircleLine className="w-5 h-5 text-primaryLight dark:text-primary" />
            <h1 className="font-medium text-lg">Transaction History</h1>
          </div>
          <div className="bg-white dark:bg-black rounded-lg border border-text_2 shadow-lg md:shadow-none">
            <div className="flex justify-between items-center border-b border-text_2">
              <div className="p-1 flex justify-start items-center cursor-pointer">
                <div className="px-6 py-2 font-bold rounded-lg bg-text_2 dark:bg-text_4 text-black dark:text-white">
                  Transactions
                </div>
                <div className="px-6 py-2 font-bold rounded-lg">
                  Commissions
                </div>
              </div>
              <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer mr-4 shadow-lg rounded-full" />
            </div>
            <div className="overflow-auto md:h-[300px] h-auto">
              <table className="md:min-w-full w-full h-auto rounded-lg dark:bg-black">
                <thead className="border-b border-text_2 dark:border-text_4 ">
                  <tr className="md:bg-colorBgBoxMemberLight bg-white dark:bg-[#151818] text-textGray dark:text-text_2 font-normal md:text-sm text-[10px] rounded-lg">
                    {headersTable
                      .slice(
                        startColumn,
                        startColumn +
                          (isMobile
                            ? columnsToShowMobile
                            : columnsToShowDesktop)
                      )
                      .map((header, index) => (
                        <th key={index} className="py-2">
                          {header.name}
                        </th>
                      ))}
                    {isMobile && (
                      <th>
                        <button
                          onClick={showPrevColumns}
                          className="p-1 bg-colorBgBoxMemberLight dark:bg-text_4 dark:text-white mr-2 rounded-full"
                        >
                          <BsChevronLeft className="w-3 h-3" />
                        </button>
                        <button
                          onClick={showNextColumns}
                          className="p-1 bg-colorBgBoxMemberLight dark:bg-text_4 dark:text-white rounded-full"
                        >
                          <BsChevronRight className="w-3 h-3" />
                        </button>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {isMobile
                    ? currentData.map((item, index) => (
                        <tr
                          key={index}
                          className="text-textGray md:text-sm text-[10px]"
                        >
                          {headersTable
                            .slice(
                              startColumn,
                              startColumn +
                                (isMobile
                                  ? columnsToShowMobile
                                  : columnsToShowDesktop)
                            )
                            .map((header) => (
                              <td
                                key={header.key}
                                className={`py-2 text-center ${
                                  item.status === "Fail" &&
                                  header.key === "status"
                                    ? "text-[#ffa09f]"
                                    : item.status === "Success" &&
                                      header.key === "status"
                                    ? "text-[#7bccc5]"
                                    : "text-textGray"
                                }`}
                              >
                                {item[header.key]}
                              </td>
                            ))}
                          <td className="text-center">
                            <button className="px-2 py-1 rounded">
                              <BsEye />
                            </button>
                          </td>
                        </tr>
                      ))
                    : dataTable.map((item, index) => (
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
              <div className="flex md:hidden justify-between items-center border-t border-text_2 dark:border-text_4 md:py-4 md:px-8 p-2">
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
      </div>
    </div>
  );
};

export default Main;
