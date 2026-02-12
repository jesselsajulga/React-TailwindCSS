import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(link.name);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 transition-all duration-300">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center 
        bg-[#0a0a12]/90 backdrop-blur-xl 
        border border-white/10 border-b-white/5
        rounded-2xl px-6 py-4
        shadow-[0_20px_50px_-12px_rgba(0,0,0,1),0_0_25px_-5px_rgba(34,211,238,0.15)]"
      >
        
        {/* --- LOGO / NAME (NOW CLICKABLE) --- */}
        <a 
          href="#home" 
          onClick={() => setActiveTab('Home')} // <--- Resets Active Tab to Home
          className="cursor-pointer group"
        >
            <span className="font-cyber font-bold tracking-widest text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block transition-transform duration-300 
              group-hover:scale-105 
              drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] 
              group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            >
                JESSEL'S MINI SHOWROOM
            </span>
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-8 md:space-x-12 relative">
          {navLinks.map((link) => (
            <li key={link.name} className="relative z-10">
              <a
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`text-base font-medium inline-block px-2 py-1 transition-all duration-300 
                  
                  hover:-translate-y-1 
                  hover:text-cyan-400 
                  hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  
                  ${activeTab === link.name ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                {link.name}
              </a>

              {/* The Magic Line */}
              {activeTab === link.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 right-0 -bottom-2 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;