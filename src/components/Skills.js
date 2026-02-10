import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState({});
  const skillsRef = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(portfolioData.skills).forEach((skillName) => {
      const element = skillsRef.current[skillName];
      if (element) {
        observers[skillName] = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSkills((prev) => ({ ...prev, [skillName]: true }));
                observers[skillName].disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        observers[skillName].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I'm Learning</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Building expertise in Machine Learning, Data Science, and Software Development
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([skillName, skillData]) => (
            <div
              key={skillName}
              ref={(el) => (skillsRef.current[skillName] = el)}
              className="skill-card"
            >
              <div className="skill-header">
                <div className="skill-icon">{skillData.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skillName}</h3>
                  <div className="skill-level-text">{skillData.level}%</div>
                </div>
              </div>

              <div className="skill-progress-bar">
                <div
                  className={`skill-progress-fill ${visibleSkills[skillName] ? 'animate' : ''}`}
                  style={{ '--skill-level': `${skillData.level}%` }}
                ></div>
              </div>

              <ul className="skill-items">
                {skillData.items.map((item, idx) => (
                  <li key={idx} className="skill-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
