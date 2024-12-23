import { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import AboutUsImg from "../assets/images/nano-tube.png";
import "../assets/css/landing.css";
import "../assets/css/animations.css";
// import "../assets/js/animations.js";
import BodyCarousel from "../components/BodyCarousel";
import { initializeAnimations } from "../assets/js/animations";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import FooterForm from "../components/FooterForm";

const Home = () => {
  useEffect(() => {
    // Call the animation initialization function after the component mounts
    initializeAnimations();
  }, []);
  return (
    <div>
      <HeroCarousel />
      <div className="container-fluid bg-grad">
        <div className="container-lg">
          <div className="row">
            {/* about us section starts  */}

            <div className="about-us d-flex flex-column flex-md-row  px-5 py-5 align-items-center justify-content-center gap-5">
              <img
                src={AboutUsImg}
                alt="nano-tube"
                className=" mx-lg-5 nano-tube-img about-us-img"
              />
              <div className="text-white me-0 me-lg-5 about-us-content text-center text-md-start">
                <h2 className="font-bold orange-font mb-4">About Us</h2>
                <p className="font-14 font-regular">
                  <span className="d-block mb-3">
                    To lead innovation in the advanced materials space by being
                    the premier provider in the global marketplace of AI-driven
                    nano-engineered products and solutions.
                  </span>
                  Our vision is to be at the forefront of groundbreaking
                  advancements, pioneering a transformative future by unlocking
                  unprecedented material properties that were previously
                  inaccessible. We are committed to creating a better world
                  through redefining what is achievable, utilizing cutting edge
                  technologies to achieve best in className results and
                  experiences for our partners and customers.
                </p>
              </div>
            </div>

            {/* about us section ends  */}

            <BodyCarousel />
            <Clients />
            <Testimonials/>
           
          </div>
        </div>
      </div>
      <FooterForm/>
    </div>
  );
};

export default Home;
