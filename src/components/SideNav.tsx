"use client";

import { useState } from "react";
import { FaHome, FaUser, FaUserShield , FaSignOutAlt } from "react-icons/fa";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-green-700 text-natural-white h-screen transition-all duration-300 flex flex-col`}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between p-4">
          <span className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>
            ECO360
          </span>
          <button
            className="text-natural-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {isOpen ? "<<" : ">>"}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 flex flex-col">
          <a
            href="#home"
            className="flex items-center p-4 hover:bg-green-300 transition"
          >
            <FaHome className="mr-4 text-xl" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Home</span>
          </a>
          <a
            href="#profile"
            className="flex items-center p-4 hover:bg-green-300 transition"
          >
            <FaUser className="mr-4 text-xl" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Customers</span>
          </a>
          <a
            href="#settings"
            className="flex items-center p-4 hover:bg-green-300 transition"
          >
            <FaUserShield  className="mr-4 text-xl" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Users</span>
          </a>
          
        </nav>
      </div>

      {/* Main Content */}
      {/* <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">
          This is the main content area. Select a menu item to navigate.
        </p>
      </div> */}
    </div>
  );
};

export default SideNav;
