import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import DataTable from "./DataTable";
import Pagination from "./Pagination";
import usePagination from "../Hooks/usePagination.js"; // 🔥 your reusable hook
import applications from "../data/applications";

// 🧠 Format avatars
const formattedApps = applications.map((app) => ({
  ...app,
  avatar: `https://api.dicebear.com/8.x/initials/svg?seed=${app.name}`,
}));

const columns = [
  {
    key: "name",
    header: "User",
    render: (_, row) => (
      <div className="flex items-center gap-2">
        <img
          src={row.avatar}
          alt={row.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-gray-500 text-xs">{row.email}</div>
        </div>
      </div>
    ),
  },
  { key: "date", header: "Join Date" },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full ${
          value === "Resolve"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {value}
      </span>
    ),
  },
];

const ApplicationsList = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    totalItems,
    currentItemsCount,
  } = usePagination(formattedApps, 6); // ✅ move inside component

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Applications List</h2>

      <DataTable
        data={paginatedData}
        columns={columns}
        renderActions={(row) => (
          <div className="flex gap-2 justify-end">
            <Eye
              className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"
              onClick={() => console.log("View", row)}
            />
            <Pencil
              className="h-4 w-4 text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={() => console.log("Edit", row)}
            />
            <Trash2
              className="h-4 w-4 text-red-500 hover:text-red-700 cursor-pointer"
              onClick={() => console.log("Delete", row.id)}
            />
          </div>
        )}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        currentItemsCount={currentItemsCount}
        onChangePage={setCurrentPage}
      />
    </div>
  );
};

export default ApplicationsList;
