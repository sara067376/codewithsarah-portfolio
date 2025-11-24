import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false); // mobile menu toggle

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-30
        px-6 md:px-12 h-16
        flex items-center justify-between
        bg-white dark:bg-[#1A1A1A]
        border-b border-gray-200 dark:border-gray-700
        shadow-sm
      "
    >
      {/* Logo */}
      <h1 className="text-xl font-bold text-[#3B82F6]">Sara Saleem</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-10 dark:text-gray-200">
        {[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Skills", to: "/skills" },
          { label: "Projects", to: "/projects" },
          { label: "Contact", to: "/contact" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors duration-200 text-[15px] font-medium"
          >
            {item.label}
          </Link>
        ))}

        {/* Dark Mode Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-8 w-8 flex items-center justify-center 
            rounded-full bg-gray-200 dark:bg-[#333333]
            hover:bg-gray-300 dark:hover:bg-[#444444]
            transition-all duration-300"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-300 text-lg" />
          ) : (
            <FaMoon className="text-slate-900 text-lg" />
          )}
        </button>
      </nav>

      {/* Mobile Icons */}
      <div className="md:hidden flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            h-8 w-8 flex items-center justify-center 
            rounded-full
            bg-gray-200 dark:bg-[#333333]
            hover:bg-gray-300 dark:hover:bg-[#444444]
            transition-all duration-300
          "
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-300 text-lg" />
          ) : (
            <FaMoon className="text-slate-900 text-lg" />
          )}
        </button>

        {/* Hamburger Icon */}
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <FaTimes className="text-2xl text-[#3B82F6]" />
          ) : (
            <FaBars className="text-2xl text-[#3B82F6]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden absolute top-16 left-0 w-full 
          bg-white dark:bg-[#1A1A1A] 
          border-b border-gray-200 dark:border-gray-700 
          shadow-md transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-gray-800 dark:text-gray-200">
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Skills", to: "/skills" },
            { label: "Projects", to: "/projects" },
            { label: "Contact", to: "/contact" },
          ].map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                className="block py-2 text-lg font-medium hover:text-[#3B82F6] transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
