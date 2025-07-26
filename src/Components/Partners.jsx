import React from 'react';
import './Partners.css';
import nestwellLogo from '../assets/images/Nestwell-Logo-C3.png';
import optimaLogo from '../assets/images/cropped-Optima-Website-Logos-03-2048x918.png';
import abihaLogo from '../assets/images/AbihaSa.png';
import leatherEaseLogo from '../assets/images/LeatherEase.png';

const partners = [
  {
    name: 'Abiha Sa Ltd',
    logo:"https://res.cloudinary.com/dcqtytezw/image/upload/v1753461637/AbihaSa_pqn2rx.jpg" ,
    url: 'https://find-and-update.company-information.service.gov.uk/company/14931598',
  },
  {
    name: 'Optima Homecare Group Ltd',
    logo: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753461629/cropped-Optima-Website-Logos-03-2048x918_em4pvo.png',
    url: 'https://optimahomecare.co.uk/',
  },
  {
    name: 'Nestwell Care Ltd',
    logo: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753461671/Nestwell-Logo-C3_u8e4fj.png',
    url: 'https://nestwellcare.co.uk/',
  },
  {
    name: 'Leather Ease Ltd',
    logo: 'https://res.cloudinary.com/dcqtytezw/image/upload/v1753461665/LeatherEase_vvn7um.jpg',
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
