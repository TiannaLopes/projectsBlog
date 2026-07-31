import React from 'react';
import {
  profile,
  education,
  experience,
  additionalExperience,
  skillGroups,
  interests,
} from '../../data/resume';
import Reveal from '../core/Reveal';

function Resume() {
  const handlePrint = () => window.print();

  const allSkills = skillGroups.flatMap((g) => g.skills);

  return (
    <section id='resume' className='section'>
      <div className='container'>
        <Reveal className='section-header'>
          <span className='section-label'>Resume</span>
          <h2 className='section-title'>Full resume</h2>
          <p className='section-subtitle'>
            A complete overview of my education, experience, and skills.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className='resume-document'>
          <header className='resume-document__header'>
            <h2 className='resume-document__name'>{profile.name}</h2>
            <div className='resume-document__contact'>
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
              <a href={profile.github} target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
            </div>
          </header>

          <div className='resume-block'>
            <h3 className='resume-block__title'>Education</h3>
            {education.map((item) => (
              <div key={item.id} className='resume-entry'>
                <div className='resume-entry__header'>
                  <div>
                    <p className='resume-entry__title'>{item.degree}</p>
                    <p className='resume-entry__subtitle'>
                      {item.school}, {item.location}
                    </p>
                  </div>
                  <span className='resume-entry__date'>GPA {item.gpa}</span>
                </div>
                {item.honors && (
                  <ul className='resume-entry__list'>
                    {item.honors.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className='resume-block'>
            <h3 className='resume-block__title'>Work Experience</h3>
            {experience.map((job) => (
              <div key={job.id} className='resume-entry'>
                <div className='resume-entry__header'>
                  <div>
                    <p className='resume-entry__title'>
                      {job.role} — {job.company}
                    </p>
                    <p className='resume-entry__subtitle'>{job.location}</p>
                  </div>
                  <span className='resume-entry__date'>{job.period}</span>
                </div>
                <ul className='resume-entry__list'>
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='resume-block'>
            <h3 className='resume-block__title'>Additional Experience</h3>
            {additionalExperience.map((job) => (
              <div key={job.id} className='resume-entry'>
                <div className='resume-entry__header'>
                  <div>
                    <p className='resume-entry__title'>
                      {job.role} — {job.company}
                    </p>
                    <p className='resume-entry__subtitle'>{job.location}</p>
                  </div>
                  <span className='resume-entry__date'>{job.period}</span>
                </div>
                <ul className='resume-entry__list'>
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='resume-block'>
            <h3 className='resume-block__title'>Skills & Interests</h3>
            <div className='resume-entry'>
              <p className='resume-entry__subtitle'>{allSkills.join(' · ')}</p>
              <ul className='resume-entry__list'>
                {interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </Reveal>

        <Reveal delay={180} className='resume-actions no-print'>
          <button type='button' className='btn btn-primary' onClick={handlePrint}>
            <i className='bi bi-printer' /> Print / Save as PDF
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Resume;
