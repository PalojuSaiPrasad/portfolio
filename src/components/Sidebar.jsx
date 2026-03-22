import React from 'react';
import { Mail, Github, Linkedin, Briefcase, FolderPlus, User, Code2 } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-brand">Dev Portfolio</h2>
        <div className="profile-img-container">
          {/* Placeholder for user image */}
          <div className="profile-img-placeholder">
            SP
          </div>
        </div>
        <a href="#contact" className="talk-btn">
          <Mail size={16} /> Talk To Me
        </a>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#skills"><Code2 size={18} /> Skills</a></li>
          <li><a href="#experience"><Briefcase size={18} /> Experience</a></li>
          <li><a href="#projects"><FolderPlus size={18} /> Projects</a></li>
        </ul>
      </nav>

      <div className="sidebar-socials">
        <a href="https://www.linkedin.com/in/palojusaiprasad" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
        <a href="https://github.com/PalojuSaiPrasad" target="_blank" rel="noreferrer"><Github size={20} /></a>
        <a href="mailto:saiprasadpaloju@gmail.com"><Mail size={20} /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
