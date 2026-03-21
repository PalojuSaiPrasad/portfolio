import React from 'react';
import { Briefcase, GraduationCap, Award, Activity } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title script-font">
          My Journey
        </h2>

        <div className="timeline-container">
          <div className="timeline-column">
            <h3 className="column-title">
              <Briefcase className="icon-title" /> Work Experience
            </h3>
            <div className="timeline">
              <div className="timeline-item glass">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Dec 2024 - Feb 2025</div>
                <h4 className="timeline-title">AI Training Contributor</h4>
                <div className="timeline-subtitle">Outlier AI</div>
                <ul className="timeline-list">
                  <li>Reviewed, refined, and updated code to help train AI models efficiently.</li>
                  <li>Created detailed prompts designed to challenge models and expose weaknesses.</li>
                  <li>Contributed to training across domains like math and image tasks.</li>
                  <li>Collaborated with team members to implement feedback and improve AI reliability.</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="timeline-column">
            <h3 className="column-title">
              <GraduationCap className="icon-title" /> Education
            </h3>
            <div className="timeline">
              <div className="timeline-item glass">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2026</div>
                <h4 className="timeline-title">Bachelor of Technology (B.Tech) - CSE</h4>
                <div className="timeline-subtitle">CVR College of Engineering, Hyderabad</div>
                <p className="timeline-desc">CGPA: <strong>9.3/10</strong></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
