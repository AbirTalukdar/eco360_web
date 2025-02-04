"use client"; // Mark as a Client Component

import { useState, useEffect } from "react";
import { FaUserCircle, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const HeaderNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#dropdown-button") && !target.closest("#dropdown-menu")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logged out");
    // Add your logout logic here
    closeDropdown();
  };

  return (
    <header className="bg-gray-300 text-natural-white p-4">
      <div className="container mx-auto flex justify-end">
        {/* Profile Button */}
        <button
          id="dropdown-button"
          className="text-2xl focus:outline-none hover:text-bright-blue transition"
          onClick={toggleDropdown}
        >
          <FaUserCircle />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            id="dropdown-menu"
            className="absolute mt-2 right-4 bg-light-gray text-dark-gray-green shadow-lg rounded-lg py-2 w-56"
          >
            <a
              href="#profile"
              className="flex items-center px-4 py-2 hover:bg-soft-green hover:text-natural-white transition"
            >
              <FaUser className="mr-3 text-xl" />
              Profile
            </a>
            <a
              href="#settings"
              className="flex items-center px-4 py-2 hover:bg-soft-green hover:text-natural-white transition"
            >
              <FaCog className="mr-3 text-xl" />
              Settings
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-left px-4 py-2 hover:bg-bright-orange hover:text-natural-white transition"
            >
              <FaSignOutAlt className="mr-3 text-xl" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderNav;
