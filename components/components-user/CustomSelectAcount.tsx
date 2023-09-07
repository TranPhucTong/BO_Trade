// components/CustomDropdown.tsx
import React, { useEffect, useState } from "react";
import { BsCurrencyBitcoin, BsChevronDown } from "react-icons/bs";

interface Option {
  value: string;
  name: string;
  money: string;
}

const CustomSelectAcount: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { value: "demo", name: "demo acount", money: "1,000.54" },
    { value: "main", name: "acount main", money: "1,000.54" },
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
        className="md:w-[131px] md:h-[50px] w-[106px] h-[34px] border capitalize font-bold text-base leading-[20.42px] bg-white dark:bg-bgColorIcon border-none rounded-md flex justify-center items-center px-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div className="flex justify-center items-center md:gap-4 gap-1 w-full">
            <div className="flex flex-col gap-1">
              <h4 className="font-normal text-[10px] leading-[12.76px] text-textGray dark:text-text_2">
                {selectedOption.name}
              </h4>
              <p className="leading-[20.42px] text-base font-bold">
                ${selectedOption.money}
              </p>
            </div>
            <BsChevronDown className="text-black font-bold  dark:text-white" />
          </div>
        ) : (
          "Chọn một option"
        )}
      </div>
      {isOpen && (
        <div className="absolute z-50 top-10 right-0 bg-white dark:bg-bgColorIcon border border-gray-300 shadow-md rounded-md w-[131px]">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 cursor-pointer capitalize font-bold text-base leading-[20.42px]"
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex flex-col">
                <h4 className="font-normal text-[10px] leading-[12.76px]">
                  {option.name}
                </h4>
                <p className="leading-[20.42px] text-base font-bold">
                  ${option.money}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelectAcount;
