// pages/Cart.jsx
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-xl font-semibold">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
