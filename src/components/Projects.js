import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A selection of my recent work and personal projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <ul style={{ 
                    marginTop: '1rem', 
                    paddingLeft: '1.2rem', 
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    {project.highlights.map((highlight, index) => (
                      <li key={index} style={{ marginBottom: '0.3rem' }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
