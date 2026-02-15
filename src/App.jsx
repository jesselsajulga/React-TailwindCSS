import { useState } from 'react'
// Removed unused logo imports
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Removed unused count state

  return (
    // ADDED: overflow-x-hidden to prevent horizontal scroll
    <div className="bg-[#0a0a12] min-h-screen text-white overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
      </main>
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App