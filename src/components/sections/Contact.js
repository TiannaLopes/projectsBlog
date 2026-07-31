import React from 'react';
import { profile } from '../../data/resume';
import Reveal from '../core/Reveal';

function Contact() {
  const links = [
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: 'bi-telephone',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\D/g, '')}`,
    },
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: profile.location,
      href: null,
    },
    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      value: 'tianna-lopes',
      href: profile.linkedin,
    },
    {
      icon: 'bi-github',
      label: 'GitHub',
      value: 'TiannaLopes',
      href: profile.github,
    },
  ];

  return (
    <section id='contact' className='section section--alt'>
      <div className='container'>
        <Reveal className='section-header'>
          <span className='section-label'>Contact</span>
          <h2 className='section-title'>Let's connect</h2>
          <p className='section-subtitle'>
            Open to collaborations, opportunities, and conversations about software development.
          </p>
        </Reveal>

        <div className='contact-grid'>
          <Reveal delay={80}>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
              Whether you're looking for a developer who understands both the technical and human
              side of software, or just want to say hello — I'd love to hear from you.
            </p>
          </Reveal>

          <div className='contact-links'>
            {links.map((link, index) => {
              const content = (
                <>
                  <div className='contact-card__icon'>
                    <i className={`bi ${link.icon}`} />
                  </div>
                  <div>
                    <p className='contact-card__label'>{link.label}</p>
                    <p className='contact-card__value'>{link.value}</p>
                  </div>
                </>
              );

              if (link.href) {
                return (
                  <Reveal key={link.label} delay={120 + index * 70}>
                    <a
                      href={link.href}
                      className='card contact-card'
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  </Reveal>
                );
              }

              return (
                <Reveal key={link.label} delay={120 + index * 70}>
                  <div className='card contact-card'>{content}</div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
