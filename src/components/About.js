import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know more about my background and expertise</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm aspiring software engineer with {new Date().getFullYear() - 2023}+ years of experience 
              building software that reflects my solutions to real-world challenges and personal interests. 
            </p>
            <p>
              My journey in software development has been driven by curiosity and a commitment to 
              continuous learning in tech and mathematics. I stay current with emerging technologies while maintaining a 
              strong foundation in software engineering principles.
            </p>
            <p>
              In my free time, I enjoy travelling, lifting, and writing indie games.<br/>
              Oh, and I'm a game dev hobbyist.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{new Date().getFullYear() - 2023}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Users Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
