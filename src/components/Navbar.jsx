// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiMenu, FiX, FiUser, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Categories', path: '/categories' },
    { name: 'Deals', path: '/deals' },
    { name: 'register', path: '/Register' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              FreshFinds
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div 
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={link.path} 
                  className="text-gray-700 hover:text-emerald-500 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FiSearch className="text-gray-700 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FiUser className="text-gray-700 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
              <FiShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <motion.div 
                key={link.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to={link.path} 
                  className="block py-2 text-gray-700 hover:text-emerald-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="flex space-x-6 pt-4">
              <FiSearch className="text-gray-700 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
              <FiUser className="text-gray-700 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
              <div className="relative">
                <FiShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-emerald-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;