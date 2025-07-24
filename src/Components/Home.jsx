import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="home-container">
        <div className="hero-section">
          <h1 className='hero-heading desktop-heading'>"Because Every Penny <br /> &nbsp; Matters"</h1>
          <h1 className="hero-heading mobile-heading">
              Because Every<br />Penny Matters
            </h1>
          <p>
            FHA Consultants combines deep financial knowledge with a proactive
            approach to help you navigate tax, payroll, compliance, and beyond —
            with zero guesswork.
          </p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
          <a    
            href="https://wa.me/923425650559"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp className="whatsapp-icon" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

