import React from 'react';
import './Hamburger.css';

const HamburgerButton = ({ isOpen, onClick, isDark }) => {
  return (
    <button
      className={`hamburger-menu ${isOpen ? 'active' : ''} ${isDark ? 'dark' : 'light'}`}
      onClick={onClick}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      type="button"
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
};

export default HamburgerButton;