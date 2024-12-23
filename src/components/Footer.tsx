// import React from 'react'
import TwitterIcon from "../assets/images/twitter-icon.svg"
import LinkedInIcon from "../assets/images/linkedin-icon.svg"
import InstagramIcon from "../assets/images/instagram-icon.svg"

const Footer = () => {
  return (
    <footer className="footer py-3 primary-color">
    <div className="container">
        <div className="d-grid d-md-flex align-items-center justify-content-md-between justify-content-center gap-3">
            <span className="text-white font-12 font-semibold d-block">Copyright © 2024 Epic Advanced Materials</span>
            <span className="text-white font-12 font-semibold d-block d-flex gap-5">
                <span><a href="privacy.html" className="text-white text-decoration-none">Privacy policy</a></span>
                <span><a href="terms.html" className="text-white text-decoration-none">Terms & Conditions</a></span>
            </span>
            <span className="text-white font-12 font-semibold d-block d-flex gap-3">
                <span><a href="https://x.com/EpicNanotech"><img src={TwitterIcon}
                            alt="twitter-icon"/></a></span>
                <span><a href="https://www.linkedin.com/company/epic-advanced-materials/posts/?feedView=all"><img
                            src={LinkedInIcon} alt="linkedIn-icon"/></a></span>
                <span><a href="https://www.instagram.com/epicnanotech/"><img src={InstagramIcon}
                            alt="instagram-icon"/></a></span>
            </span>
        </div>
    </div>
</footer>
  )
}

export default Footer