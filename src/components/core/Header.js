import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // GSAP animation for hover
  const handleHover = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.1, duration: 0.3 });
  };

  // GSAP animation for hover out
  const handleHoverOut = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.3 });
  };

  // GSAP animation for click
  const handleClick = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.9, duration: 0.2, ease: 'power1.out' });
    gsap.to(currentTarget, { scale: 1, duration: 0.1, delay: 0.2 });
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light opacity-50'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          Tianna Lopes
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
          {/* Alternatively, use a Bootstrap Icon for the hamburger menu */}
          {/* <i className="bi bi-list"></i> */}
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id='navbarNav'
        >
          <ul className='navbar-nav ms-auto'>
            {' '}
            {/* Updated class here */}
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/'
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/projects'
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/contact'
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
