// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-[#2A0845] to-[#6441A5] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          FreshFinds
        </Link>

        <nav className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:underline hover:text-purple-200 transition">Home</Link>
          <Link to="/shop" className="hover:underline hover:text-purple-200 transition">Shop</Link>
        </nav>

        <Link
          to="/signin"
          className="px-4 py-2 text-sm md:text-base border border-white rounded-lg hover:bg-white hover:text-purple-700 transition"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
