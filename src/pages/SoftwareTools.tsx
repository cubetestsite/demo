// import React from 'react'

import HeroSection from "../components/HeroSection";
import HeroImg from "../assets/images/software-tools-bg-img.jpg"
import BodyWrapper from "../components/BodyWrapper";
import QuestionForm from "../components/QuestionForm";
import ToolItem from "../components/ToolItem";

const SoftwareTools = () => {
  return (
    <div>
      <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="SOFTWARE TOOLS"
      />
      <BodyWrapper>
       <ToolItem/>
      </BodyWrapper>
      <QuestionForm/>
    </div>
  );
};

export default SoftwareTools;
