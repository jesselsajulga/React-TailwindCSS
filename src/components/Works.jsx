import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Works = () => {
  
  const projects = [
    {
      id: 1,
      category: "Hardware Design",
      title: "Logic Circuit and Designs",
      desc: "Designing and implementing complex digital logic circuits",
      color: "text-emerald-400 bg-emerald-900/60 border-emerald-500/50",
      image: project1 
    },
    {
      id: 2,
      category: "Software Development",
      title: "Coding",
      desc: "Building robust software solutions and applications",
      color: "text-blue-400 bg-blue-900/60 border-blue-500/50",
      image: project2
    },
    {
      id: 3,
      category: "Security",
      title: "Networking/Cybersecurity",
      desc: "Implementing secure network architectures and protocols",
      color: "text-cyan-400 bg-cyan-900/60 border-cyan-500/50",
      image: project3
    },
    {
      id: 4,
      category: "Engineering",
      title: "Electrical and Electronic",
      desc: "Creating innovative electrical and electronic systems",
      color: "text-orange-400 bg-orange-900/60 border-orange-500/50",
      image: project4
    },
  ];

  return (
    <section 
      id="works" 
      className="min-h-screen bg-[#0a0a12] py-32 px-6 relative overflow-hidden"
    >
      {/* --- BACKGROUND GLOWS --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my work in hardware design, software development, and engineering
          </p>
        </motion.div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100, 
                filter: "blur(10px)" 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                filter: "blur(0px)" 
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              
              // 3D Card Style
              className="group relative h-[400px] bg-[#11111a] border-2 border-white/10 rounded-3xl overflow-hidden 
                         transition-all duration-300 
                         shadow-[0_10px_0_rgba(255,255,255,0.1)] 
                         hover:border-cyan-500 
                         hover:shadow-[0_10px_0_rgba(6,182,212,0.8)] 
                         hover:-translate-y-1 
                         active:shadow-none active:translate-y-2"
            >
              
              {/* Image & Overlay Content */}
              <div className="absolute inset-0 w-full h-full">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-30 group-hover:scale-110 transition-transform duration-700 ${
                    index === 0 ? 'from-emerald-600 to-green-900' :
                    index === 1 ? 'from-blue-600 to-indigo-900' :
                    index === 2 ? 'from-cyan-600 to-sky-900' :
                    'from-orange-600 to-red-900'
                }`} />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              <div className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={20} />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start">
                <div className={`mb-4 px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md ${project.color}`}>
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                   {project.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  View Project
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;