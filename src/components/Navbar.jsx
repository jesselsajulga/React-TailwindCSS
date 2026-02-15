import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import shrekMotion from '../assets/shrek.gif';
import shrekStatic from '../assets/shrek.png';
import faceMotion from '../assets/face.gif';
import faceStatic from '../assets/face.png';
import frogMotion from '../assets/frog.gif';
import frogStatic from '../assets/frog.png';


const avatarData = [
  { 
    id: 1, 
    name: "Shrek",
    static: shrekStatic,
    animated: shrekMotion
  },
  { 
    id: 2, 
    name: "Face",
    static: faceStatic,
    animated: faceMotion
  },
  {
    id: 3, 
    name: "Frog",
    static: frogStatic, 
    animated: frogMotion
  },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  // Avatar States
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const cycleAvatar = () => {
    setAvatarIndex((prevIndex) => (prevIndex + 1) % avatarData.length);
  };
  const currentAvatar = avatarData[avatarIndex];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-6 transition-all duration-300">
      
      {/* MAIN LAYOUT WRAPPER (Flex to put Avatar and Navbar side-by-side) */}
      <div className="max-w-[1400px] mx-auto flex items-start gap-3 md:gap-5">
        
        {/* --- 1. THE SEPARATE AVATAR BOX (Outside the pill) --- */}
        <motion.div
          onClick={cycleAvatar}
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.9 }}
          // Added a slight margin-top (mt-1) so it aligns perfectly with the text inside the pill
          className="relative flex-shrink-0 mt-1 md:mt-2 w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-2xl bg-[#0a0a12]/90 backdrop-blur-xl border border-white/10 cursor-pointer overflow-hidden shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-shadow z-50"
          title="Click to change character!"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={isAvatarHovered ? currentAvatar.animated : currentAvatar.static}
              src={isAvatarHovered ? currentAvatar.animated : currentAvatar.static}
              alt={currentAvatar.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-1 pointer-events-none"
          >
            <span className="text-[9px] text-cyan-300 font-cyber font-bold tracking-widest">TAP</span>
          </motion.div>
        </motion.div>


        {/* --- 2. THE MAIN NAVBAR PILL --- */}
        <div className={`flex-1 w-full bg-[#0a0a12]/90 backdrop-blur-xl 
          border border-white/10 border-b-white/5 rounded-2xl px-5 md:px-8 py-4
          shadow-[0_20px_50px_-12px_rgba(0,0,0,1),0_0_25px_-5px_rgba(34,211,238,0.15)]
          transition-all duration-300
          ${isOpen ? 'rounded-b-2xl' : ''}`}
        >
          
          <div className="flex justify-between items-center">
            {/* --- LOGO --- */}
            <a 
              href="#home" 
              onClick={() => setActiveTab('Home')}
              className="cursor-pointer group relative z-50"
            >
              <span className="font-cyber font-bold tracking-widest text-xl md:text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block transition-transform duration-300 
                group-hover:scale-105 
                drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              >
                  JESSEL'S MINI SHOWROOM
              </span>
            </a>

            {/* --- DESKTOP MENU --- */}
            <ul className="hidden md:flex space-x-10 relative">
              {navLinks.map((link) => (
                <li key={link.name} className="relative z-10">
                  <a
                    href={link.href}
                    onClick={() => setActiveTab(link.name)}
                    className={`text-base font-medium inline-block px-2 py-1 transition-all duration-300 
                      hover:-translate-y-1 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
                      ${activeTab === link.name ? 'text-cyan-400' : 'text-gray-300'}`}
                  >
                    {link.name}
                  </a>
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

            {/* --- MOBILE TOGGLE BUTTON --- */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white hover:text-cyan-400 transition-colors relative z-50"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* --- MOBILE MENU DROPDOWN --- */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden flex flex-col items-center gap-6 mt-4 border-t border-white/10 pt-6"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.name);
                      setIsOpen(false);
                    }}
                    className={`text-lg font-bold transition-all duration-300 
                      ${activeTab === link.name ? 'text-cyan-400' : 'text-gray-300'}
                      hover:text-cyan-400 hover:tracking-widest`}
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;