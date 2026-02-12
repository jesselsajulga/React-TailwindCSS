import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#0a0a12] min-h-screen text-white">
      <Navbar />
      <main> {/* <--- Adds padding so content isn't hidden behind the navbar */}
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
