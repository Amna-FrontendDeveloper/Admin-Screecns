import React from 'react';
import bellicon from '../assets/Group 1000007269.png';
import user from '../assets/User.png'
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 ">
      <div className="flex items-center w-full max-w-lg space-x-4">
        <input
          type="text"
          placeholder="🔍 Search something with your interest..."
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer text-gray-500 hover:text-rose-600">
          <img src={bellicon} alt="Notifications" className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-semibold rounded-full px-1.5">
            4
          </span>
        </div>
        <img
          src={user}
          alt="User avatar"
          className="w-10 h-10 rounded-full border-2 border-rose-500 cursor-pointer"
          loading="lazy"
        />
      </div>
    
    </header>
  );
};

export default Header;
