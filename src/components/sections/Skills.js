import React from 'react';
import { skillGroups, interests } from '../../data/resume';
import Reveal from '../core/Reveal';

function Skills() {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <Reveal className='section-header'>
          <span className='section-label'>Skills</span>
          <h2 className='section-title'>Technologies & tools</h2>
        </Reveal>

        <div className='skills-grid'>
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} as='article' delay={index * 80} className='card skills-card'>
              <h3 className='skills-card__category'>{group.category}</h3>
              <div className='skills-card__list'>
                {group.skills.map((skill) => (
                  <span key={skill} className='tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className='interests' delay={skillGroups.length * 80}>
          <h3 className='interests__title'>Interests & Languages</h3>
          <div className='skills-card__list'>
            {interests.map((item) => (
              <span key={item} className='tag'>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
