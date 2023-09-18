import React, { useState, useEffect } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsEye,
} from "react-icons/bs";

interface TableColumn {
  header: string;
  key: string;
}

interface TableProps {
  headers: TableColumn[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
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
    <div className="w-full bg-white dark:bg-[#151818] dark:border-text_4 rounded-xl border border-text_2 ">
      <table className="w-full border-collapse">
        <thead className="rounded-t-lg border-b border-text_2 dark:border-text_4 md:px-0 px-2">
          <tr className="">
            {headers
              .slice(
                startColumn,
                startColumn +
                  (isMobile ? columnsToShowMobile : columnsToShowDesktop)
              )
              .map((header, index) => (
                <th
                  key={header.key}
                  className={`py-2 px-2 text-sm text-textGray dark:text-text_2 text-left font-medium `}
                >
                  {header.header}
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
            <tr key={index} className="">
              {headers
                .slice(
                  startColumn,
                  startColumn +
                    (isMobile ? columnsToShowMobile : columnsToShowDesktop)
                )
                .map((header) => (
                  <td
                    key={header.key}
                    className={`text-left py-2 px-2 text-sm text-textGray font-medium `}
                  >
                    {item[header.key]}
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
      <div className="flex justify-between items-center border-t border-text_2 dark:border-text_4 py-1 px-4">
        <div className="flex items-center">
          <input
            type="number"
            value={currentPage}
            onChange={(e) => {
              const newPage = parseInt(e.target.value);
              if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
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
            className={`border border-textGray rounded-lg md:p-2 p-1 ${
              currentPage === 1 ? "text-gray-400" : ""
            }`}
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`border border-textGray rounded-lg md:p-2 p-1 ${
              currentPage === totalPages ? "text-gray-400" : ""
            }`}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
