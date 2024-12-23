// import React from 'react'

import HeroSection from "../components/HeroSection";
import "../assets/css/products.css";
import HeroImg from "../assets/images/mission-vision.png";
import BodyWrapper from "../components/BodyWrapper";
import MissionVisionCard from "../components/MissionVisionCard";

const MissionVision = () => {
  return (
    <div>
      <HeroSection
        imageSrc={HeroImg}
        altText="Vision, Mission, and Values Background"
        title="VISION, MISSION & \n OUR VALUES"
      />
      <BodyWrapper>
        <MissionVisionCard/>
      </BodyWrapper>
    </div>
  );
};

export default MissionVision;
