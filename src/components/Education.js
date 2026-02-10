import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={edu.id} className={`education-card ${index === 0 ? 'current' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="card-content">
                <div className="edu-header">
                  <div>
                    <h3 className="institution-name">{edu.institution}</h3>
                    <p className="degree">{edu.degree}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="date-badge">{edu.dateRange}</span>
                    <span className="performance-badge">{edu.performance}</span>
                  </div>
                </div>

                {edu.coursework && (
                  <div className="coursework">
                    <h4>Core Subjects</h4>
                    <div className="coursework-grid">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
