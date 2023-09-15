import { Input, Select, Tooltip } from "@mantine/core";
import React from "react";
import { IconSearch, IconTrash, IconFilter } from "@tabler/icons-react";

const FilterAdmin = () => {
  const options = [
    { value: "option1", label: "Filter by username" },
    { value: "option2", label: "Filter by country" },
  ];
  return (
    <div className="flex w-full justify-between items-center gap-4">
      <select
        className="px-4 py-2 bg-colorBgBoxMemberLight dark:bg-bgBoxDark dark:border-text_4 font-medium text-sm rounded-lg shadow-xl border border-text_2"
        defaultValue="option1"
      >
        {options?.map((option) => (
          <option className="text-sm" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Input
        id="input-search"
        placeholder="Enter username"
        className="flex-grow shadow-xl"
        rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
            <div>
              <IconSearch
                size="1rem"
                className="text-textGray dark:text-text_2 font-normal text-sm"
              />
            </div>
          </Tooltip>
        }
      />
      <div className="flex justify-center items-center gap-4">
        <div className="p-[10px] bg-white dark:bg-bgBoxDark rounded-lg shadow-xl border border-text_2 dark:border-text_4 cursor-pointer">
          <IconTrash className="w-4 h-4" />
        </div>
        <div className="py-2 px-4 bg-white dark:bg-bgBoxDark flex justify-center items-center rounded-lg gap-2 shadow-xl border border-text_2 dark:border-text_4 cursor-pointer">
          <p className="font-medium text-sm">Filter</p>
          <IconFilter className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default FilterAdmin;
