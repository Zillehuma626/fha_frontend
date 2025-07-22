import React from 'react';
import './Partners.css';
import nestwellLogo from '../assets/images/Nestwell-Logo-C3.png';
import optimaLogo from '../assets/images/cropped-Optima-Website-Logos-03-2048x918.png';

const partners = [
  {
    name: 'Abiha Sa Ltd',
    url: 'https://find-and-update.company-information.service.gov.uk/company/14931598',
  },
  {
    name: 'Optima Homecare Group Ltd',
    logo: optimaLogo,
    url: 'https://optimahomecare.co.uk/',
  },
  {
    name: 'Nestwell Care Ltd',
    logo: nestwellLogo,
    url: 'https://nestwellcare.co.uk/',
  },
  {
    name: 'Leather Ease Ltd',
    url: 'https://find-and-update.company-information.service.gov.uk/company/16571221',
  },
];

const Partners = () => {
  return (
    <div className="partners-page">
      <div className="background-overlay">
        <div className="text-overlay">
          <h1>Information Partners</h1>
        </div>

        <div className="white-container">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo"
            >
              <img src={partner.logo} alt={`${partner.name} Logo`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

