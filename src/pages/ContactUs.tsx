// import React from 'react'

import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/contact-us-img.png"

const ContactUs = () => {
  return (
    <div >
        <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="CONTACT US"
      />
    </div>
  )
}

export default ContactUs