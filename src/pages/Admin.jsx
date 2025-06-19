import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaBox, FaClipboardList, FaUsers, FaChartBar, FaSun, FaMoon } from "react-icons/fa6";

export default function AdminLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <FaChartBar /> },
    { name: "Products", path: "/admin/products", icon: <FaBox /> },
    { name: "Orders", path: "/admin/orders", icon: <FaClipboardList /> },
    { name: "Customers", path: "/admin/customers", icon: <FaUsers /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold">FreshFinds Admin</h2>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition ${
                location.pathname === item.path ? "bg-emerald-600 text-white" : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-10 flex items-center gap-3 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
