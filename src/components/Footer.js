import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          Built with <FaHeart style={{ color: '#ec4899' }} /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
