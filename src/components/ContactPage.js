import React from 'react';
import SpaceScene from './SpaceScene';
import '../styles/shared.css';

function ContactPage() {
  return (
    <div className='contact-container'>
      <SpaceScene />
      <div className='contact-content'>
        <h1>Contact Me</h1>
        <p>Feel free to get in touch for collaborations or questions!</p>
      </div>
    </div>
  );
}

export default ContactPage;
