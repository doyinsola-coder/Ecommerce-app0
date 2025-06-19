// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1b0036] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">FreshFinds</h2>
          <p className="text-purple-300 text-sm">
            Premium quality finds delivered to your doorstep with speed and care.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-purple-200">
            <li><a href="/shop" className="hover:text-white">All Products</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/deals" className="hover:text-white">Deals</a></li>
            <li><a href="/new" className="hover:text-white">New Arrivals</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-purple-200">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4 text-purple-300 text-xl">
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-purple-400">
        © {new Date().getFullYear()} FreshFinds. All rights reserved.
      </div>
    </footer>
  );
}
