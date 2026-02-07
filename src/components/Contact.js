import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <h3>Let's Create Something Amazing</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>

          <div className="contact-info">
            <a href={personalInfo.email} className="contact-item">
              <FaEnvelope />
              <span>{personalInfo.email}</span>
            </a>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="hero-buttons" style={{ marginTop: '2rem' }}>
            <a 
              href={socialLinks.email} 
              className="btn btn-primary"
            >
              <FaEnvelope /> Send Email
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
