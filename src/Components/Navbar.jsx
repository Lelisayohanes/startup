import React, { useState } from 'react';
import '../Style/Navbar.css';
import LogoImage from '../assets/logo 1.png';
import closeImage from '../../src/assets/close_FILL0_wght400_GRAD0_opsz48.png';
import menuImage from '../../src/assets/menu_FILL0_wght400_GRAD0_opsz48.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className={`logo ${isMobileMenuOpen ? 'hide' : ''}`}><img className='Logo-Image' src='../../src/assets/logo 1.png' alt='Logo' /></div>
        {/* <div className="logo"><img className='Logo-Image' src='../../src/assets/logo 1.png' alt='Logo' /></div> */}
        <ul className={`menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li className="menu-item">Home</li>
          <li className="menu-item">Contact Us</li>
          <li className="menu-item">Services</li>
        </ul>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? (
          <img className='menu-butn'  src={closeImage} alt="Close" />
        ) : (
          <img className='menu-butn' src={menuImage} alt="Menu" />
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
