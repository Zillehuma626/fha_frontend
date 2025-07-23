// components/Footer.jsx
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="fhaconsultants-footer">
      <div className="footer-content">

        <div className="footer-col logo-col">
          <h2 className="footer-logo">FHA Consultants</h2>
          <p>Precision-driven accounting and advisory services.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="no-bullets">
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-follow">
            <a 
              href="https://www.facebook.com/share/1C1xivYL5a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>
          📍 <a
            href="https://www.google.com/maps?q=129+Lewisham+Way,+London+SE14+6QJ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            >
              129 Lewisham Way, London SE14 6QJ
            </a>
          </p>

          <p>
            ✉️  <a href="mailto:info@fhaconsultants.co.uk" className="footer-link">
              Contact@fhaaccountants.co.uk
            </a>
          </p>
          <p>+923425650559</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 FHA Consultants. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
