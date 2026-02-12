import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Zap, Award, Lightbulb, Code2, Search, Github, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Cpu size={24} />, title: "Embedded Systems", desc: "Hardware-software integration" },
    { icon: <Bot size={24} />, title: "Robotics", desc: "Intelligent machine design" },
    { icon: <Zap size={24} />, title: "Automation", desc: "Smart system solutions" },
    { icon: <Award size={24} />, title: "Problem Solving", desc: "Practical engineering" },
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-start pt-32 pb-20 px-6 bg-[#0a0a12] relative overflow-hidden"
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
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Get to know more about my journey and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start relative mb-12">
           
           {/* --- FLOATING BADGES (Fixed Exit Animations) --- */}
           
           {/* Badge 1: Visionary */}
           <motion.div
             // INITIAL: State when off-screen (Scale 0 = Gone)
             initial={{ opacity: 0, scale: 0, rotate: -20 }}
             // WHILE IN VIEW: State when on-screen (Scale 1 = Visible)
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             // VIEWPORT: once: false ensures it animates OUT when you scroll away
             viewport={{ once: false, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
             className="hidden md:block absolute -top-8 -left-8 z-30"
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

           {/* Badge 2: Developer */}
           <motion.div
             initial={{ opacity: 0, scale: 0, rotate: 20 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: false, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
             className="hidden md:block absolute -bottom-6 right-4 z-30"
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

           {/* Badge 3: Analytical */}
           <motion.div
             initial={{ opacity: 0, scale: 0, y: -20 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: false, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
             className="hidden md:block absolute -top-6 -right-6 z-30"
           >
             <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-pink-600 text-white px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.5)] flex items-center gap-2"
             >
                <Search size={18} />
                <span className="font-bold text-sm">Analytical</span>
             </motion.div>
           </motion.div>

           {/* --- LEFT COLUMN: BIO --- */}
           <motion.div 
             initial={{ opacity: 0, x: -50, scale: 0.95 }}
             whileInView={{ opacity: 1, x: 0, scale: 1 }}
             whileHover={{ scale: 1.02, y: -5 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}
             className="bg-[#11111a]/80 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl group hover:border-cyan-500/30 transition-colors duration-500 z-20 cursor-default"
           >
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
               Yo, Yours truly, Jessel Rome Sajulga, <br/>
               a promising Computer Engineer <br/>
               from USTP.
             </h3>
             
             <div className="space-y-4 text-gray-400 leading-relaxed relative z-10">
               <p>
                 Inspiration comes from seeing how abstract logic can be 
                 transformed into working machines that interact with and shape 
                 the real world.
               </p>
               <p>
                 Becoming a computer engineer aligns with an interest in building 
                 systems where logic, hardware, and real world problem solving converge. 
                 The field enables the design of machines that think, sense, and act by 
                 translating code into physical functionality through embedded systems, 
                 automation, and robotics. 
               </p>
               <p>
                 Computer engineering provides the foundation to understand technology 
                 across all layers, from hardware to algorithms, and the discipline to 
                 develop reliable and efficient solutions to practical problems.
               </p>
             </div>
           </motion.div>

           {/* --- RIGHT COLUMN: SKILLS --- */}
           <div className="flex flex-col gap-6 z-20">
             {skills.map((item, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: 50, scale: 0.95 }}
                 whileInView={{ opacity: 1, x: 0, scale: 1 }}
                 whileHover={{ scale: 1.05, x: 10 }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
                 viewport={{ once: false, amount: 0.3 }}
                 className="flex items-center gap-6 p-6 rounded-2xl bg-[#11111a]/80 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 hover:bg-white/5 transition-colors duration-300 group cursor-default"
               >
                 <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                   {item.icon}
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                     {item.title}
                   </h4>
                   <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                     {item.desc}
                   </p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* --- ULTRA-COMPACT CONNECT BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }} 
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

// --- UPDATED BUTTON COMPONENT (Opens in New Tab) ---
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