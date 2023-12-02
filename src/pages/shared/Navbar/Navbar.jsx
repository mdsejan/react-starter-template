import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 p-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Left side - Brand name */}
        <div className="flex items-center">
          <span className="text-black text-xl font-bold">React Starter</span>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Right side - Navbar links */}
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} mt-4 lg:mt-0`}>
          <ul className="lg:flex flex-wrap justify-center items-center text-black">
            <li className="m-2">
              <NavLink to="/" className="hover:text-gray-700">
                Home
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/dashboard/admin" className="hover:text-gray-700">
                Admin
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/dashboard/user" className="hover:text-gray-700">
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
