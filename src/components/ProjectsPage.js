import React from 'react';
import projectsData from '../data/projects.json';

function ProjectsPage() {
  return (
    <div className='container'>
      <h1>Projects</h1>
      {projectsData.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;
