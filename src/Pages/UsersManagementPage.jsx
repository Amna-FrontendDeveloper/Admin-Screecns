import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Userinfo from '../components/Userinfo';
import usersData from '../data/usersData'; 
import Filters from '../components/Filters';
import Background from '../assets/BackgroundBanner.png'



const UsersManagementPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortFilter, setSortFilter] = useState("Latest");
  const [searchInput, setSearchInput] = useState("");


  const [editUser, setEditUser] = useState(null); // holds the selected user for editing
  const [users, setUsers] = useState(usersData);  // make sure you're using state for users


  const filteredUsers = users.filter((user) => {
    if (activeTab === "customers" && user.role !== "Customer") return false;
    if (activeTab === "chefs" && user.role !== "Chef") return false;
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

  filteredUsers.sort((a, b) =>
    sortFilter === "Latest"
      ? new Date(b.joinDate) - new Date(a.joinDate)
      : new Date(a.joinDate) - new Date(b.joinDate)
  );

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };
  const handleEdit = (user) => {
    setEditUser(user); // open modal with this user's data
  };
  
  const handleSaveEdit = () => {
    setUsers(prev =>
      prev.map(u => u.id === editUser.id ? editUser : u)
    );
    setEditUser(null); // close modal
  };
  

  return (
   <>
   <div className="min-h-screen bg-gray-50 flex font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />

        <div className="Management bg-cover bg-center rounded-lg mx-8 mt-6 relative"
          style={{
            backgroundImage:
              `url(${Background})`,
            minHeight: "220px",
          }}
        >
          <div className=" bg-opacity-40 absolute inset-0 rounded-lg"></div>
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-3xl font-semibold mb-1">Users Management</h1>
            <p className="text-sm opacity-80">Manage Your Customers & Chefs</p>
          </div>
        </div>

        <main className="flex-1 bg-white rounded-lg mx-8 mt-8 p-8 shadow-sm">
  <Filters
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    statusFilter={statusFilter}
    setStatusFilter={setStatusFilter}
    sortFilter={sortFilter}
    setSortFilter={setSortFilter}
  />
 <Userinfo users={filteredUsers} onDelete={handleDelete} onEdit ={handleEdit} />
</main>
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
   </>
  );
};

export default UsersManagementPage;
