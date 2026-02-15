import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-3 text-sm rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-2 flex-1 max-w-md shadow-sm">
        <Image
          src="/search.png"
          alt=""
          width={16}
          height={16}
          className="opacity-60"
        />
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-3 md:gap-5 justify-end">
        <ThemeSwitcher />
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 shadow-sm">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer relative transition-all duration-200 hover:scale-110 shadow-sm">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-semibold shadow-lg animate-pulse">
            1
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 ml-2">
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold text-gray-800">
              John Doe
            </span>
            <span className="text-xs text-gray-500 font-medium">Admin</span>
          </div>
          <div className="relative group cursor-pointer">
            <Image
              src="/avatar.png"
              alt=""
              width={40}
              height={40}
              className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-400 transition-all duration-200"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
