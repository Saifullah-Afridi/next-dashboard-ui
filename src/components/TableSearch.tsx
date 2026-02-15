import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-2 shadow-sm border border-gray-200">
      <Image
        src="/search.png"
        alt=""
        width={16}
        height={16}
        className="opacity-60"
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
};

export default TableSearch;
