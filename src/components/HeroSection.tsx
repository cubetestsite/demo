import React from 'react';

interface HeroSectionProps {
  imageSrc: string;
  altText: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc, altText, title }) => {
  return (
    <div className="position-relative hero-space">
      <div className="fadeover-product">
        <img
          className="product-section-img w-100 d-block"
          alt={altText}
          src={imageSrc}
          style={{ height: '340px' }}
        />
      </div>
      <div className="container">
        <div className="position-absolute top-50 font-bold font-52 translate-middle-y w-75 text-white hero-content">
        {title.split('\\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
