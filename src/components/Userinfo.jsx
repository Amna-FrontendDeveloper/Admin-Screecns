import React from "react";
import DataTable from "./DataTable";

const columns = () => [
  {
    key: "name",
    header: "User",
    render: (_, user) => (
      <div className="flex items-center gap-2">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-medium">{user.name}</div>
          <div className="text-gray-500 text-sm">{user.email}</div>
        </div>
      </div>
    ),
  },
  { key: "joinDate", header: "Join Date" },
  {
    key: "role",
    header: "Role",
    render: (value) => (
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full ${
          value === "Customer"
            ? "bg-red-500 text-white"
            : value === "Chef"
            ? "bg-orange-400 text-white"
            : "bg-gray-300"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full ${
          value === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {value}
      </span>
    ),
  },
];

const Userinfo = ({ users, onEdit, onDelete }) => {
  return (
    <div className="p-2">
      <DataTable
        data={users}
        columns={columns(onEdit, onDelete)}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Userinfo;
