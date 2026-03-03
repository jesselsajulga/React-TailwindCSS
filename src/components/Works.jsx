import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronRight, ChevronDown, Folder, FolderOpen, File, Terminal, X } from 'lucide-react';

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';
import project9 from '../assets/project9.png';
import project10 from '../assets/project10.png';
import project11 from '../assets/project11.png';
import project12 from '../assets/project12.png';
import project13 from '../assets/project13.png';
import project14 from '../assets/project14.png';
import project15 from '../assets/project15.png';
import project16 from '../assets/project16.png';
import project17 from '../assets/project17.png';
import project18 from '../assets/project18.png';
import project19 from '../assets/project19.png';

const Works = () => {
  // --- STRUCTURED TREE DATA ---
  const portfolioData = [
    {
      id: "hw-design",
      category: "Logic and Circuit Design",
      iconColor: "text-yellow-500",
      projects: [
        { id: "hw-1", title: "Simple LCD Design", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Designing and implementing a simple Logic Circuit with Integrated Circuit Logic Gates.", image: project1, tech: ["Circuit Design", "Logic Gates"] },
        { id: "hw-2", title: "Anti-Theft Mechanism", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Using Logic Gates and Flip-Flops to create a security system.", image: project2, tech: ["Hardware", "Memory"] },
        { id: "hw-3", title: "Christmas Light Controller", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "With the use of 555 Timer IC, designed a circuit that controls the blinking of Christmas lights.", image: project3, tech: ["Prototyping", "555 Timer IC"] },
        { id: "hw-4", title: "Alarm System", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "A finite state machine implementation for managing alarm system.", image: project4, tech: ["State Machines"] },
        { id: "hw-5", title: "HDL", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Undergone a lesson about HDL and Verilog and implemented projects connecting with HDL lessons.", image: project11, tech: ["HDL", "Verilog"] }
      ]
    },
    {
      id: "sw-dev",
      category: "Software Development",
      iconColor: "text-blue-400",
      projects: [
        { id: "sw-1", title: "Portfolio Website", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "A personal portfolio built with React, Tailwind CSS, and Framer Motion.", image: project5, tech: ["React", "TailwindCSS"] },
        { id: "sw-2", title: "Calculus Calculator", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "With use of APIs and vanilla HTML/Javascript approach, created a web app for calculus calculator.", image: project6, tech: ["HTML", "CSS", "JavaScript"] },
        { id: "sw-3", title: "Sensory Prediction", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "A web app that predicts the sensory output of a given input.", image: project7, tech: ["JavaScript", "TailwindCSS", "Python"] },
        { id: "sw-4", title: "n8n Automation", status: "In Progress", statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20", desc: "A planned extension for Antigravity to automate repetitive syntax typing.", image: project8, tech: ["AI", "n8n"] },
        { id: "sw-5", title: "MIPS", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Has an understanding about microprocessors and its language used to.", image: project9, tech: ["MIPS", "Assembly", "Computer Architecture"] }
      ]
    },
    {
      id: "sec-net",
      category: "Security & Networking",
      iconColor: "text-red-400",
      projects: [
        { id: "sn-1", title: "CCNA Completion Certificate", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Completed Cisco Certified Network Associate (CCNA) certification, demonstrating proficiency in network fundamentals, IP connectivity, security fundamentals, and automation.", image: project10, tech: ["Python", "Cybersecurity"] },
        { id: "sn-2", title: "Cybersecurity", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: " Trained to test and do white hacks to systems to prevent attacks.", image: project12, tech: ["Cybersecurity", "pfsense", "tailscale"] },
        { id: "sn-3", title: "Network Security", status: "Completed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", desc: "Discovered and learned about server, active directory and its uses protecting users and admins from attacks.", image: project17, tech: ["Cybersecurity", "Active Directory", "Windows Server"] }
      ]
    },
    {
      id: "elec-eng",
      category: "Electrical and Electronics",
      iconColor: "text-orange-400",
      projects: [
        { id: "ee-1", title: "Automatic Signal Light", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Created an automatic signal light for traffic control.", image: project19, tech: ["IoT", "Microcontrollers"] },
        { id: "ee-2", title: "Parking Assistance", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Created an automatic parking assistance system using Arduino and Ultrasonic Sensors.", image: project18, tech: ["IoT", "Microcontrollers"] },
        { id: "ee-3", title: "Mini Banking System", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Created a mini banking system.", image: project16, tech: ["IoT", "Microcontrollers"] },
        { id: "ee-4", title: "Sumo Bot", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Created a bot solely for sumo and with the use of Feedback and Control Systems course.", image: project15, tech: ["IoT", "Microcontrollers"] },
        { id: "ee-5", title: "Power Supply", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Created a power supply using Capacitors, Transformers and Voltage Regulators.", image: project14, tech: ["Electricals", "Electronics"] },
        { id: "ee-6", title: "ThirstAid!", status: "Completed", statusColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "An IOT Water Bottle that reminds its user to take a sip of water every hour.", image: project13, tech: ["IOT", "Electronics", "Microprocessor"] }]
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

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.5); }
      `}} />
    </section>
  );
};

export default Works;