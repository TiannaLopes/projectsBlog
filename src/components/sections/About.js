import React from 'react';

function About() {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>About</span>
          <h2 className='section-title'>Building software that makes a difference</h2>
        </div>

        <div className='about__grid'>
          <div className='about__text'>
            <p>
              I'm a software developer with a passion for building engaging, accessible web
              applications. Currently an Analyst Programmer III at Oregon State University
              Ecampus, I lead development of scalable platforms that serve tens of thousands of
              students.
            </p>
            <p>
              I work closely with instructors and stakeholders to translate real-world needs into
              technical solutions — from Canvas-integrated course tools to enterprise Angular and
              React applications. I care deeply about user experience, communication, and writing
              code that's maintainable for the long term.
            </p>
          </div>

          <div className='about__highlights'>
            <div className='card about__stat'>
              <div className='about__stat-value'>50k+</div>
              <div className='about__stat-label'>Students served via Group Finder Platform</div>
            </div>
            <div className='card about__stat'>
              <div className='about__stat-value'>20+</div>
              <div className='about__stat-label'>Interactive course applications delivered</div>
            </div>
            <div className='card about__stat'>
              <div className='about__stat-value'>4.0</div>
              <div className='about__stat-label'>GPA — Master's in Engineering Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
