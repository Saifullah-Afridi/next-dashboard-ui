"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-800">Students</h1>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-8 md:gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-lamaSky rounded-full shadow-sm" />
          <h1 className="font-bold text-gray-800">1,234</h1>
          <h2 className="text-xs text-gray-500 font-medium">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-lamaYellow rounded-full shadow-sm" />
          <h1 className="font-bold text-gray-800">1,234</h1>
          <h2 className="text-xs text-gray-500 font-medium">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
