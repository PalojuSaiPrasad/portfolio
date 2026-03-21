import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title script-font">About Me</h2>
        <div className="about-content glass shadow-hover">
          <p className="about-text">
            I'm a passionate <strong>Full Stack Developer</strong> and <strong>AI Enthusiast</strong> 
            currently pursuing my B.Tech in Computer Science at CVR College of Engineering. 
            With a strong foundation in building scalable web applications and a keen interest 
            in Artificial Intelligence, I love turning complex problems into elegant, 
            user-friendly solutions.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Hyderabad, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Focus</span>
              <span className="detail-value">Web Tech & AI</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Interests</span>
              <span className="detail-value">UI/UX, Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
