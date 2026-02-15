import React from 'react';
import { hover, motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Bot, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

import profileImg from '../assets/profile.png';
import hoverImg from '../assets/mog.png';

const Hero = () => {

  // For testing purposes right now, I'm using a placeholder URL. 
  // Replace this variable with your imported image variable (e.g., hoverImg) when you have it!
  const myHoverImage = hoverImg;

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0, y: 0.6 },
      angle: 60,
      colors: ['#6366f1', '#06b6d4', '#d946ef'],
    });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 1, y: 0.6 },
      angle: 120,
      colors: ['#6366f1', '#06b6d4', '#d946ef'],
    });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-[#0a0a12] px-6 relative overflow-visible pt-32 md:pt-40"
    >
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        
        {/* --- LEFT COLUMN --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-left"
        >
          {/* Welcome Badge */}
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: -5 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfetti}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-purple-500/30 rounded-full bg-purple-900/10 backdrop-blur-md cursor-pointer group select-none relative z-10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors duration-300"
            >
              <span className="text-lg group-hover:animate-bounce">👋</span>
              <span className="text-sm font-medium text-purple-200 group-hover:text-cyan-300 transition-colors">
                Welcome to my portfolio
              </span>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Yo, Yours truly, <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Jessel Rome Sajulga
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">
            A promising Computer Engineer from USTP
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Focused on hands-on prototyping, turning abstract ideas into working systems. 
            With a clear focus on robotics, designing and integrating intelligent machines 
            that connect software logic with real-world hardware.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mb-10">
            <a href="#contact" className="px-8 py-3 bg-[#0a0a12] border border-gray-500 text-white font-bold rounded-full transition-all duration-150 transform shadow-[0_4px_0_rgb(107,114,128)] hover:scale-105 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black hover:shadow-[0_4px_0_rgb(8,145,178)] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] active:shadow-none active:translate-y-[4px] active:scale-100">
              Contact me
            </a>
            <a href="#works" className="px-8 py-3 bg-[#0a0a12] border border-gray-500 text-white font-medium rounded-full transition-all duration-150 transform shadow-[0_4px_0_rgb(107,114,128)] hover:scale-105 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black hover:shadow-[0_4px_0_rgb(8,145,178)] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] active:shadow-none active:translate-y-[4px] active:scale-100">
              View Projects
            </a>
          </div>

          {/* --- SOCIAL ICONS --- */}
          <div className="flex gap-4">
            <SocialBtn icon={<Github size={20} />} href="https://github.com/jesselsajulga" />
            <SocialBtn icon={<MessageCircle size={20} />} href="https://www.facebook.com/itsmejesselsajulga" />
            <SocialBtn icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/jessel-rome-b-sajulga-b22b843a4/" />
            <SocialBtn icon={<Instagram size={20} />} href="https://www.instagram.com/_jcieee1/" />
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN --- */}
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex justify-center items-center perspective-1000 md:justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 rounded-[3rem] blur-[60px] transform translate-y-6 scale-90" />

          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="relative w-full max-w-sm bg-white/10 border border-white/20 p-3 rounded-[2.5rem] backdrop-blur-xl shadow-2xl"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-[#3b82f6] text-white px-5 py-3 rounded-2xl shadow-[0_10px_20px_rgba(59,130,246,0.4)] flex items-center gap-2 z-30 pointer-events-none"
            >
              <Bot size={20} className="text-white" />
              <span className="font-bold text-sm tracking-wide">Robotics</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-purple-600 text-white px-5 py-3 rounded-2xl shadow-[0_10px_20px_rgba(147,51,234,0.4)] flex items-center gap-2 z-30 pointer-events-none"
            >
              <Cpu size={20} className="text-white" />
              <span className="font-bold text-sm tracking-wide">Computer Eng.</span>
            </motion.div>

            {/* --- UPDATED: HOVER IMAGE CROSSFADE CONTAINER --- */}
            <div className="bg-white rounded-[2rem] overflow-hidden relative z-20 group cursor-pointer">
               
               {/* 1. Primary Image (Always there, controls the height of the box) */}
               <img 
                 src={profileImg} 
                 alt="Jessel Rome" 
                 className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105" 
               />
               
               {/* 2. Secondary/Hover Image (Sits perfectly on top, invisible until hovered) */}
               <img 
                 src={myHoverImage} 
                 alt="Jessel Rome Alternate" 
                 // absolute inset-0 glues this image exactly over the first one
                 // opacity-0 hides it normally, group-hover:opacity-100 reveals it on hover
                 className="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" 
               />
               
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

// --- SOCIAL BUTTON COMPONENT ---
const SocialBtn = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-12 h-12 flex items-center justify-center rounded-full 
                 bg-[#0a0a12] border border-gray-600 text-gray-400 
                 transition-all duration-150 transform 
                 shadow-[0_4px_0_rgb(55,65,81)] 
                 hover:scale-110 
                 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black 
                 hover:shadow-[0_4px_0_rgb(8,145,178)] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] 
                 active:shadow-none active:translate-y-[4px] active:scale-100"
    >
      {icon}
    </a>
  );
};

export default Hero;