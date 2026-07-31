import React from 'react';
import { education } from '../../data/resume';
import Reveal from '../core/Reveal';

function Education() {
  return (
    <section id='education' className='section'>
      <div className='container'>
        <Reveal className='section-header'>
          <span className='section-label'>Education</span>
          <h2 className='section-title'>Academic background</h2>
        </Reveal>

        <div className='education-grid'>
          {education.map((item, index) => (
            <Reveal key={item.id} as='article' delay={index * 90} className='card education-card'>
              <h3 className='education-card__degree'>{item.degree}</h3>
              <p className='education-card__school'>{item.school}</p>
              <p className='education-card__meta'>
                {item.location} · GPA {item.gpa}
              </p>
              {item.honors && (
                <div className='education-card__honors'>
                  {item.honors.map((honor) => (
                    <span key={honor} className='tag'>
                      {honor}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
