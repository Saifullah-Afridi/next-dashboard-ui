const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">Announcements</h1>
        <span className="text-xs text-blue-600 font-semibold hover:text-blue-700 cursor-pointer transition-colors">
          View All →
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer border border-blue-100 hover:border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-800">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-lg px-3 py-1 font-medium shadow-sm">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer border border-purple-100 hover:border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-800">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-lg px-3 py-1 font-medium shadow-sm">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer border border-yellow-100 hover:border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-800">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-gray-500 bg-white rounded-lg px-3 py-1 font-medium shadow-sm">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
