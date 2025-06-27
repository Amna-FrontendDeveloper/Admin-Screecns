import { Pencil, Trash2 } from "lucide-react";

const DataTable = ({
  data = [],
  columns = [],
  onEdit,
  onDelete,
  showActions = true,
  renderActions,
}) => {
  return (
    <div className="relative w-full">
      {/* Table view on md+ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600 border-collapse">
          <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
            <tr className="text-xs font-semibold text-gray-700 border-b border-gray-200">
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 whitespace-nowrap">
                  {col.header}
                </th>
              ))}
              {showActions && <th className="px-4 py-3 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 whitespace-nowrap">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                {showActions && (
                  <td className="px-4 py-3 text-right">
                    {renderActions ? (
                      renderActions(row)
                    ) : (
                      <div className="flex justify-end gap-2">
                        <Pencil
                          className="h-4 w-4 text-blue-500 hover:text-blue-700 cursor-pointer"
                          onClick={() => onEdit?.(row)}
                          title="Edit"
                        />
                        <Trash2
                          className="h-4 w-4 text-red-500 hover:text-red-700 cursor-pointer"
                          onClick={() => onDelete?.(row.id)}
                          title="Delete"
                        />
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view on small screens */}
      <div className="md:hidden space-y-4">
        {data.map((row) => (
          <div
            key={row.id}
            className="bg-white p-4 rounded shadow border border-gray-200"
          >
            {columns.map((col) => (
              <div key={col.key} className="mb-2">
                <div className="text-xs text-gray-400 font-medium mb-1">
                  {col.header}
                </div>
                <div className="text-sm">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </div>
              </div>
            ))}

            {showActions && (
              <div className="flex justify-end gap-2 mt-4">
                {renderActions ? (
                  renderActions(row)
                ) : (
                  <>
                    <Pencil
                      className="h-4 w-4 text-blue-500 hover:text-blue-700 cursor-pointer"
                      onClick={() => onEdit?.(row)}
                    />
                    <Trash2
                      className="h-4 w-4 text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => onDelete?.(row.id)}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
