import FilterAdmin from "@/components/components-admin/FilterAdmin";
import React, { useState, useEffect } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsEye,
} from "react-icons/bs";
import avtAccount from "../../public/admin_images/all-account/man 1.svg";
import Image from "next/image";

const headers = [
  { name: "ID", key: "id" },
  { name: "Username", key: "username" },
  { name: "Email", key: "email" },
  { name: "Membership", key: "memberShip" },
  { name: "Order Type", key: "orderType" },
  { name: "Option Type", key: "optionType" },
  { name: "Open Base", key: "openBase" },
  { name: "Close Base", key: "closeBase" },
  { name: "Amount", key: "amount" },
  { name: "Profit", key: "profit" },
  { name: "Created At", key: "createdAt" },
];

const data = [
  {
    id: avtAccount,
    username: "johnwickjh",
    email: "miemieuwu9704@gmail.com",
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
    email: "miemieuwu9704@gmail.com",
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
    email: "miemieuwu9704@gmail.com",
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

  const [startColumn, setStartColumn] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const columnsToShowMobile = 3; // Số cột hiển thị trên màn hình điện thoại
  const columnsToShowDesktop = isMobile ? columnsToShowMobile : headers.length;

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
  const currentData: any[] = data.slice(startIndex, endIndex);

  const showNextColumns = () => {
    if (startColumn + columnsToShowDesktop < headers.length) {
      setStartColumn((prev) => prev + columnsToShowDesktop);
    }
  };

  const showPrevColumns = () => {
    if (startColumn - columnsToShowDesktop >= 0) {
      setStartColumn((prev) => prev - columnsToShowDesktop);
    }
  };

  return (
    <div>
      <FilterAdmin />
      <div className="mt-4 md:mx-0 mx-4">
        <div className="w-full bg-white dark:bg-[#151818] dark:border-text_4 rounded-xl border border-text_2 ">
          <table className="w-full border-collapse">
            <thead className="rounded-t-lg border-b border-text_2 dark:border-text_4">
              <tr className="">
                {headers
                  .slice(
                    startColumn,
                    startColumn +
                      (isMobile ? columnsToShowMobile : columnsToShowDesktop)
                  )
                  .map((header, index) => (
                    <th
                      key={index}
                      className={`py-4 px-2 text-sm text-black dark:text-text_2 text-left font-medium `}
                    >
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
              {currentData.map((item, index) => (
                <tr key={index}>
                  {headers
                    .slice(
                      startColumn,
                      startColumn +
                        (isMobile ? columnsToShowMobile : columnsToShowDesktop)
                    )
                    .map((header) => (
                      <td
                        key={header.key}
                        className={`px-2 py-2 text-sm font-normal
                        ${
                          header.key === "orderType" &&
                          "text-primaryLight dark:text-primary"
                        }
                        ${
                          header.key === "optionType" &&
                          "text-colorError dark:text-Secondary3"
                        }
                        ${
                          header.key === "openBase" &&
                          "text-redColor dark:text-colorError"
                        }
                        ${
                          header.key === "closeBase" &&
                          "text-primaryLight dark:text-colorSuccess"
                        }
                        ${
                          header.key === "amount" &&
                          "text-left text-Secondary dark:text-Secondary2"
                        }
                        ${
                          header.key === "profit" &&
                          "text-left text-Secondary dark:text-Secondary2"
                        }
                        ${
                          (header.key === "username" ||
                            header.key === "email" ||
                            header.key === "createdAt") &&
                          "text-sm text-textGray dark:text-text_2 font-normal"
                        }
                         ${
                           header.key === "email" &&
                           (isMobile
                             ? item.email.length > 15
                             : item.email.length > 20) &&
                           "truncate"
                         }
                        `}
                      >
                        {header.key === "id" ? (
                          <Image
                            src={item.id}
                            alt="AVT Account"
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <p
                            className={`${
                              (header.key === "memberShip" ||
                                header.key === "orderType" ||
                                header.key === "optionType") &&
                              "px-2 py-1 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-text_4 inline-block"
                            }`}
                          >
                            {header.key === "email" &&
                            ((isMobile && item.email.length > 15) ||
                              (!isMobile && item.email.length > 20))
                              ? `${item.email.substring(
                                  0,
                                  isMobile ? 15 : 20
                                )}...`
                              : item[header.key]}
                          </p>
                        )}
                      </td>
                    ))}
                  {isMobile && (
                    <td className="text-center">
                      <button className="px-2 py-1 rounded">
                        <BsEye />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center border-t border-text_2 dark:border-text_4 md:py-4 md:px-8 p-2">
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
