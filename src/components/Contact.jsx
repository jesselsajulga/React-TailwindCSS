import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-[#0a0a12] py-32 px-6 relative overflow-hidden flex flex-col justify-center"
    >
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
      </div>

      {/* Note: max-w-5xl keeps them nicely centered without stretching too far horizontally */}
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's work together on your next project
          </p>
        </motion.div>


        {/* --- 2 COLUMN GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          
          {/* --- LEFT SIDE: COLLABORATION CARD (Dark) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} // Slides in from the left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            className="bg-[#11111a] border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl hover:border-cyan-500/30 transition-colors duration-300 flex flex-col justify-center h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Collaboration is the key to Success
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and creative ideas.
            </p>
            
            <a href="mailto:sajulga.jessel123@gmail.com" className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg">
              <Mail size={24} />
              sajulga.jessel123@gmail.com
            </a>
          </motion.div>

          {/* --- RIGHT SIDE: SOCIAL MEDIA CARD (Colorful) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} // Slides in from the right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group flex flex-col justify-center h-full"
          >
             {/* Shine Effect */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
              Connect on Social Media
            </h3>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <SocialBtn 
                icon={<Github size={24} />} 
                name="Github" 
                handle="@jesselsajulga"
                href="https://github.com/jesselsajulga"
              />
              
              <SocialBtn 
                icon={<MessageCircle size={24} />} 
                name="Messenger" 
                handle="@itsmejesselsajulga" 
                href="https://www.facebook.com/itsmejesselsajulga"
              />

              <SocialBtn 
                icon={<Linkedin size={24} />} 
                name="LinkedIn" 
                handle="Jessel Rome" 
                href="https://www.linkedin.com/in/jessel-rome-b-sajulga-b22b843a4/"
              />
              
              <SocialBtn 
                icon={<Instagram size={24} />} 
                name="Instagram" 
                handle="@_jcieee1" 
                href="https://www.instagram.com/_jcieee1/"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- HELPER COMPONENT FOR SOCIAL BUTTONS ---
const SocialBtn = ({ icon, name, handle, href }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white leading-none mb-1">{name}</span>
        <span className="text-[11px] text-blue-100 opacity-80">{handle}</span>
      </div>
    </a>
  );
}

export default Contact;