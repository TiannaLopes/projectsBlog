import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const BlogItem = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="col-12 col-md-4 mb-4">
      <div className='card'>
        <img className='card-img-top' src={project.projectImage} alt='Project Cover' />
        <div className='card-body'>
          <h5 className='card-title'>{project.projectTitle}</h5>
          <p className='card-text'>{project.description}</p>
          <Link to={`/project/${project.id}`} className="btn btn-primary">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
