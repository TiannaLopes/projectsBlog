import React from 'react';
import { profile } from '../../data/resume';
import profilePhoto from '../../assets/profile.jpeg';

function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='container hero__layout'>
        <div className='hero__content hero-animate'>
          <p className='hero__greeting'>Hello, I&apos;m</p>
          <h1 className='hero__title hero__title--cursor'>{profile.name}</h1>
          <p className='hero__role'>&quot;{profile.title}&quot;</p>
          <p className='hero__tagline'>{profile.tagline}</p>

          <div className='hero__meta'>
            <span>
              <i className='bi bi-geo-alt' /> {profile.location}
            </span>
            <span>
              <i className='bi bi-envelope' /> {profile.email}
            </span>
          </div>

          <div className='hero__actions'>
            <a href='#experience' className='btn btn-primary'>
              View Experience
            </a>
            <a href='#contact' className='btn btn-secondary'>
              Get in Touch
            </a>
            <a
              href={profile.linkedin}
              className='btn btn-secondary no-print'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bi bi-linkedin' /> LinkedIn
            </a>
          </div>
        </div>

        <div className='hero__visual'>
          <div className='hero__photo-wrap'>
            <img src={profilePhoto} alt={profile.name} className='hero__photo' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
