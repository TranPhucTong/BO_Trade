import { Tabs } from "@mantine/core";
import React from "react";
import { TbArrowsRightLeft } from "react-icons/tb";

const Order = () => {
  return (
    <div className="mx-4 mt-4">
      <Tabs defaultValue="open-order" inverted>
        <Tabs.List className="w-full">
          <Tabs.Tab
            className="w-[50%] dark:text-primary text-primaryLight"
            value="open-order"
          >
            Open Order
          </Tabs.Tab>
          <Tabs.Tab
            className="w-[50%] dark:text-primary text-primaryLight"
            value="close-order"
          >
            Close Order
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel
          className="w-full flex flex-col gap-6 justify-center items-center mt-6"
          value="open-order"
          pb="xs"
        >
          <TbArrowsRightLeft className="w-[50px] h-[50px] text-textGray dark:text-text_2" />
          <p className="font-normal text-sm text-textGray dark:text-text_2">
            You have not made any open order
          </p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Order;
