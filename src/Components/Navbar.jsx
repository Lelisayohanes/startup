import React, { useState } from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <ul className={`menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <li className="menu-item">Home</li>
          <li className="menu-item">Contact Us</li>
          <li className="menu-item">Services</li>
        </ul>
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
