import React from "react";
import "../assets/css/team.css"
import TeamImg1 from "../assets/images/Glenn-img.jpg";
import TeamImg2 from "../assets/images/Jack-img.jpg";
import TeamImg3 from "../assets/images/Marie-img.jpg";
import TeamImg4 from "../assets/images/Saber-img.jpg";
import TeamImg5 from "../assets/images/Sean-Walsh-img.jpg";
import TeamImg6 from "../assets/images/Erika-brown-img.jpg";
import TeamImg7 from "../assets/images/Evan-Gurnick-img.jpg";
import TeamImg8 from "../assets/images/David-Chaparro-img.jpg";
import TeamImg9 from "../assets/images/Adriana-Fish-img.jpg";
import TeamImg10 from "../assets/images/Tyler-Johnson-img.jpg";
import TeamImg11 from "../assets/images/Michael-Pizano-img.jpg";
import TeamImg12 from "../assets/images/Tristan-Duran-img.jpg";

const teamMembers = [
    {
        id: 0,
        name: "Glenn Judd",
        position: "Chief Officer of Operations",
        image: TeamImg1,
        description: [
            "Background in Chemical Engineering with an impressive 33 years of industrial experience spanning biotech, photographic materials, nanotech, personal care ingredients and finished goods.",
            "Excelled in various roles in Research & Development, Engineering, and Operations.",
            "In the last 12 years, he has served as a corporate officer, demonstrating his commitment to driving operational excellence and strategic growth."
        ]
    },
    {
        id: 1,
        name: "Jack Roe",
        position: "General Manager",
        image: TeamImg2,
        description: [
            "Licensing, technology transfer, and commercialization experience across a range of technologies.",
            "Business development, planning, and execution.",
            "BS, Boston College. Computer Science. MBA, The Wharton School, University of Pennsylvania."
        ]
    },
    {
        id: 2,
        name: "Marie Phelps",
        position: "Head of Operations and Finance",
        image: TeamImg3,
        description: [
            "Lead a merger of two tech companies.",
            "Focused on building the foundation for scalability and provide financial accountability for our investors.",
            "Interests include travel and spending time with large extended family."
        ]
    },
    {
        id: 3,
        name: "Dr. Saber Naserifar",
        position: "Sr. Computational Research Scientist",
        image: TeamImg4,
        description: [
            "Expert in computational chemistry and molecular modeling.",
            "Developed innovative solutions for material sciences.",
            "Holds a PhD in Chemistry from a top-tier university."
        ]
    },
    {
        id: 4,
        name: "Dr. Sean Walsh",
        position: "Chief Officer of Operations",
        image: TeamImg5,
        description: [
            "Proven track record in operational leadership.",
            "Expertise in scaling organizations and optimizing workflows.",
            "Passionate about fostering innovation and teamwork."
        ]
    },
    {
        id: 5,
        name: "Dr. Erika Brown",
        position: "Lead Project Engineer",
        image: TeamImg6,
        description: [
            "Leads cross-functional engineering teams.",
            "Specializes in process optimization and project management.",
            "Holds multiple engineering certifications."
        ]
    },
    {
        id: 6,
        name: "Evan Gurnick",
        position: "Full Stack Engineer",
        image: TeamImg7,
        description: [
            "Skilled in front-end and back-end development.",
            "Passionate about building scalable and user-friendly applications.",
            "Enjoys mentoring junior developers."
        ]
    },
    {
        id: 7,
        name: "David Chaparro",
        position: "Automation Engineer",
        image: TeamImg8,
        description: [
            "Expert in automating industrial processes.",
            "Focuses on improving efficiency and reducing costs.",
            "Enjoys collaborating with cross-disciplinary teams."
        ]
    },
    {
        id: 8,
        name: "Adriana Fish",
        position: "Operations Coordinator",
        image: TeamImg9,
        description: [
            "Ensures smooth day-to-day operations.",
            "Experienced in logistics and supply chain management.",
            "Passionate about delivering exceptional results."
        ]
    },
    {
        id: 9,
        name: "Tyler Johnson",
        position: "Chemical Lab Technician",
        image: TeamImg10,
        description: [
            "Supports R&D initiatives in the lab.",
            "Expertise in chemical analysis and reporting.",
            "Committed to maintaining safety and quality standards."
        ]
    },
    {
        id: 10,
        name: "Michael Pizano Jr",
        position: "Process Engineering Technician",
        image: TeamImg11,
        description: [
            "Focuses on improving manufacturing processes.",
            "Skilled in troubleshooting and problem-solving.",
            "Passionate about sustainable engineering practices."
        ]
    },
    {
        id: 11,
        name: "Tristan Duran",
        position: "Process Technician",
        image: TeamImg12,
        description: [
            "Expert in maintaining and optimizing production equipment.",
            "Dedicated to ensuring operational excellence.",
            "Holds certifications in industrial mechanics."
        ]
    }
];


const TeamCarousel: React.FC = () => {
  return (
    <div className="col-md-11 my-5">
      <div className="row mt-5 mb-5">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="col-6 col-sm-6 col-md-4 col-xl-3 mb-5"
            onClick={() => document.getElementById("teamsCarousel")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div
              className="d-flex flex-column gap-4 justify-content-center align-items-center cursor-point"
              data-bs-target="#teamsCarousel"
              data-bs-slide-to={member.id}
            >
              <img src={member.image} alt={`${member.name}-img`} className="w-75 team-img" />
              <div className="text-center">
                <span className="d-block text-white orange-font font-bold font-20">{member.name}</span>
                <span className="d-block text-white font-12 font-regular">{member.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="teamsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex flex-column flex-lg-row gap-3 primary-color align-items-center rounded-5 py-4 px-lg-5">
                <div className="col-md-3 col-6 border-lg-end border-none">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={member.image} alt={`${member.name}-img`} className="w-75 team-img" />
                  </div>
                </div>
                <span className="white-saperator d-none d-xl-block" style={{ height: "200px" }}></span>
                <div className="col-md-9">
                  <div className="d-flex flex-column justify-content-start px-3 px-lg-5">
                    <span className="d-block text-center text-xl-start text-white orange-font font-bold font-32">
                      {member.name}
                    </span>
                    <span className="d-block text-center text-xl-start text-white font-18 font-regular mb-3">
                      {member.position}
                    </span>
                    {member.description.map((desc, idx) => (
                      <React.Fragment key={idx}>
                        <p className="text-white font-14 font-regular my-2">{desc}</p>
                        {idx < member.description.length - 1 && <span className="orange-saperator w-25"></span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev d-none d-md-block"
          type="button"
          data-bs-target="#teamsCarousel"
          data-bs-slide="prev"
          style={{ width: "8%" }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-md-block"
          type="button"
          data-bs-target="#teamsCarousel"
          data-bs-slide="next"
          style={{ width: "8%" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
