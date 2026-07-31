import React from 'react';
import Reveal from '../core/Reveal';

function About() {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <Reveal className='section-header'>
          <span className='section-label'>About</span>
          <h2 className='section-title'>Building software that makes a difference</h2>
        </Reveal>

        <div className='about__grid'>
          <Reveal className='about__text' delay={80}>
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
          </Reveal>

          <div className='about__highlights'>
            {[
              { value: '50k+', label: 'Students served via Group Finder Platform' },
              { value: '20+', label: 'Interactive course applications delivered' },
              { value: '4.0', label: "GPA — Master's in Engineering Management" },
            ].map((stat, index) => (
              <Reveal key={stat.value} delay={120 + index * 80}>
                <div className='card about__stat'>
                  <div className='about__stat-value'>{stat.value}</div>
                  <div className='about__stat-label'>{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
