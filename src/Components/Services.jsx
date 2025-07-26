import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    title: 'Auto-Enrolment Services',
    image: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753463416/auto_kawkrn.jpg'
  },
  {
    title: 'Payroll',
    image: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753461766/pay_q5sjp7.png'
  },
  {
    title: 'Taxation',
    image: "https://res.cloudinary.com/dcqtytezw/image/upload/v1753461679/tax_y42iix.jpg"
  },
  {
    title: 'Accounting',
    image: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753461602/accounting_gztvjx.avif'
  },
  {
    title: 'Advisory',
    image: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753461610/d_vjlnfp.jpg'
  }
];

const Services = () => {
  return (
    <>
      <section className="services-header">
        <div className="services-heading-left">
          <h1>Our Services</h1>
        </div>
        <div className="services-separator">
          <span> ✦</span>
        </div>
        <div className="services-heading-right">
          <p>
            From taxation and payroll to advisory and compliance, our solutions are designed to simplify processes and maximize financial efficiency.
          </p>
        </div>
      </section>

      <section className="modern-services">
        {services.map((service, index) => (
          <Link
            key={index}
            to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="full-service-section"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="overlay">
              <h2>{service.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Services;
