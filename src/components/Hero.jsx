import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <h3 className="hero-welcome">Welcome to my world</h3>
        <h1 className="hero-title script-font">
          I'm Paloju Sai Prasad
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer & AI Enthusiast
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
