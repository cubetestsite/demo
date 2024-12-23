import React from "react";
import BodyCarouselImg1 from "../assets/images/business-history-img.png";
import BodyCarouselImg2 from "../assets/images/adv-manufacturing-img.png";
import BodyCarouselImg3 from "../assets/images/focus-area-img.png";

interface CarouselItem {
  id: number;
  imgSrc: string;
  imgAlt: string;
  heading: string;
  paragraph: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    imgSrc: BodyCarouselImg1,
    imgAlt: "business-history-img",
    heading: "Know About Our Business, History",
    paragraph: `For decades, what is considered the 21st century’s wonder material, 
                boron nitride nanotubes (BNNTs) have attracted worldwide research 
                interest due to their unique physical properties and applications 
                in a range of fields—including energy, electronics, and biomedical 
                applications. BNNT’s like other nano materials are now coming into 
                their own with the potential for wide economic and social impact.`,
  },
  {
    id: 2,
    imgSrc: BodyCarouselImg2,
    imgAlt: "advanced-manufacturing-img",
    heading: "Advanced Manufacturing",
    paragraph: `We are an advanced manufacturing company focused on democratizing 
                the material science of nanotechnology.`,
  },
  {
    id: 3,
    imgSrc: BodyCarouselImg3,
    imgAlt: "focus-area-img",
    heading: "Focused Areas",
    paragraph: `We are focused on opening the material possibilities of nano structures 
                in the planes we fly, the satellites we launch, the drugs that deliver 
                lifesaving therapies, and the fuel cells we use to power our transportation.`,
  },
];

const BodyCarousel: React.FC = () => {
  return (
    <div id="body-carousel" className="carousel slide animate-on-scroll-carousel body-carousel">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="2000"
          >
            <div
              className={`d-flex flex-column ${
                index % 2 === 1 ? "flex-lg-row-reverse" : "flex-lg-row"
              } mx-0 mx-md-5 px-0 px-lg-5 py-5 my-5 align-items-center justify-content-center gap-5`}
            >
              <img src={item.imgSrc} alt={item.imgAlt} className="img-250" />
              <div className="text-white me-0 me-lg-5 text-center text-lg-start">
                <h2 className="font-bold orange-font mb-4 px-2 px-md-0">
                  {item.heading}
                </h2>
                <p className="font-14 font-regular h-210">{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#body-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#body-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BodyCarousel;
