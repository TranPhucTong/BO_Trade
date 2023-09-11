import React from "react";
import Select from "react-select";
import DateRangePicker from "../../../components/components-user/components-vip_member/DateRangePicker";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineDotChart, AiOutlineBarChart } from "react-icons/ai";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title
);

const dataOrder = {
  labels: ["06/07", "07/07", "08/07", "09/07", "10/07", "11/07", "12/07"],
  datasets: [
    {
      label: "",
      data: [20, 30, 40, 50, 40, 30, 80],
      backgroundColor: "#3b82f6",
      borderColor: "#19c37d",
      tension: 0.5,
    },
  ],
};

const Commission = () => {
  const options = [
    { value: "option1", label: "Trading Commission" },
    { value: "option2", label: "Trading Work" },
  ];
  const optionOrders = {};
  return (
    <div className="bg-white dark:bg-transparent md:dark:bg-[#151818] dark:border dark:border-text_4 w-full rounded-[10px] px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <select
            className="px-4 py-2 bg-colorBgBoxMemberLight dark:bg-black dark:border-text_4 text-sm border border-text_2 rounded-lg"
            defaultValue="option1"
          >
            {options?.map((option) => (
              <option
                className="text-sm"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="md:block hidden">
            <DateRangePicker />
          </div>
          <button className="md:block hidden py-2 px-4 text-sm text-white dark:text-black bg-primaryLight dark:bg-primary rounded-lg">
            Search
          </button>
        </div>
        <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="md:hidden flex w-full justify-between items-center gap-2 mt-2">
        <div className="flex-grow">
          <DateRangePicker />
        </div>
        <button className="py-2 px-4 text-sm text-white dark:text-black bg-primaryLight dark:bg-primary rounded-lg">
          Search
        </button>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8">
        <div className="md:w-2/5 w-full">
          <div className="flex justify-start items-center gap-2">
            <AiOutlineDotChart className="w-6 h-6 text-primaryLight dark:text-primary" />
            <p className="text-sm font-semibold">Trading payout chart</p>
          </div>
          <div className="md:w-full w-[360px] md:p-2 rounded-lg bg-colorBgBoxMemberLight dark:bg-black mt-4">
            <Line
              className="w-full h-full"
              data={dataOrder}
              options={optionOrders}
            ></Line>
          </div>
        </div>
        <div className="md:w-3/5 w-full">
          <div className="flex justify-start items-center gap-2">
            <AiOutlineBarChart className="w-6 h-6 text-primaryLight dark:text-primary" />
            <p className="text-sm font-semibold">Trading payout details</p>
          </div>
          <div className="w-full mt-4">
            <div className="overflow-x-auto border border-text_2 dark:border-text_4 rounded-lg">
              <table className="md:min-w-full w-full h-[245px] rounded-lg dark:bg-black">
                <thead className="border-b border-text_2 dark:border-text_4 ">
                  <tr className="bg-colorBgBoxMemberLight dark:bg-[#151818] text-textGray font-normal md:text-sm text-[8px] rounded-lg">
                    <th className="py-2">Time</th>
                    <th className="py-2">Payout</th>
                    <th className="py-2">Trade Count</th>
                    <th className="py-2">Unique Traders</th>
                    <th className="py-2">Trade Volume</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;
