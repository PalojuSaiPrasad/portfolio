import React from 'react';
import { Trophy, Star, Target } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const achievementsList = [
    {
      title: "State-Level Hackathon Finalist",
      date: "2024",
      icon: <Trophy className="achievement-icon text-gold" />,
      description: "Ranked in the Top 10 out of 200+ teams for building an innovative, full-stack AI solution within 48 hours."
    },
    {
      title: "Open Source Contributor",
      date: "2023 - Present",
      icon: <Star className="achievement-icon text-blue" />,
      description: "Successfully merged multiple pull requests to popular open-source repositories, improving documentation and fixing minor bugs in the React ecosystem."
    },
    {
      title: "Competitive Programming",
      date: "2023",
      icon: <Target className="achievement-icon text-red" />,
      description: "Secured a top 5% rank in the university's annual coding competition focusing on advanced Data Structures and Algorithms."
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title script-font">Key Achievements</h2>
        
        <div className="achievements-grid">
          {achievementsList.map((item, idx) => (
            <div key={idx} className="achievement-card glass">
              <div className="achievement-header">
                {item.icon}
                <span className="achievement-date">{item.date}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
