// components/CustomDropdown.tsx
import React, { useEffect, useState } from "react";
import { BsCurrencyBitcoin, BsChevronDown } from "react-icons/bs";

interface Option {
  value: string;
  label: string;
}

const CustomSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { value: "vnd", label: "btc/vnd" },
    { value: "usd", label: "btc/usd" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Thiết lập giá trị mặc định ban đầu cho selectedOption
  useEffect(() => {
    setSelectedOption(options[0]); // Lấy option đầu tiên
  }, []);

  return (
    <div className="relative">
      <div
        className="w-[178px] h-[50px] border uppercase font-bold text-base leading-[20.42px] bg-white dark:bg-bgColorIcon border-none rounded-md flex items-center px-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div className="flex justify-between items-center w-full">
            <BsCurrencyBitcoin className="w-7 h-7 text-primaryLight dark:text-primary" />
            <p>{selectedOption.label}</p>
            <BsChevronDown className="text-black dark:text-white font-bold" />
          </div>
        ) : (
          "Chọn một option"
        )}
      </div>
      {isOpen && (
        <div className="absolute z-50 top-10 right-0 bg-white dark:bg-bgColorIcon border border-gray-300 shadow-md rounded-md w-[178px]">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 cursor-pointer uppercase font-bold text-base leading-[20.42px]"
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex justify-start items-center gap-5 w-full">
                <BsCurrencyBitcoin className="w-7 h-7 text-primaryLight" />
                <p>{option.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
