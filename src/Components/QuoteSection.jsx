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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://fha-backend.onrender.com/api/get-my-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote');
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        telephone: '',
        businessType: 'Limited Company',
        services: []
      });

      alert('Thank you! Your quote request has been sent successfully.');
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitError(error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="quote-section">
      <div className="quote-heading-container">
        <h1 className="quote-main-heading">Get My Fast Quote</h1>
        <div className="heading-underline"></div>
      </div>
      
      {submitError && (
        <div className="error-message">
          {submitError}
        </div>
      )}

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

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
        </button>
      </form>
    </section>
  );
};

export default QuoteSection;
