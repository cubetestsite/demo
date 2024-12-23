// import React from 'react'

import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/team-bg.png"
import TeamCarousel from "../components/TeamCarousel"
import BodyWrapper from "../components/BodyWrapper"

const Team = () => {
  return (
    <div>
       <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="OUR TEAM"
      />
      <BodyWrapper>
      <TeamCarousel/>
      </BodyWrapper>
    </div>
  )
}

export default Team