// pages/WhyChoose.jsx
import React from 'react';
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaRegChartBar,
  FaSearchDollar,
  FaBalanceScale,
  FaBook
} from 'react-icons/fa';
import './About.css'; // Or use 'WhyChoose.css' if you’ve separated styles

const WhyChoose = () => {
  return (
    <section className="why-section" id="why-us">
      <h2 className="why-heading">Why Choose FHA Accountants?</h2>
      <p className="why-subheading">"Future-Proof Your Finances"
      </p>

      <div className="why-cards-container">
        <div className="why-card">
          <div className="why-icon"><FaCalculator size={36} /></div>
          <h3>Trusted Expertise</h3>
          <p>Our certified professionals bring decades of experience in accounting, tax planning, and financial consulting.</p>
        </div>

        <div className="why-card">
          <div className="why-icon"><FaFileInvoiceDollar size={36} /></div>
          <h3>Personalized Service</h3>
          <p>We take the time to understand your specific needs and provide custom solutions tailored to your goals.</p>
        </div>

        <div className="why-card">
          <div className="why-icon"><FaBalanceScale size={36} /></div>
          <h3>Affordable Pricing</h3>
          <p>Get top-tier service without breaking the bank. We offer competitive rates with transparent pricing.</p>
        </div>

        <div className="why-card">
          <div className="why-icon"><FaRegChartBar size={36} /></div>
          <h3>Modern Tools</h3>
          <p>We leverage the latest accounting technologies to make your finances accurate, fast, and secure.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
