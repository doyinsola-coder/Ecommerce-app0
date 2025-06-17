// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "./CartContext"; // make sure CartContext is set up

const CheckoutPage = () => {
  const { cartItems, total } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("Checkout Data", form, cartItems);
    alert("Proceeding to payment...");
    // Proceed to Paystack/Stripe in the next step
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 px-4 md:px-20 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-emerald-600">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Billing Form */}
        <form className="space-y-4" onSubmit={handleCheckout}>
          {["name", "email", "phone", "address"].map((field) => (
            <div key={field}>
              <label className="block text-sm text-gray-600 capitalize">{field}</label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition"
          >
            Proceed to Pay
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="divide-y text-sm text-gray-700">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₦{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold text-lg flex justify-between">
            <span>Total:</span>
            <span>₦{total}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;
