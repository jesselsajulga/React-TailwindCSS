import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a12] w-full py-8 border-t border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#works" className="hover:text-cyan-400 transition-colors duration-300">Works</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Copyright Text */}
        <div className="text-gray-600 text-xs md:text-sm text-center md:text-right">
          © 2026 Jessel Rome Sajulga. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;