import React from 'react';
import './Skills.css';
import { 
  SiPython, SiCplusplus, SiJavascript, SiMongodb, SiMysql, 
  SiReact, SiNodedotjs, SiExpress, SiFastapi, 
  SiGit, SiGithub, SiJupyter, SiFirebase 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: "Programming & Databases",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "SQL / MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> }
      ]
    },
    {
      title: "Tools & Environments",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Jupyter", icon: <SiJupyter /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title script-font">Technical Skills</h2>
        
        <div className="skills-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-card-new glass">
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-divider"></div>
              <div className="skill-items">
                {category.items.map((item, iIdx) => (
                  <div key={iIdx} className="skill-item">
                    <div className="skill-icon-new">{item.icon}</div>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
