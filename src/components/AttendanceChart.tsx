"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6 h-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-800">Attendance</h1>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 500 }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              borderColor: "#e5e7eb",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            iconType="circle"
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
