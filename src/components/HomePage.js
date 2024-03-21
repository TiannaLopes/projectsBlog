// HomePage.js
import React from 'react';
import SpaceScene from './SpaceScene';

function HomePage() {
  return (
    <div className='homePageContainer p-0 m-0 position-relative'>
      <div
        style={{ zIndex: 10, position: 'sticky', top: 0, background: 'black' }}
      >
        {' '}
        {/* Ensure this div has a background */}
        <h1 className='text-light mb-5'>Welcome to My Portfolio</h1>
      </div>
      <SpaceScene />
    </div>
  );
}

export default HomePage;
