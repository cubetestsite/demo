// import React from 'react'

import HeroSection from "../components/HeroSection";
import HeroImg from "../assets/images/applications-bg-img.png";

const Applications = () => {
  return (
    <div>
      <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="APPLICATIONS"
      />
    </div>
  );
};

export default Applications;
