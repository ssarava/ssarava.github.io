import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="subtitle">{personalInfo.subtitle}</p>
          <p className="bio">{personalInfo.bio}</p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <a 
              href={personalInfo.resume} 
              className="btn btn-secondary"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={socialLinks.email}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
