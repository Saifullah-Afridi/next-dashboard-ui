const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-700 text-sm font-semibold bg-gray-50 border-b-2 border-gray-200">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={`py-4 px-4 ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
