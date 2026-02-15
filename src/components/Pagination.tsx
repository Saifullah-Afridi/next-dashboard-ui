const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-600">
      <button
        disabled
        className="py-2 px-6 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="w-8 h-8 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors shadow-sm">
          1
        </button>
        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          2
        </button>
        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          3
        </button>
        <span className="text-gray-400">...</span>
        <button className="w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          10
        </button>
      </div>
      <button className="py-2 px-6 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm">
        Next
      </button>
    </div>
  );
};

export default Pagination;
