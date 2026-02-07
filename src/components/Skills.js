import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>The tools and technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skill-tags">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
