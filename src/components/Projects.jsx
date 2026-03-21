import React from 'react';
import { ExternalLink, Github, Database, BrainCircuit, Activity } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const allProjects = [
    {
      title: "Conversational Sales Bot",
      subtitle: "Agent-based LLM using Llama 3.1 (70B)",
      icon: <BrainCircuit className="project-icon" />,
      description: "Developed an agent-based LLM-powered chatbot for a hypothetical electronics store.",
      bullets: [
        "Collected & structured product catalog data in JSON format.",
        "Implemented an agent-based system allowing the bot to respond with relevant tool/function outputs.",
        "Processed and visualized sales data to drive chatbot response accuracy."
      ],
      tags: ["Python", "LLMs", "Llama 3.1", "Data Analytics"]
    },
    {
      title: "Web Store Database Design",
      subtitle: "Relational Database Modeling",
      icon: <Database className="project-icon" />,
      description: "Designed a robust database model for an Online Store Webpage maintenance.",
      bullets: [
        "Tools & Technologies used: MySQL",
        "Designed an ER model setting up dependencies to build a relational model for 13 output tables.",
        "Implemented database normalization by optimizing data and reducing duplicity across 3 warehouses."
      ],
      tags: ["MySQL", "DBMS", "Database Normalization", "ER Modeling"]
    },
    {
      title: "Pancreatic Cancer Detection",
      subtitle: "Using Urinary Biomarkers",
      icon: <Activity className="project-icon" />,
      description: "Created a Python-based diagnostic system for early detection and stage classification.",
      bullets: [
        "Efficiently detects Pancreatic cancer based on urinary biomarkers.",
        "Identifies the specific stage of the patient to assist medical professionals.",
        "Utilized advanced ML: XGBoost for cancer detection, CatBoost for stage classification."
      ],
      tags: ["Python", "XGBoost", "CatBoost", "Machine Learning"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title script-font">
          Featured Projects
        </h2>

        <div className="projects-grid">
          {allProjects.map((project, idx) => (
            <div key={idx} className="project-card glass">
              <div className="project-header">
                {project.icon}
                <div className="project-links">
                  <a href="https://github.com/PalojuSaiPrasad" target="_blank" rel="noreferrer" aria-label="Github Repo"><Github size={20} /></a>
                  <a href="#" aria-label="Live Demo"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>
              
              <p className="project-description">{project.description}</p>
              
              <ul className="project-bullets">
                {project.bullets.map((bullet, blIdx) => (
                  <li key={blIdx}>{bullet}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
