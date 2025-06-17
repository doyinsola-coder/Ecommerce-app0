import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { FaWhatsapp, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-10">
          Let's connect! Reach out via the form below or message me directly on WhatsApp.
        </p>

        {/* Form */}
        <form
          data-aos="fade-up"
          className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto text-left"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="md:col-span-2 p-3 rounded bg-gray-800 border border-gray-700 text-white outline-none resize-none"
          />
          <button
            type="submit"
            className="md:col-span-2 w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 text-white font-semibold rounded transition"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp & Socials */}
        <div className="mt-12 space-y-6">
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-medium hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </a>

          <div className="flex justify-center gap-6 text-xl text-gray-400">
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/yourname" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
