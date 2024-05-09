import React from 'react';
import SpaceScene from './SpaceScene';
import projectsData from '../data/projects.json';
import '../styles/shared.css';

function ProjectsPage() {
  return (
    <div className='projects-container'>
      <div className='projects-list'>
        <h1>Projects</h1>
        {projectsData.map((project) => (
          <div key={project.id} className='project-card'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <SpaceScene />
    </div>
  );
}

export default ProjectsPage;
