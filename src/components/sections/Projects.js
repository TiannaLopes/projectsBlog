import React from 'react';
import projectsData from '../../data/projects.json';
import { osuImages, osuImageCaptions } from '../../data/osuImages';
import Reveal from '../core/Reveal';

function ProjectImages({ images }) {
  if (!images?.length) return null;

  const isGallery = images.length > 1;

  return (
    <div className={`project-card__media ${isGallery ? 'project-card__media--gallery' : ''}`}>
      {images.map((key) => (
        <figure key={key} className='project-card__figure'>
          <img
            src={osuImages[key]}
            alt={osuImageCaptions[key] || 'OSU Ecampus project screenshot'}
            className='project-card__image'
            loading='lazy'
          />
          {isGallery && (
            <figcaption className='project-card__caption'>{osuImageCaptions[key]}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

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
            <Reveal
              key={project.id}
              as='article'
              delay={index * 70}
              className={`card project-card ${project.images?.length > 1 ? 'project-card--wide' : ''}`}
            >
              <ProjectImages images={project.images} />
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
