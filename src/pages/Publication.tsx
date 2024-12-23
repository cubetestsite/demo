// import React from 'react'

import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/publication-bg-img.png"

const Publication = () => {
  return (
    <div>
       <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="PUBLICATIONS"
      />
    </div>
  )
}

export default Publication