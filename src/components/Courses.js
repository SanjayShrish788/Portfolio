import React from 'react';
import './Courses.css';
import { portfolioData } from '../data/portfolioData';

function Courses() {
  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Foundation</span>
          <h2 className="section-title">Coursework</h2>
          <p className="section-subtitle">
            Core computer science subjects completed as part of B.E. curriculum
          </p>
        </div>

        <div className="courses-container">
          {Object.entries(portfolioData.courses).map(([category, courseList]) => (
            <div key={category} className="course-category">
              <h3 className="category-title">
                <span className="category-icon">
                  {category === "Core Computer Science" && "💻"}
                  {category === "Systems & Architecture" && "🖥️"}
                  {category === "Software Engineering" && "⚙️"}
                  {category === "Mathematics & Analytics" && "📊"}
                </span>
                {category}
              </h3>
              <ul className="course-list">
                {courseList.map((course, idx) => (
                  <li key={idx} className="course-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="check-icon">
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{course}</span>
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

export default Courses;
