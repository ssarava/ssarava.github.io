import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p>My professional journey and key accomplishments</p>
        </div>

        <div className="experience-timeline">
          {experience.map((job) => (
            <div key={job.id} className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{job.position}</h3>
                  <div className="experience-company">{job.company}</div>
                  <div className="experience-meta">
                    <span>
                      <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                      {job.duration}
                    </span>
                    <span>
                      <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="experience-description">{job.description}</p>

                {job.achievements && (
                  <ul className="experience-achievements">
                    {job.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}

                <div className="experience-tech">
                  {job.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
