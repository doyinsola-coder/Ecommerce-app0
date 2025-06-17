// components/ProductsCard.jsx
import React from 'react';
import { useCart } from '../pages/CartContext';
import { motion } from 'framer-motion';

const ProductsCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => addToCart(product)}
        className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductsCard;
