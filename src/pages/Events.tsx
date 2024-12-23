// import React from 'react'

import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/events-bg-img.png"

const Events = () => {
  return (
    <div >
      <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="EVENTS"
      />
    </div>
  )
}

export default Events