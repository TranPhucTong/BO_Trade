import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "06/07", line1: 3000, line2: 5000, line3: 8000 },
  { name: "07/07", line1: 3500, line2: 5500, line3: 8500 },
  { name: "08/07", line1: 4000, line2: 6000, line3: 9000 },
  { name: "09/07", line1: 4500, line2: 6500, line3: 9500 },
  { name: "10/07", line1: 5000, line2: 7000, line3: 10000 },
  { name: "11/07", line1: 5500, line2: 7500, line3: 10500 },
];

const MyLineChart = () => {
  return (
    <LineChart width={510} height={240} data={data}>
      <XAxis dataKey="name" interval={0} />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey="line1" stroke="#7bccc5" />
      <Line type="monotone" dataKey="line2" stroke="#ffa09f" />
      <Line type="monotone" dataKey="line3" stroke="#3d8e87" />
    </LineChart>
  );
};

export default MyLineChart;
