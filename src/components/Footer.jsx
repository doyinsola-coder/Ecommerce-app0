// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Shop',
      links: ['All Products', 'New Arrivals', 'Featured', 'Bestsellers'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Terms of Service', 'Privacy Policy'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Shipping Info', 'Returns & Exchanges'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              FreshFinds
            </h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Quality products, seamless shopping experience.
            </p>
            <div className="flex space-x-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, color: '#10B981' }}
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} FreshFinds. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;