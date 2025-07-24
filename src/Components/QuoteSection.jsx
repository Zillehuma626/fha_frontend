import React, { useState } from 'react';
import './QuoteSection.css';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    businessType: 'Limited Company',
    services: []
  });

  const businessTypes = [
    'Limited Company',
    'Sole Trader',
    'Partnership',
    'Limited Liability Partnership (LLP)',
    'Charity',
    'Trust',
    'Estate',
    'Self Employed',
    'Contractor',
    'Freelancer',
    'Startup',
    'Non-Profit Organization',
    'Property Business',
    'Club/Association'
  ];

  const serviceOptions = [
    'Tax Returns',
    'Year End Accounts',
    'CIS Returns',
    'PAYE/Payroll',
    'VAT Returns',
    'Bookkeeping',
    'Financial Planning',
    'Business Advice',
    'Company Formation',
    'Self Assessment',
    'P11Ds',
    'R&D Tax Credits',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    alert('Thank you for your request! Our team will contact you within 24 hours.');
  };

  return (
    <section className="quote-section">
      <div className="quote-heading-container">
        <h1 className="quote-main-heading">Get My Fast Quote</h1>
        <div className="heading-underline"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your professional email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Your contact number"
          />
        </div>

        <div className="form-group">
          <label>Business Structure:</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="business-type-select"
          >
            {businessTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group services-group">
          <label>Required Accounting Services:</label>
          <div className="service-options">
            {serviceOptions.map(service => (
              <label key={service} className="service-option">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
                <span className="checkmark"></span>
                {service}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Get My Free Quote
        </button>
      </form>
    </section>
  );
};

export default QuoteSection;