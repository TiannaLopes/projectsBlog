// HomePage.js
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
            I'm Tianna Lopes, a software developer with a passion for building
            engaging and dynamic web applications. Currently, I'm an Analyst
            Programmer at Oregon State University Ecampus, where I spearhead the
            development of scalable applications.
          </p>
        </section>
        <section className='skills py-5 text-light'>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Angular 2+</li>
            <li>Vue.js</li>
            <li>Java Spring</li>
            <li>HTML5 & CSS</li>
            <li>MongoDB</li>
            <li>AWS Serverless</li>
          </ul>
        </section>
        <section className='projects py-5 text-light'>
          <h2>Projects</h2>
          <ul>
            <li>Project One - This is a brief description of Project One.</li>
            <li>Project Two - This is a brief description of Project Two.</li>
          </ul>
        </section>
        <footer className='text-light text-center py-3'>
          <p>
            Contact me at{' '}
            <a href='mailto:tiannaalinalopes@gmail.com' className='text-info'>
              tiannaalinalopes@gmail.com
            </a>
          </p>
          <p>
            Connect with me on{' '}
            <a
              href='https://www.linkedin.com/in/tianna-lopes/'
              className='text-info'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
