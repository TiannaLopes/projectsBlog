import React from 'react';
import SpaceScene from './SpaceScene';
import '../styles/shared.css';

function HomePage() {
  return (
    <div className='homePageContainer'>
      <SpaceScene />
      <header className='sticky-top bg-black py-3'>
        <h1 className='text-light text-center'>Welcome to My Portfolio</h1>
      </header>
      <div className='content'>
        <section className='intro py-5 text-center text-light'>
          <h2>About Me</h2>
          <p>
            I'm a software developer with a passion for building engaging and
            dynamic web applications.
          </p>
        </section>
        <section className='skills py-5 text-light'>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </section>
        <footer className='text-light text-center py-3'>
          <p>
            Contact me at{' '}
            <a href='mailto:email@example.com' className='text-info'>
              email@example.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
