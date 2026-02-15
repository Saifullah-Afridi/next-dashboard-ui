import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  const gradients = {
    student: "from-blue-400 to-blue-600",
    teacher: "from-purple-400 to-purple-600",
    parent: "from-yellow-400 to-orange-500",
    staff: "from-pink-400 to-rose-600",
  };

  const bgColors = {
    student: "bg-blue-50",
    teacher: "bg-purple-50",
    parent: "bg-yellow-50",
    staff: "bg-pink-50",
  };

  return (
    <div
      className={`rounded-2xl ${bgColors[type as keyof typeof bgColors] || "bg-gray-50"} p-6 flex-1 min-w-[150px] hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 relative overflow-hidden group`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[type as keyof typeof gradients] || "from-gray-400 to-gray-600"} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      ></div>
      <div className="flex justify-between items-center relative z-10">
        <span className="text-xs bg-white px-3 py-1.5 rounded-full text-green-600 font-semibold shadow-sm">
          2024/25
        </span>
        <div className="cursor-pointer hover:bg-white/50 p-1 rounded-full transition-colors">
          <Image src="/more.png" alt="" width={20} height={20} />
        </div>
      </div>
      <div className="mt-6 relative z-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">1,234</h1>
        <h2 className="capitalize text-sm font-semibold text-gray-600 tracking-wide">
          {type}s
        </h2>
      </div>
      <div
        className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${gradients[type as keyof typeof gradients] || "from-gray-400 to-gray-600"} opacity-10 rounded-tl-full`}
      ></div>
    </div>
  );
};

export default UserCard;
