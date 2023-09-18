import FilterAdmin from "@/components/components-admin/FilterAdmin";
import React, { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsEye,
} from "react-icons/bs";

const headers = [
  { name: "ID", key: "ID" },
  { name: "Full Name", key: "fullName" },
  { name: "Country", key: "country" },
  { name: "Country Code", key: "countryCode" },
  { name: "Create At", key: "createAt" },
  { name: "Status", key: "status" },
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
                <th
                  className={`py-4 md:px-4 md:block hidden px-0 text-sm text-black dark:text-text_2 text-center font-medium `}
                >
                  Details
                </th>
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
                        className={`px-2 py-2 text-sm font-normal ${
                          header.key === "status" &&
                          item["status"] === "Rejected"
                            ? "text-redColor"
                            : header.key === "status" &&
                              item["status"] === "Verified"
                            ? "text-colorSuccess"
                            : header.key === "status" &&
                              item["status"] === "Reviewing"
                            ? "text-Secondary dark:text-Secondary2"
                            : "text-textGray dark:text-text_2"
                        }`}
                      >
                        <p
                          className={`${
                            header.key === "status" &&
                            "px-2 py-1 rounded-[10px] bg-colorBgBoxMemberLight dark:bg-text_4 inline-block"
                          }`}
                        >
                          {item[header.key]}
                        </p>
                      </td>
                    ))}
                  {isMobile && (
                    <td className="text-center">
                      <button className="px-2 py-1 rounded">
                        <BsEye />
                      </button>
                    </td>
                  )}
                  <td className="px-4 hidden py-2 text-sm text-textGray dark:text-text_2 font-normal md:flex justify-center">
                    <BiShow className="w-7 h-7 text-textGray dark:text-text_2 cursor-pointer" />
                  </td>
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

export default AccountVerify;
