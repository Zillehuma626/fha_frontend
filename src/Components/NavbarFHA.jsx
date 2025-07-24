import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavbarFHA.css';
import fhalogo from '../assets/images/FHA.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={fhalogo} alt="FHA Logo" className="logo-img" />
        <span className="logo-text">FHA Accountants</span>
      </Link>


      {/* Hamburger icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        ref={iconRef}
      >
        ☰
      </div>

      {/* Conditional nav links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={menuRef}>
        <li className="nav-item-container">
          <Link to="/about" className="nav-item">Why Us</Link>
        </li>
        <li className="nav-item-container">
          <Link to="/services" className="nav-item">Services</Link>
        </li>
        <li className="nav-item-container">
          <Link to="/partners" className="nav-item">Partners</Link>
        </li>
        <li className="nav-item-container">
          <Link to="/contact" className="nav-item">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
