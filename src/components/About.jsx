import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Bot, Zap, Award, Lightbulb, Code2, Search, Github, MessageCircle, Linkedin, Instagram } from 'lucide-react';
import embeddedImage from '../assets/embedded.gif';
import robotImage from '../assets/robot.gif';
import autoImage from '../assets/automation.gif';
import problemImage from '../assets/problem.gif';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      id: "embedded",
      icon: <Cpu size={24} />, 
      title: "Embedded Systems", 
      desc: "Hardware-software integration",
      media: embeddedImage, 
      type: "image" 
    },
    { 
      id: "robotics",
      icon: <Bot size={24} />, 
      title: "Robotics", 
      desc: "Intelligent machine design",
      media: robotImage, 
      type: "image"
    },
    { 
      id: "automation",
      icon: <Zap size={24} />, 
      title: "Automation", 
      desc: "Smart system solutions",
      media: autoImage, 
      type: "image"
    },
    { 
      id: "problem",
      icon: <Award size={24} />, 
      title: "Problem Solving", 
      desc: "Practical engineering",
      media: problemImage, 
      type: "image"
    },
  ];

  return (
    <section 
      id="about" 
      className="min-h-[100dvh] flex flex-col justify-start pt-32 pb-20 px-4 md:px-6 bg-[#0a0a12] relative overflow-hidden"
    >
      
      {/* --- BACKGROUND LIGHTS --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] opacity-50"
        >
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px]" />
        </motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute w-[150vw] h-[150vw] opacity-30"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Get to know more about my journey and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch relative mb-12"> 
           
           {/* --- FLOATING BADGES (Hidden on Mobile) --- */}
           <motion.div
             initial={{ opacity: 0, scale: 0, rotate: -20 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
             className="hidden md:block absolute -top-8 -left-8 z-30 pointer-events-none"
           >
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.5)] flex items-center gap-2"
             >
                <Lightbulb size={18} />
                <span className="font-bold text-sm">Visionary</span>
             </motion.div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0, rotate: 20 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
             className="hidden md:block absolute -bottom-6 right-1/2 translate-x-10 z-30 pointer-events-none"
           >
             <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-cyan-500 text-black px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2"
             >
                <Code2 size={18} />
                <span className="font-bold text-sm">Developer</span>
             </motion.div>
           </motion.div>


           {/* --- LEFT COLUMN: DYNAMIC CONTENT (BIO vs MEDIA) --- */}
           {/* FIX: Added min-h-[450px] on mobile to prevent layout collapse */}
           <div className="relative min-h-[450px] md:min-h-[500px] h-full w-full"> 
             <AnimatePresence mode="wait">
               
               {hoveredSkill ? (
                 <motion.div
                   key="media" 
                   initial={{ opacity: 0, scale: 0.9, x: -20 }}
                   animate={{ opacity: 1, scale: 1, x: 0 }}
                   exit={{ opacity: 0, scale: 0.95, x: 20 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 w-full h-full bg-[#11111a] border border-cyan-500/50 p-2 rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden"
                 >
                   <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{hoveredSkill.title}</h3>
                      <p className="text-cyan-400 text-xs md:text-sm">{hoveredSkill.desc}</p>
                   </div>

                   {hoveredSkill.type === 'video' ? (
                      <video 
                        src={hoveredSkill.media} 
                        autoPlay loop muted playsInline 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                   ) : (
                      <img 
                        src={hoveredSkill.media} 
                        alt={hoveredSkill.title}
                        loading="lazy" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                   )}
                 </motion.div>

               ) : (
                 
                 <motion.div 
                   key="bio"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                   whileHover="hover" 
                   // FIX: Adjusted padding for mobile (p-6) vs desktop (md:p-10)
                   className="absolute inset-0 w-full h-full bg-[#11111a]/80 backdrop-blur-sm border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl group transition-colors duration-500 z-10 flex flex-col justify-center"
                 >
                   <motion.div
                     variants={{
                       hover: {
                         opacity: [0, 0.6, 0],
                         scale: [1, 1.04, 1.1],
                         transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" }
                       }
                     }}
                     initial={{ opacity: 0, scale: 1 }}
                     className="absolute inset-0 rounded-3xl border-2 border-cyan-400 pointer-events-none"
                   />

                   <motion.div
                     variants={{
                       hover: {
                         opacity: [0, 0.6, 0],
                         scale: [1, 1.04, 1.1],
                         transition: { duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 } 
                       }
                     }}
                     initial={{ opacity: 0, scale: 1 }}
                     className="absolute inset-0 rounded-3xl border-2 border-purple-500 pointer-events-none"
                   />

                   <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                   
                   {/* FIX: Scaled down text size and margin on mobile */}
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 relative z-10">
                     Yo, Yours truly, Jessel Rome Sajulga, <br/>
                     a promising Computer Engineer <br/>
                     from USTP.
                   </h3>
                   
                   <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400 leading-relaxed relative z-10 pointer-events-none">
                     <p>
                       Inspiration comes from seeing how abstract logic can be 
                       transformed into working machines that interact with and shape 
                       the real world.
                     </p>
                     <p>
                       Becoming a computer engineer aligns with an interest in building 
                       systems where logic, hardware, and real world problem solving converge. 
                     </p>
                     <p>
                       Computer engineering provides the foundation to understand technology 
                       across all layers, from hardware to algorithms.
                     </p>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* --- RIGHT COLUMN: SKILLS --- */}
           <div className="flex flex-col gap-4 md:gap-6 z-20 justify-center">
             {skills.map((item, index) => (
               <motion.div
                 key={index}
                 onMouseEnter={() => setHoveredSkill(item)} 
                 onMouseLeave={() => setHoveredSkill(null)} 
                 
                 initial={{ opacity: 0, x: 50, scale: 0.95 }}
                 whileInView={{ opacity: 1, x: 0, scale: 1 }}
                 whileHover={{ scale: 1.05, x: 10, borderColor: "rgba(34,211,238,0.5)" }}
                 transition={{ duration: 0.3, delay: index * 0.1 }}
                 viewport={{ once: true, amount: 0.1 }} // FIX: Prevents animation getting stuck
                 
                 // FIX: Slightly reduced padding on mobile (p-4)
                 className={`flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 group cursor-pointer
                   ${hoveredSkill?.id === item.id 
                     ? "bg-white/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]" 
                     : "bg-[#11111a]/80 border-white/5 hover:bg-white/5" 
                   }
                 `}
               >
                 <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]
                    ${hoveredSkill?.id === item.id ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.6)]" : "bg-cyan-500/10 text-cyan-400"}
                 `}>
                   {item.icon}
                 </div>
                 <div>
                   <h4 className={`text-base md:text-lg font-bold transition-colors mb-1 ${hoveredSkill?.id === item.id ? "text-cyan-400" : "text-white"}`}>
                     {item.title}
                   </h4>
                   <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                     {item.desc}
                   </p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* --- CONNECT BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }} 
          className="w-full relative z-20"
        >
          <div className="relative overflow-hidden rounded-2xl p-4 px-6 md:px-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-90" />
            <div className="absolute inset-0 backdrop-blur-3xl" />

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Connect With Me
              </h3>
              <p className="text-blue-100 text-xs md:text-sm opacity-90">
                Let’s create something amazing together
              </p>
            </div>

            <div className="relative z-10 flex gap-3">
              <CompactSocialBtn icon={<Github size={20} />} href="https://github.com/jesselsajulga" color="hover:bg-gray-600" />
              <CompactSocialBtn icon={<MessageCircle size={20} />} href="https://www.facebook.com/itsmejesselsajulga" color="hover:bg-blue-500" />
              <CompactSocialBtn icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/jessel-rome-b-sajulga-b22b843a4/" color="hover:bg-blue-700" />
              <CompactSocialBtn icon={<Instagram size={20} />} href="https://www.instagram.com/_jcieee1/" color="hover:bg-pink-600" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- COMPACT BUTTON ---
const CompactSocialBtn = ({ icon, href, color }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                  bg-white/20 border border-white/30 rounded-xl 
                  text-white backdrop-blur-sm shadow-sm
                  transition-all duration-300 transform 
                  hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:border-transparent ${color}`}
    >
      {icon}
    </a>
  );
};

export default About;