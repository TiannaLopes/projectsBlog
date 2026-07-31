import React from 'react';
import { experience, additionalExperience } from '../../data/resume';

function Experience() {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>Experience</span>
          <h2 className='section-title'>Where I've worked</h2>
          <p className='section-subtitle'>
            A track record of leading projects from concept to deployment across education and
            enterprise environments.
          </p>
        </div>

        <div className='timeline'>
          {experience.map((job) => (
            <article key={job.id} className='card timeline-item'>
              <div className='timeline-item__header'>
                <div>
                  <h3 className='timeline-item__role'>{job.role}</h3>
                  <p className='timeline-item__company'>
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className='timeline-item__meta'>{job.period}</span>
              </div>
              <ul className='timeline-item__highlights'>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {job.tech && (
                <div className='tag-list'>
                  {job.tech.map((t) => (
                    <span key={t} className='tag'>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}

          <h3 className='section-label' style={{ marginTop: '1rem' }}>
            Additional Experience
          </h3>

          {additionalExperience.map((job) => (
            <article key={job.id} className='card timeline-item timeline-item--secondary'>
              <div className='timeline-item__header'>
                <div>
                  <h3 className='timeline-item__role'>{job.role}</h3>
                  <p className='timeline-item__company'>
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className='timeline-item__meta'>{job.period}</span>
              </div>
              <ul className='timeline-item__highlights'>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {job.tech && (
                <div className='tag-list'>
                  {job.tech.map((t) => (
                    <span key={t} className='tag'>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
