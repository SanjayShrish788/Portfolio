import React from 'react';
import './About.css';
import { portfolioData } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{portfolioData.personal.about}</p>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">AI Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">11+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Hackathons</div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="tech-icon">🎓</div>
                <h3>Learning & Growing</h3>
                <p>Continuously exploring ML, AI, and Data Science through projects and courses</p>
              </div>
            </div>
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="tech-icon">💡</div>
                <h3>Problem Solver</h3>
                <p>Applying algorithms and data structures to build practical solutions</p>
              </div>
            </div>
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="tech-icon">🚀</div>
                <h3>Hackathon Enthusiast</h3>
                <p>Participating in coding competitions and collaborative challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
