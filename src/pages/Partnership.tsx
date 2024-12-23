// import React from 'react'

import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/partnership-bg-img.png"

const Partnership = () => {
  return (
    <div >
       <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="PARTNERSHIPS"
      />
    </div>
  )
}

export default Partnership