import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronRight, ChevronDown, Folder, FolderOpen, File, Terminal, X } from 'lucide-react';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Works = () => {
  // --- STRUCTURED TREE DATA ---
  const portfolioData = [
    {
      id: "hw-design",
      category: "Hardware Design",
      iconColor: "text-yellow-500",
      projects: [
        { id: "hw-1", title: "8-bit ALU Design", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Designing and implementing an Arithmetic Logic Unit with full adder integration.", image: project1, tech: ["Circuit Design", "Logic Gates"] },
        { id: "hw-2", title: "Flip-Flop Memory Module", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Sequential logic circuits designed for robust data storage and retrieval.", image: project1, tech: ["Hardware", "Memory"] },
        { id: "hw-3", title: "Digital Clock Circuit", status: "In Progress", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "BCD counter paired with a 7-segment display for real-time tracking.", image: project1, tech: ["Prototyping", "Electronics"] },
        { id: "hw-4", title: "Traffic Light Controller", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "A finite state machine implementation for managing traffic light sequences.", image: project1, tech: ["State Machines"] }
      ]
    },
    {
      id: "sw-dev",
      category: "Software Development",
      iconColor: "text-blue-400",
      projects: [
        { id: "sw-1", title: "Portfolio Website", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "A personal portfolio built with React, Tailwind CSS, and Framer Motion.", image: project2, tech: ["React", "TailwindCSS"] },
        { id: "sw-2", title: "Task Management App", status: "In Progress", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Full-stack application for managing daily tasks, sprints, and projects.", image: project2, tech: ["Node.js", "Express"] },
        { id: "sw-3", title: "Algorithm Visualizer", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Interactive tool mapping sorting and pathfinding algorithms in real-time.", image: project2, tech: ["JavaScript", "Algorithms"] },
        { id: "sw-4", title: "Code Editor Plugin", status: "Planning", statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20", desc: "A planned extension for VS Code to automate repetitive syntax typing.", image: project2, tech: ["TypeScript", "Tooling"] }
      ]
    },
    {
      id: "sec-net",
      category: "Security & Networking",
      iconColor: "text-red-400",
      projects: [
        { id: "sn-1", title: "Network Scanner Tool", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Implementing secure network architectures and identifying open ports.", image: project3, tech: ["Python", "Cybersecurity"] }
      ]
    },
    {
      id: "elec-eng",
      category: "Electrical Engineering",
      iconColor: "text-orange-400",
      projects: [
        { id: "ee-1", title: "Smart Automation System", status: "In Progress", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Creating innovative electrical and electronic systems for smart homes.", image: project4, tech: ["IoT", "Microcontrollers"] }
      ]
    }
  ];

  // --- PROGRESSIVE STATE MANAGEMENT ---
  const [explorerPhase, setExplorerPhase] = useState('INIT');
  const [openFolders, setOpenFolders] = useState({});
  const [activeProject, setActiveProject] = useState(null);

  const toggleFolder = (folderId) => {
    setOpenFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
  };

  const springTransition = { type: "spring", bounce: 0.2, duration: 0.6 };

  return (
    <section id="works" className="min-h-screen bg-[#0a0a12] py-32 px-4 md:px-8 relative overflow-hidden flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Explorer</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {explorerPhase === 'INIT' ? "Initialize the environment to explore my work." : "Navigate through folders and hover over projects to view details."}
          </p>
        </motion.div>

        <LayoutGroup>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start h-[700px] w-full">
            
            {/* --- LEFT PANEL: DIRECTORY TREE --- */}
            <motion.div
              layout
              transition={springTransition}
              className={`bg-[#11111a]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col mx-auto
                ${explorerPhase === 'INIT' 
                  ? 'w-[280px] h-[64px] cursor-pointer hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all lg:col-span-12' 
                  : 'w-full h-full lg:col-span-5 xl:col-span-4'
                }`}
              onClick={() => {
                if (explorerPhase === 'INIT') setExplorerPhase('OPENED');
              }}
            >
              {explorerPhase === 'INIT' ? (
                <div className="w-full h-full flex items-center justify-center gap-3 text-cyan-400 font-bold text-lg tracking-wide">
                  <Terminal size={24} className="animate-pulse" />
                  Launch Explorer
                </div>
              ) : (
                <>
                  <motion.div 
                    layout="position" 
                    onClick={() => {
                      setExplorerPhase('INIT');
                      setActiveProject(null);
                    }} 
                    className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/5 transition-colors group"
                  >
                    <Terminal size={16} className="text-cyan-400 group-hover:animate-pulse" />
                    <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">Explorer</span>
                    
                    <div className="ml-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-gray-400 tracking-wider">CLOSE</span>
                      <X size={14} className="text-gray-400" />
                    </div>
                  </motion.div>

                  <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    
                    <motion.div layout="position">
                      <div 
                        onClick={() => setExplorerPhase(explorerPhase === 'EXPANDED' ? 'OPENED' : 'EXPANDED')}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-gray-200 font-semibold mb-2 transition-colors group"
                      >
                        <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                          {explorerPhase === 'EXPANDED' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        </div>
                        <Folder size={20} className="text-purple-400" fill={explorerPhase === 'EXPANDED' ? "#c084fc" : "none"} fillOpacity={0.2} />
                        <span className="text-base tracking-wide group-hover:text-white transition-colors">Portfolio</span>
                        <span className="text-xs text-gray-500 ml-1 font-normal opacity-0 group-hover:opacity-100 transition-opacity">(10 projects)</span>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {explorerPhase === 'EXPANDED' && (
                        <motion.div
                          layout
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 pl-3 border-l border-white/10 flex flex-col gap-1 overflow-hidden"
                        >
                          {portfolioData.map((category) => (
                            <motion.div layout key={category.id} className="flex flex-col">
                              
                              <div 
                                onClick={() => toggleFolder(category.id)}
                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-gray-300 transition-colors group"
                              >
                                {openFolders[category.id] ? (
                                  <ChevronDown size={16} className="text-gray-500 group-hover:text-cyan-400" />
                                ) : (
                                  <ChevronRight size={16} className="text-gray-500 group-hover:text-cyan-400" />
                                )}
                                
                                {openFolders[category.id] ? (
                                  <FolderOpen size={16} className={category.iconColor} />
                                ) : (
                                  <Folder size={16} className={category.iconColor} />
                                )}
                                
                                <span className="font-medium group-hover:text-white transition-colors">{category.category}</span>
                              </div>

                              <AnimatePresence>
                                {openFolders[category.id] && (
                                  <motion.div
                                    layout
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-5 pl-3 border-l border-white/10 flex flex-col gap-0.5 mt-1 mb-2 overflow-hidden"
                                  >
                                    {category.projects.map((project) => {
                                      const isActive = activeProject?.id === project.id;
                                      return (
                                        <div 
                                          key={project.id}
                                          // --- UPDATED: PURE HOVER MECHANICS ---
                                          onMouseEnter={() => setActiveProject(project)}
                                          onMouseLeave={() => setActiveProject(null)}
                                          className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-200
                                            ${isActive 
                                              ? 'bg-cyan-500/10 text-cyan-400 relative' 
                                              : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                            }`}
                                        >
                                          {isActive && (
                                            <motion.div layoutId="activeIndicator" className="absolute left-0 top-1 bottom-1 w-0.5 bg-cyan-400 rounded-r-full" />
                                          )}
                                          <File size={14} className={isActive ? 'text-cyan-400' : 'text-cyan-600'} />
                                          <span className="text-sm truncate">{project.title}</span>
                                        </div>
                                      );
                                    })}
                                  </motion.div>
                                )}
                              </AnimatePresence>

                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </>
              )}
            </motion.div>

            {/* --- RIGHT PANEL: DYNAMIC PREVIEW --- */}
            <AnimatePresence>
              {explorerPhase !== 'INIT' && activeProject && (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={springTransition}
                  className="w-full h-full lg:col-span-7 xl:col-span-8 bg-[#11111a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col shadow-2xl relative overflow-hidden pointer-events-none" // pointer-events-none ensures it doesn't interrupt mouse flows
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex flex-col h-full"
                    >
                      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

                      <div className="w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden relative border border-white/10 mb-8 bg-black/50 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#11111a] via-transparent to-transparent opacity-60 z-10" />
                        <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 flex flex-col relative z-20">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-3xl font-bold text-white">{activeProject.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${activeProject.statusColor}`}>
                            {activeProject.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                          {activeProject.desc}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {activeProject.tech.map((tech, i) => (
                              <span key={i} className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* --- REMOVED: View Source Button --- */}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </LayoutGroup>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.5); }
      `}} />
    </section>
  );
};

export default Works;