import React from 'react';
import BlogItem from './BlogItem';
import '../index.css';


const BlogList = ({ blogs, content }) => {
   if (!blogs || blogs.length === 0) {
    return null;
  }
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} content={content} key={blog.title}/>
      ))}
    </div>
  );
};

export default BlogList;