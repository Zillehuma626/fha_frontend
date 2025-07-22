import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    title: 'Auto-Enrolment Services',
    image: 'https://benifex.com/wp-content/uploads/2025/03/iStock-1127302409.jpg'
  },
  {
    title: 'Payroll',
    image: 'https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/2c35d7e31b9457dcb90f816f12713bd4?fallback=true&format=&size=2000x860%3E&version=latest&webp_fallback=png'
  },
  {
    title: 'Taxation',
    image: "https://tagco.pk/wp-content/uploads/2024/11/Tax-Consulting-to-Eliminate-Overpayment-scaled.jpg"
  },
  {
    title: 'Accounting',
    image: 'https://www.theaccountant-online.com/wp-content/uploads/sites/10/2024/08/shutterstock_2227145053.jpg'
  },
  {
    title: 'Advisory',
    image: 'https://sashandcompany.com/wp-content/uploads/2024/07/Types-of-Advisory-Services_-A-Comprehensive-Guide1.png'
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
