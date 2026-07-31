import React from 'react';
import { skillGroups, interests } from '../../data/resume';

function Skills() {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>Skills</span>
          <h2 className='section-title'>Technologies & tools</h2>
        </div>

        <div className='skills-grid'>
          {skillGroups.map((group) => (
            <article key={group.category} className='card skills-card'>
              <h3 className='skills-card__category'>{group.category}</h3>
              <div className='skills-card__list'>
                {group.skills.map((skill) => (
                  <span key={skill} className='tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className='interests'>
          <h3 className='interests__title'>Interests & Languages</h3>
          <div className='skills-card__list'>
            {interests.map((item) => (
              <span key={item} className='tag'>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
