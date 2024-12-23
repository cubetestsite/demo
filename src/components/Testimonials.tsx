// import React from 'react';

// Type for the testimonial data
interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Their ceramics are nanocrystalline, chemically pure, dense, lightweight, mechanically tough, and exhibit excellent stability in high-temperature oxidative and ablative environments.",
    author: "-Dr. Alex Zettl, Senior Staff Scientist, Lawrence Berkeley National Laboratory"
  },
  {
    text: "Everywhere you see carbon fiber you could probably replace it with Boron Nitride Nanotubes and have an advantage to that.",
    author: "-Dr. Alex Zettl, Senior Staff Scientist, Lawrence Berkeley National Laboratory"
  },
  {
    text: "Boron Nitride Nanomaterials bring massively enhanced thermal oxidation properties while being an electrical insulator, which is a truly unique combination.",
    author: "-Dr. Toby Sainsbury, Director of Future Manufacturing Ireland"
  }
];

const Testimonials = () => {
  return (
    <div className="mb-5 pb-5">
      <h3 className="orange-font font-bold font-32 text-center mb-5">Testimonials</h3>
      <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
              data-bs-interval="3000"
            >
              <div className="testimonial-card px-4 px-lg-5">
                <p className="text-white text-center mx-lg-5">
                  <span className="d-block font-16 font-regular animate-on-scroll-testimonial">
                    <span className="orange-font font-24">“</span>
                    {testimonial.text}
                    <span className="orange-font font-24">”</span>
                  </span>
                  <span className="animate-on-scroll-testimonial-author font-14 font-regular text-white text-opacity-50 d-block mx-auto mt-5 w-100 w-lg-50 text-center">
                    {testimonial.author}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev d-none d-lg-flex" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next d-none d-lg-flex" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
