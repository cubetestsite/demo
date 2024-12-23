// import React from 'react'

import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/team-bg.png"

const Team = () => {
  return (
    <div>
       <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="OUR TEAM"
      />
    </div>
  )
}

export default Team