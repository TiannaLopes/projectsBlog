// DetailedBlog.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedBlog = ({ blogs }) => {
  let { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="detailed-blog">
      <h2>{blog.title}</h2>
      {/* You can expand this section with more blog details as needed */}
      <p>{blog.summary}</p>
    </div>
  );
};

export default DetailedBlog;
