import React, { useState } from 'react';
import './Projects.css';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Academic and personal projects exploring ML, NLP, and Data Science
          </p>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.featured && (
                <div className="featured-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1l2.163 4.382L15 6.09l-3.5 3.409.826 4.818L8 12.18l-4.326 2.137.826-4.818L1 6.09l4.837-.708L8 1z" />
                  </svg>
                  Featured
                </div>
              )}

              <div className="project-category">{project.category}</div>

              <h3 className="project-title">{project.title}</h3>

              <div className="project-section">
                <div className="section-icon">🎯</div>
                <div>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
              </div>

              <div className="project-section">
                <div className="section-icon">📈</div>
                <div>
                  <h4>What I Learned</h4>
                  <p>{project.approach}</p>
                </div>
              </div>

              <div className="project-section">
                <div className="section-icon">💡</div>
                <div>
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div className="project-impact">
                <div className="impact-icon">✨</div>
                <div className="impact-text">{project.impact}</div>
              </div>

              {project.metrics && (
                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">{key}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-date">{project.dateRange}</span>
                <button className="view-details-btn">
                  View Details
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>
            <div className="modal-header">
              <div className="modal-category">{selectedProject.category}</div>
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>🎯 Problem</h3>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="modal-section">
                <h3>⚙️ My Approach</h3>
                <p>{selectedProject.approach}</p>
              </div>
              <div className="modal-section">
                <h3>💡 Solution</h3>
                <p>{selectedProject.solution}</p>
              </div>
              <div className="modal-section">
                <h3>📈 What I Learned</h3>
                <p>{selectedProject.impact}</p>
              </div>
              {selectedProject.metrics && (
                <div className="modal-metrics">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="modal-metric">
                      <div className="modal-metric-value">{value}</div>
                      <div className="modal-metric-label">{key}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="modal-tech">
                <h3>Technologies Used</h3>
                <div className="modal-tech-tags">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
