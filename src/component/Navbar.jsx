import React, { useState } from 'react';  
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-900 text-white p-6 bg-cyan-500 shadow-2xl shadow-blue-500/10 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="w-full flex font-sans">
          <h1 className="text-xl font-bold text-white">PORTFOLIO</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-sans">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#education" className="block text-white hover:text-yellow-400 transition-colors">Education</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`hamburger-button ${isMobileMenuOpen ? 'open' : ''} text-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-gray-800 p-4 mt-4">
          <ul className="space-y-4">
            <li className="mobile-menu-item">
              <a href="#about" className="block text-white hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li className="mobile-menu-item">
              <a href="#projects" className="block text-white hover:text-yellow-400 transition-colors">Projects</a>
            </li>
            <li className="mobile-menu-item">
              <a href="#education" className="block text-white hover:text-yellow-400 transition-colors">Education</a>
            </li>
            <li className="mobile-menu-item">
              <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
