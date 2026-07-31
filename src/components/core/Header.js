import React, { useEffect, useState } from 'react';
import { profile } from '../../data/resume';
import profilePhoto from '../../assets/profile.jpeg';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className='container site-header__inner'>
        <a href='#home' className='site-header__brand' onClick={closeMenu}>
          <img
            src={profilePhoto}
            alt=''
            className='site-header__avatar'
            aria-hidden='true'
          />
          {profile.name.split(' ')[0]}
          <span className='site-header__brand-dot'>.</span>
        </a>

        <button
          type='button'
          className='site-header__toggle'
          aria-expanded={menuOpen}
          aria-label='Toggle navigation'
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} />
        </button>

        <nav className={`site-header__nav ${menuOpen ? 'site-header__nav--open' : ''}`}>
          <ul className='site-header__links'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
