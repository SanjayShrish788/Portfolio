import React from 'react';
import './Footer.css';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with React • Designed with passion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
