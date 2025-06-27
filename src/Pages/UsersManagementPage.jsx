import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Userinfo from '../components/Userinfo';
import usersData from '../data/usersData';
import Filters from '../components/Filters';
import PageBanner from '../components/PageBanner';

import Dashboard from '../assets/dashboard.png';
import star from '../assets/star.png';
import usersIcon from '../assets/users.png';
import money from '../assets/tdesign_money.png';

const UsersManagementPage = () => {
  const [activeTab, setActiveTab] = useState("users"); // Sidebar active tab
  const [roleTab, setRoleTab] = useState("all"); // 'all', 'customers', 'chefs'
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortFilter, setSortFilter] = useState("Latest");
  const [searchInput, setSearchInput] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState(usersData);

  // Filter logic
  const filteredUsers = users.filter((user) => {
    if (roleTab === "customers" && user.role !== "Customer") return false;
    if (roleTab === "chefs" && user.role !== "Chef") return false;
    if (
      statusFilter !== "All Status" &&
      user.status.toLowerCase() !== statusFilter.toLowerCase()
    )
      return false;
    if (
      searchInput &&
      !(
        user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInput.toLowerCase())
      )
    )
      return false;
    return true;
  });

  // Sort logic
  filteredUsers.sort((a, b) =>
    sortFilter === "Latest"
      ? new Date(b.joinDate) - new Date(a.joinDate)
      : new Date(a.joinDate) - new Date(b.joinDate)
  );

  // Handlers
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleSaveEdit = () => {
    setUsers(prev =>
      prev.map(u => u.id === editUser.id ? editUser : u)
    );
    setEditUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* ✅ Reusable Sidebar with props */}
      <Sidebar
        menuItems={[
          { id: "users", label: "Users", icon: usersIcon },
          { id: "applications", label: "Applications", icon: Dashboard },
          { id: "reviews", label: "Reviews Moderation", icon: star },
          { id: "payments", label: "Payment Disputes", icon: money },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showSubmenu={true} // Optional: toggle this as needed
      />

      <div className="flex-1 flex flex-col">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />

        <PageBanner
          title="Users Management"
          subtitle="Manage Your Customers & Chefs"
        />

        <main className="flex-1 bg-white rounded-lg mx-8 mt-8 p-8 shadow-sm">
          <Filters
            roleTab={roleTab}
            setRoleTab={setRoleTab}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortFilter={sortFilter}
            setSortFilter={setSortFilter}
          />
          <Userinfo users={filteredUsers} onDelete={handleDelete} onEdit={handleEdit} />
        </main>

        {/* ✏️ Edit User Modal */}
        {editUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Edit User</h2>

              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                className="w-full mb-4 border border-gray-300 rounded px-3 py-2"
              />

              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                className="w-full mb-4 border border-gray-300 rounded px-3 py-2"
              />

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setEditUser(null)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersManagementPage;
