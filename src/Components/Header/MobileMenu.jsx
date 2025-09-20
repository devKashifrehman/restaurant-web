import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const handleLinkClick = () => {
    // Close the mobile menu when a link is clicked
    onClose();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <ul className="mobile-menu-nav">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink 
              to={item.href} 
              onClick={handleLinkClick}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="navbar-order-btn mobile-order-btn"
        onClick={handleLinkClick}
      >
        Order
        <FaShoppingCart className="navbar-cart-icon" />
      </button>
    </div>
  );
};

export default MobileMenu;