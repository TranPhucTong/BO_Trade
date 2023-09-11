import React, { useState } from "react";
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

interface Menu {
  link: string;
  name: string;
}

const Statistics = () => {
  const Menus: Menu[] = [
    {
      link: "",
      name: "This month",
    },
    {
      link: "",
      name: "Last Month",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState<number | null>(0);
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
  const optionOrders = {};
  return (
    <div className="px-6 py-4 bg-white dark:bg-[#151818] rounded-[10px] dark:border dark:border-text_4 flex flex-col gap-3">
      <div className="flex justify-start items-center w-auto h-auto bg-colorMenuNavigate dark:bg-black rounded-3xl cursor-pointer">
        {Menus.map((menu, index) => (
          <div
            key={index}
            className={`flex py-1 px-1 `}
            onClick={() => setSelectedMenu(index)}
          >
            <div
              className={`text-sm font-medium leading-[18.42px] flex-grow flex justify-center px-4 py-2 rounded-3xl bg-transparent transition-colors duration-300 ease-in-out
              ${
                selectedMenu === index
                  ? "bg-white dark:bg-bgColorIcon dark:text-white"
                  : "dark:text-textGray"
              }`}
            >
              {menu.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:flex-row flex-col gap-2">
        <div>
          <h2 className="text-sm font-medium">Recent Statistics</h2>
          <div className="rounded-lg bg-colorBgBoxMemberLight dark:bg-black flex flex-col items-start mt-2 gap-3 px-8 py-6">
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#7bccc5]"></div>
              <p className="text-textGray dark:text-text_2 text-sm">
                Total New Referrals (
                <span className="text-[#7bccc5]">1256</span>)
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#ffa09f]"></div>
              <p className="text-textGray dark:text-text_2 text-sm">
                Total New Referrals (<span className="text-[#ffa09f]">53</span>)
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primaryLight"></div>
              <p className="text-textGray dark:text-text_2 text-sm">
                Total New Referrals (
                <span className="text-primaryLight">53</span>)
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex-grow md:w-[500px] md:h-auto w-auto h-[160px] rounded-lg bg-colorBgBoxMemberLight dark:bg-black">
          <Line
            className="w-full h-full"
            data={dataOrder}
            options={optionOrders}
          ></Line>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
