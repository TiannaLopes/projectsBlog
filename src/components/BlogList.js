// ProjectList.js
import React from 'react';
import BlogItem from './BlogItem';
import projectsData from '../data/blogs.json'; 
import '../index.css';

const BlogList = () => {
  const projects = projectsData; // Use the imported JSON data as your projects

  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }

  const groupProjectsByYear = projects.reduce((acc, project) => {
    const year = new Date(project.projectDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupProjectsByYear).map(([year, projects]) => (
        <div key={year}>
          <h2 className="my-4">{year}</h2>
          <div className="row">
            {projects.map(project => (
              <BlogItem project={project} key={project.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
