import React, { useState, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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
    <div className="w-full bg-white dark:bg-[#151818] dark:border-text_4 rounded-xl border border-text_2 ">
      <table className="w-full border-collapse">
        <thead className="rounded-t-lg border-b border-text_2 dark:border-text_4">
          <tr className="">
            {headers.map((header, index) => (
              <th
                key={header.key}
                className={`py-2 md:px-4 px-0 text-sm text-textGray dark:text-text_2 text-left font-medium `}
              >
                {header.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} className="">
              {headers.map((header) => (
                <td
                  key={header.key}
                  className={`text-left py-2 md:px-4 px-0 text-sm text-textGray font-medium `}
                >
                  {item[header.key]}
                </td>
              ))}
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
  );
};

export default Table;
