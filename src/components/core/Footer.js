import React from 'react';
import { profile } from '../../data/resume';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <div className='container site-footer__inner'>
        <p className='site-footer__copy'>
          © {year} {profile.name}. Built with React.
        </p>
        <div className='site-footer__links'>
          <a href={profile.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <i className='bi bi-linkedin' />
          </a>
          <a href={profile.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <i className='bi bi-github' />
          </a>
          <a href={`mailto:${profile.email}`} aria-label='Email'>
            <i className='bi bi-envelope' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
