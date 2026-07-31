import React from 'react';
import projectsData from '../../data/projects.json';
import Reveal from '../core/Reveal';

function Projects() {
  return (
    <section id='projects' className='section section--alt'>
      <div className='container'>
        <Reveal className='section-header'>
          <span className='section-label'>Projects</span>
          <h2 className='section-title'>Selected work</h2>
          <p className='section-subtitle'>
            Platforms and applications built for universities, startups, and personal exploration.
          </p>
        </Reveal>

        <div className='projects-grid'>
          {projectsData.map((project, index) => (
            <Reveal key={project.id} as='article' delay={index * 70} className='card project-card'>
              <p className='project-card__org'>{project.organization}</p>
              <h3 className='project-card__name'>{project.name}</h3>
              <p className='project-card__desc'>{project.description}</p>
              {project.tech && (
                <div className='tag-list'>
                  {project.tech.map((t) => (
                    <span key={t} className='tag'>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
