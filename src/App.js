// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailedBlog from './components/DetailedBlog';
import mockBlogs from './data/blogs';

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);

  const getData = (blog) => {
    setGetBlogContent(blog);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage blogs={mockBlogs} data={getData} />} />
        <Route path="/blog/:slug" element={<DetailedBlog blogs={mockBlogs} />} />
      </Routes>
    </div>
  );
}

export default App;
