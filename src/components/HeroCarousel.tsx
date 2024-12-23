// import React from 'react'

import HeroCarouselImg1 from "../assets/images/car-img-1.jpg";
import HeroCarouselImg2 from "../assets/images/car-img-2.jpg";
import HeroCarouselImg3 from "../assets/images/car-img-3.jpg";
import HeroCarouselImg4 from "../assets/images/car-img-4.jpg";
import HeroCarouselImg5 from "../assets/images/car-img-5.jpg";

const heroImages = [
  { id: 1, src: HeroCarouselImg1, alt: "Hero Image 1" },
  { id: 2, src: HeroCarouselImg2, alt: "Hero Image 2" },
  { id: 3, src: HeroCarouselImg3, alt: "Hero Image 3" },
  { id: 4, src: HeroCarouselImg4, alt: "Hero Image 4" },
  { id: 5, src: HeroCarouselImg5, alt: "Hero Image 5" },
];

const HeroCarousel = () => {
  return (
    <div
      className="carousel slide mt-5 pt-0 mt-lg-5 pt-lg-5"
      data-bs-ride="carousel"
      data-bs-pause="false"
    >
      <div className="carousel-inner custom-carousel fadeover position-relative">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="2000"
          >
            <img
              src={image.src}
              className="d-block w-100 custom-carimg"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="position-absolute top-40 start-0 translate-middle-y mt-5 mt-md-0 mx-2 px-2 mx-lg-5 px-lg-5 carousel-content text-white">
        <span className="d-block font-16 font-regular">
          Welcome to the Nano Age...
        </span>
        <span>
          <span className="d-block font-52 font-bold mb-3 word">
            A Better Future with{" "}
            <a href="/product" className="text-decoration-none text-white">
              <span className="orange-color px-2">Atoms</span>
            </a>{" "}
            <span className="font-40">and</span>{" "}
            <a
              href="/software_tools"
              className="text-decoration-none text-white"
            >
              <span className="orange-color  px-2">Algorithms</span>
            </a>
          </span>
          <span className="d-block font-16 font-regular word">
            Manufacturing Boron Nitride Nanotubes at the Highest Quality and
            Scale to Build Next Generation Products
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeroCarousel;
