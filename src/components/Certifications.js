import React, { useState } from 'react';
import './Certifications.css';
import { portfolioData } from '../data/portfolioData';

function Certifications() {
  const [modalImage, setModalImage] = useState(null);
  const [galleryIndexes, setGalleryIndexes] = useState({});

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleGalleryNav = (certId, direction, images) => {
    const currentIndex = galleryIndexes[certId] || 0;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setGalleryIndexes({ ...galleryIndexes, [certId]: newIndex });
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Continuous Learning</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Online courses and certifications completed to strengthen technical skills
          </p>
        </div>

        <div className="certifications-grid">
          {portfolioData.certifications.map((cert) => {
            const currentIndex = galleryIndexes[cert.id] || 0;
            const hasGallery = cert.images && cert.images.length > 0;
            const displayImage = hasGallery ? cert.images[currentIndex] : cert.image;

            return (
              <div key={cert.id} className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <h3 className="cert-name">{cert.name}</h3>
                    <p className="cert-org">{cert.organization}</p>
                  </div>
                </div>

                <div className="cert-meta">
                  <span className="cert-date">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11 2H10V1C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0C8.73478 0 8.48043 0.105357 8.29289 0.292893C8.10536 0.48043 8 0.734784 8 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V11C0 11.7956 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H11C11.7956 14 12.5587 13.6839 13.1213 13.1213C13.6839 12.5587 14 11.7956 14 11V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2ZM12 11C12 11.2652 11.8946 11.5196 11.7071 11.7071C11.5196 11.8946 11.2652 12 11 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V7H12V11Z" fill="currentColor"/>
                    </svg>
                    {cert.date || cert.year}
                  </span>
                  {cert.duration && (
                    <span className="cert-duration">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 0C5.61553 0 4.26216 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303299 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73784 14 8.38447 14 7C13.998 5.14413 13.2599 3.36489 11.9475 2.05247C10.6351 0.740051 8.85587 0.00198105 7 0ZM7 12C5.9122 12 4.84884 11.6774 3.94437 11.0731C3.0399 10.4687 2.33495 9.60976 1.91867 8.60476C1.50238 7.59977 1.39347 6.49391 1.60568 5.42701C1.8179 4.36011 2.34173 3.3801 3.11092 2.61091C3.8801 1.84172 4.86011 1.3179 5.92701 1.10568C6.99391 0.893467 8.09977 1.00238 9.10476 1.41866C10.1098 1.83494 10.9687 2.5399 11.5731 3.44437C12.1774 4.34884 12.5 5.4122 12.5 6.5C12.4983 7.95818 11.9184 9.35614 10.8873 10.3873C9.85614 11.4184 8.45818 11.9983 7 12Z" fill="currentColor"/>
                        <path d="M7 3C6.86739 3 6.74021 3.05268 6.64645 3.14645C6.55268 3.24021 6.5 3.36739 6.5 3.5V7C6.50003 7.13261 6.55271 7.25979 6.64648 7.35355L8.64648 9.35355C8.69293 9.40006 8.74814 9.43717 8.80904 9.46271C8.86994 9.48825 8.93531 9.50171 9.00148 9.50232C9.06765 9.50294 9.13326 9.49071 9.19464 9.46633C9.25603 9.44195 9.31197 9.40594 9.35923 9.35977C9.40649 9.3136 9.44408 9.25827 9.47 9.19736C9.49591 9.13645 9.50965 9.07122 9.51043 9.00505C9.51121 8.93888 9.49902 8.87333 9.47464 8.81194C9.45027 8.75056 9.41426 8.69462 9.36809 8.64736L7.5 6.77927V3.5C7.5 3.36739 7.44732 3.24021 7.35355 3.14645C7.25979 3.05268 7.13261 3 7 3Z" fill="currentColor"/>
                      </svg>
                      {cert.duration}
                    </span>
                  )}
                </div>
                
                {displayImage && (
                  <div className="cert-image-container">
                    <img 
                      src={displayImage} 
                      alt={cert.name}
                      className="cert-image"
                      onClick={() => openModal(displayImage)}
                    />
                    {hasGallery && (
                      <div className="gallery-controls">
                        <button 
                          className="gallery-btn prev"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleGalleryNav(cert.id, 'prev', cert.images);
                          }}
                          aria-label="Previous certificate"
                        >
                          ‹
                        </button>
                        <span className="gallery-counter">
                          {currentIndex + 1} / {cert.images.length}
                        </span>
                        <button 
                          className="gallery-btn next"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleGalleryNav(cert.id, 'next', cert.images);
                          }}
                          aria-label="Next certificate"
                        >
                          ›
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-topics">
                    <span className="topics-label">Topics:</span>
                    <div className="cert-skills">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="cert-skill-tag">{skill}</span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="cert-skill-tag more">+{cert.skills.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            <img src={modalImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
