import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import logo from '../assets/Group 1.png';
import star from '../assets/star.png';
import Home from '../assets/home.png';
import Dashboard from '../assets/dashboard.png';
import users from '../assets/users.png';
import money from '../assets/tdesign_money.png';
import logout from '../assets/mdi_logout.png';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [openUsersSubmenu, setOpenUsersSubmenu] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true); // Default: collapsed
  const navigate = useNavigate();

  const toggleCollapse = () => setIsCollapsed(prev => !prev);

  const menuItems = [
    { id: "users", label: "Users", icon: users },
    { id: "applications", label: "Applications", icon: Dashboard },
    { id: "reviews", label: "Reviews Moderation", icon: star },
    { id: "analytics", label: "Booking Analytics", icon: Home },
    { id: "payments", label: "Payment Disputes", icon: money },
  ];

  return (
    <aside
      className={`bg-white-100 h-screen border-r border-zinc-200 p-4 flex flex-col
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[90px]" : "w-[180px]"}`}
    >
      {/* Logo */}
      <div className="mb-10 mt-10 flex justify-center relative">
        <img
          src={logo}
          alt="Logo"
          className={`transition-all duration-300 ${isCollapsed ? "w-12" : "w-18"}`}
        />
        <div
          className="absolute top-[-7vh] right-[-10px] w-7 h-7 rounded-full flex items-center justify-center text-black cursor-pointer shadow-md z-10"
          onClick={toggleCollapse}
          title="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Menu Items */}
      {menuItems.map((item) => (
        <div key={item.id}>
          <div
            className={`flex items-center justify-between px-4 py-3 mb-2 rounded-lg cursor-pointer transition-colors duration-200
              ${activeTab === item.id
                ? "bg-rose-50 text-rose-600"
                : "text-gray-500 hover:text-rose-500 hover:bg-rose-50"}`}
            onClick={() => {
              setActiveTab(item.id);
              setIsCollapsed(false); // Expand sidebar on click
              navigate(`/${item.id}`);
              if (item.id === "users") setOpenUsersSubmenu(!openUsersSubmenu);
            }}
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} alt={item.label} className="h-6 w-6" />
              <span
                className={`transition-opacity duration-300 ease-in-out ${
                  isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </div>
          </div>

          {/* Submenu for Users */}
          {item.id === "users" && openUsersSubmenu && !isCollapsed && (
            <div className="ml-12 mb-4 text-sm text-gray-600 space-y-2 transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <img src={users} alt="Customer" className="h-4 w-4" />
                <span>Customers (200)</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={users} alt="Chef" className="h-4 w-4" />
                <span>Chefs (50)</span>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Logout */}
      <div
        className={`mt-auto px-4 py-3 text-rose-600 cursor-pointer flex items-center gap-3 hover:bg-rose-100 rounded-lg
          ${isCollapsed ? "justify-center" : ""}`}
      >
        <img src={logout} alt="Logout" className="h-5 w-5" />
        {!isCollapsed && <span className="font-medium">Logout</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
