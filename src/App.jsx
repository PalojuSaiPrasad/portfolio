import React, { useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const dotsTree = useMemo(() => {
    return Array.from({ length: 180 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 7 + 4}s`,
      delay: `${Math.random() * 15}s`,
      opacity: Math.random() * 0.4 + 0.1
    }));
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <div className="falling-dots-container">
        {dotsTree.map(dot => (
          <div 
            key={dot.id} 
            className="dot" 
            style={{ 
              left: dot.left, 
              width: dot.size, 
              height: dot.size, 
              animationDuration: dot.duration,
              animationDelay: dot.delay,
              opacity: dot.opacity,
              top: '-10px'
            }} 
          />
        ))}
      </div>
      
      <Sidebar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
