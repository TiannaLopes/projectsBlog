// HomePage.js
import React from 'react';
import Header from "../components/Header";

import BlogList from '../components/BlogList';

const HomePage = ({ blogs, content }) => {
  // This function groups blogs by their publication year
  const groupBlogsByYear = (blogs) => {
    return blogs.reduce((acc, blog) => {
      const year = new Date(blog.published).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(blog);
      return acc;
    }, {});
  };

  const blogsByYear = groupBlogsByYear(blogs);

  return (
    <div>
     <Header />

      {Object.keys(blogsByYear).map((year) => (
        <section key={year}>
          <h2>{year}</h2>
          <BlogList blogs={blogsByYear[year]} content={content} />
        </section>
      ))}
    </div>
  );
};

export default HomePage;
