"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between mt-6 mb-4">
        <h1 className="text-xl font-bold text-gray-800">Events</h1>
        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <div
            className="p-4 rounded-xl border-2 border-gray-100 border-l-4 odd:border-l-blue-400 even:border-l-purple-400 hover:shadow-md transition-all duration-200 cursor-pointer bg-gradient-to-r odd:from-blue-50/30 even:from-purple-50/30 to-transparent"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
