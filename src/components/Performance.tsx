"use client";
import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white p-6 rounded-2xl h-80 relative shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-800">Performance</h1>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Image src="/moreDark.png" alt="" width={16} height={16} />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-1">9.2</h1>
        <p className="text-xs text-gray-500 font-medium">of 10 max LTS</p>
      </div>
      <h2 className="font-semibold text-sm absolute bottom-16 left-0 right-0 m-auto text-center text-gray-700">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default Performance;
