// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#0a021c] text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="min-h-[70vh] bg-gradient-to-br from-[#3b0ca3] to-[#9d4edd] flex flex-col justify-center items-center text-center px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Fresh Finds.</h1>
        <p className="text-lg text-purple-100 max-w-xl mb-8">
          Premium quality products delivered to your doorstep with care and speed.
        </p>
        <Link
          to="/shop"
          className="bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Start Shopping
        </Link>
      </section>

      {/* Trusted Brands */}
      <section className="bg-[#f5f5fa] dark:bg-[#15022d] py-10 text-center">
        <h3 className="text-md mb-6 text-gray-500 dark:text-gray-400">Trusted by top brands</h3>
        <div className="flex justify-center items-center gap-10 text-gray-500 dark:text-gray-400 text-xl font-bold opacity-80">
          <span>LOGOIP</span>
          <span>brand</span>
          <span>MARAND</span>
          <span>loremo</span>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Shop by Category</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Curated collections for every lifestyle selection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Fresh Produce",
              desc: "Get your items in record time, no delays.",
              img: "https://source.unsplash.com/400x300/?vegetables",
            },
            {
              title: "Home Essentials",
              desc: "We source only the best from trusted vendors.",
              img: "https://source.unsplash.com/400x300/?towels,home",
            },
            {
              title: "Gadgets",
              desc: "Shop confidently with encrypted payment systems.",
              img: "https://source.unsplash.com/400x300/?smartwatch,gadget",
            },
          ].map(({ title, desc, img }, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#1f103f]"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why FreshFinds */}
      <section className="bg-[#2a0944] text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Why FreshFinds?</h2>
        <p className="text-center text-purple-200 mb-12">
          We make shopping simple, secure, and satisfying.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            ["🚚", "Fast Delivery", "Get your items in record time, no delays."],
            ["✅", "Quality Products", "Only the best from trusted vendors."],
            ["🔒", "Secure Checkout", "Encrypted, smooth payments guaranteed."],
          ].map(([icon, title, desc], i) => (
            <div key={i}>
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-purple-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
