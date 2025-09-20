import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import DarkMode from '../Theme/Dark';
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';
import './navbar.css';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Dark mode state sync
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  // ✅ Toggle mobile menu
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ✅ Close mobile menu
  const closeMobileMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMobileMenuOpen(false);
  };

  // ✅ Outside click + Escape key close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.hamburger-menu')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* ✅ Brand */}
          <div className="navbar-brand">AL Rehman Restaurant</div>

          {/* ✅ Actions */}
          <div className="navbar-actions">
            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Desktop Nav */}
            <ul className="navbar-nav">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ✅ Order Button */}
            <Link to="/menu" className="navbar-order-btn navbar-order-btn-desktop">
              Order
              <FaShoppingCart className="navbar-cart-icon" />
            </Link>

            {/* ✅ Hamburger */}
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              isDark={isDark}
            />
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          menuItems={menuItems}
        />
      </div>
    </div>
  );
};

export default Navbar;
