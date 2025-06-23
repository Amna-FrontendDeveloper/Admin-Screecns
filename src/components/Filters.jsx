import React from "react";
import usersData from '../data/usersData'

const allCount = usersData.length;
const customerCount = usersData.filter((u) => u.role === "Customer").length;
const chefCount = usersData.filter((u) => u.role === "Chef").length;
console.log(chefCount)

const Filters = ({
  activeTab,
  setActiveTab,
  statusFilter,
  setStatusFilter,
  sortFilter,
  setSortFilter,
}) => {
  return (
    <div className="mb-6">
          {/* Dropdown Filters */}
          <div className="flex flex-wrap justify-between gap-4">
            <h1 className="text-xl font-semibold">Users List</h1>
   <div className="flex flex-wrap gap-4">


   <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
        </select>

        <select
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
        >
          <option>Latest</option>
          <option>Oldest</option>
        </select>
   </div>
      </div>
      {/* Tabs */}
      <nav className="flex space-x-8 mt-7 border-b border-gray-200 text-sm font-medium text-gray-400">
        <button
          className={`pb-2 ${activeTab === "all" ? "border-b-2 border-rose-500 text-rose-600" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Users ({allCount})
        </button>
        <button
          className={`pb-2 ${activeTab === "customers" ? "border-b-2 border-rose-500 text-rose-600" : ""}`}
          onClick={() => setActiveTab("customers")}
        >
          Customers ({customerCount})
        </button>
        <button
          className={`pb-2 ${activeTab === "chefs" ? "border-b-2 border-rose-500 text-rose-600" : ""}`}
          onClick={() => setActiveTab("chefs")}
        >
          Chefs ({chefCount})
        </button>
      </nav>

  
    </div>
  );
};

export default Filters;
