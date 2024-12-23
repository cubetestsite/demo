import React from 'react';
import OurMissionImg from "../assets/images/our-mission-img.png"
import OurVisionImg from "../assets/images/our-vision-img.png"
import ValuesImg from "../assets/images/our-values-img.png"

interface SectionData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isImageRight?: boolean; // Optional: Determines if the image is on the right side
}

const sections: SectionData[] = [
  {
    title: 'OUR VISION',
    description: `Our vision is to be at the forefront of groundbreaking advancements, pioneering a 
      transformative future by unlocking unprecedented material properties that were previously inaccessible.
      We are committed to creating a better world through redefining what is achievable, utilizing cutting-edge 
      technologies to achieve best-in-class results and experiences for our partners and customers.`,
    imageSrc: OurVisionImg,
    imageAlt: 'Our Vision Image',
    isImageRight: false,
  },
  {
    title: 'OUR MISSION',
    description: `To lead innovation in the advanced materials space by being the premier provider in 
      the global marketplace of AI-driven nano-engineered products and solutions.`,
    imageSrc: OurMissionImg,
    imageAlt: 'Our Mission Image',
    isImageRight: true,
  },
  {
    title: 'OUR VALUES',
    description: `
      <span class="font-20 font-semibold d-block">INTEGRITY</span>
      We will conduct business in an ethical and forthright manner, while never compromising our core values and beliefs.
      <br /><br />
      <span class="font-20 font-semibold d-block">PROFESSIONALISM</span>
      We will always treat people with dignity and respect, and we will hold ourselves accountable for our words, actions, and results.
      <br /><br />
      <span class="font-20 font-semibold d-block">SAFETY</span>
      We will always do the most that we can not to cause harm to ourselves or others, being mindful of workplace safety, and minimizing negative impacts on the environment.
      <br /><br />
      <span class="font-20 font-semibold d-block">COMMITMENT</span>
      To excellence, innovation, collaboration, quality, customer service, and continuous improvement.`,
    imageSrc: ValuesImg,
    imageAlt: 'Our Values Image',
    isImageRight: false,
  },
];

const MissionVisionCard: React.FC = () => {
  return (
    <div className="col-md-11 my-5">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`product-card d-flex flex-column ${
            section.isImageRight ? 'flex-lg-row-reverse' : 'flex-lg-row'
          } gap-5 p-5 mb-5 ${index > 0 ? 'mt-3' : ''}`}
          style={{ height: 'unset' }}
        >
          <div className="text-center">
            <img
              src={section.imageSrc}
              alt={section.imageAlt}
              style={{ height: '200px', width: '200px' }}
            />
          </div>
          <div>
            <h3 className="font-bold font-32 orange-font">{section.title}</h3>
            <p
              className="font-14 font-regular text-white"
              dangerouslySetInnerHTML={{ __html: section.description }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionVisionCard;
