import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-900 text-white p-6 bg-cyan-500 shadow-2xl shadow-blue-500/10 sticky top-0 z-50 py-8 ">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Social Links */}
       

        {/* Footer Text */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Anandu . All rights reserved.
        </p>

        {/* Quick Links (Optional) */}
        <div className="">
          <ul className="flex justify-center space-x-6">
            <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
