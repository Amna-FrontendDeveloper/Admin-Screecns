import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Pagination from './Pagination';

const statusStyles = {
  'In Progress': 'bg-green-100 text-green-700',
  'Resolve': 'bg-yellow-100 text-yellow-700',
};

const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
];

const statusFilterOptions = [
  { value: 'all', label: 'All Status' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'resolve', label: 'Resolve' },
];

function DisputesList({ disputes = [] }) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredDisputes = disputes
    .filter((d) => {
      if (statusFilter === "all") return true;
      if (statusFilter === "in-progress") return d.status === "In Progress";
      if (statusFilter === "resolve") return d.status === "Resolve";
      return true;
    })
    .filter((d) => {
      const term = searchTerm.toLowerCase();
      return (
        d.user.name.toLowerCase().includes(term) ||
        d.user.email.toLowerCase().includes(term)
      );
    });

  const sortedDisputes = [...filteredDisputes].sort((a, b) => {
    const dateA = new Date(a.joinDate);
    const dateB = new Date(b.joinDate);
    return sortBy === "latest" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedDisputes.length / itemsPerPage);
  const paginatedDisputes = sortedDisputes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold">Disputes List</h2>
        <div className="flex flex-wrap gap-3">
          <select
            className="border px-3 py-1 rounded text-sm"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            {statusFilterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <select
            className="border px-3 py-1 rounded text-sm"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                Sort by: {opt.label}
              </option>
            ))}
          </select>

          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-3 py-1 rounded text-sm"
          />
        </div>
      </div>

      {/* 🖥 TABLE View for md+ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600 border-collapse">
          <thead className="bg-gray-50 text-xs font-semibold text-gray-700 border-b border-gray-200">
            <tr>
              <th className="py-2">User</th>
              <th className="py-2">Join Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {paginatedDisputes.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No disputes found.
                </td>
              </tr>
            ) : (
              paginatedDisputes.map((d) => (
                <tr key={d.id || d.user.email} className="border-b">
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src={d.user.avatar || "/default-avatar.png"}
                      onError={(e) => (e.target.src = "/default-avatar.png")}
                      alt={`${d.user.name} avatar`}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{d.user.name}</div>
                      <div className="text-xs text-gray-500">
                        {d.user.email}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-gray-600">{d.joinDateFormatted}</td>
                  <td className="py-3 text-center font-medium">{d.amount}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusStyles[d.status] ||
                        "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {d.status}
                    </span>
                  </td>
                  <td className="py-3 text-black-600 font-semibold hover:underline cursor-pointer">
                    {d.status === "In Progress" ? "Review/Edit" : "View/Edit"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 📱 CARD View for sm screens */}
      <div className="md:hidden space-y-4">
        {paginatedDisputes.length === 0 ? (
          <div className="text-center text-gray-500">No disputes found.</div>
        ) : (
          paginatedDisputes.map((d) => (
            <div
              key={d.id || d.user.email}
              className="bg-white border border-gray-200 rounded shadow-sm p-4 space-y-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={d.user.avatar || "/default-avatar.png"}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{d.user.name}</div>
                  <div className="text-xs text-gray-500">{d.user.email}</div>
                </div>
              </div>

              <div className="text-sm">
                <strong>Join Date:</strong> {d.joinDateFormatted}
              </div>
              <div className="text-sm">
                <strong>Amount:</strong> {d.amount}
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[d.status]}`}
                >
                  {d.status}
                </span>
              </div>
              <div className="text-right text-sm font-medium text-rose-600 cursor-pointer">
                {d.status === "In Progress" ? "Review/Edit" : "View/Edit"}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600 mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={disputes.length}
          currentItemsCount={paginatedDisputes.length}
          onChangePage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default DisputesList;
