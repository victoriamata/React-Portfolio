import React, { useState } from "react";
import { MdOutlineWavingHand } from "react-icons/md";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="aboutme-content">
      <img className="portfolioimg" src="./assets/portfolioimg.png" />
      <h2>
        Hello, I'm Victoria Mata{" "}
        <MdOutlineWavingHand style={{ fontSize: "39px" }} />{" "}
      </h2>
      <h3> Software Developer | Data Analyst </h3>
      <p className="aboutme-p">
        I was born and raised in South Florida before moving to Knoxville,
        Tennessee, with my family at the age of 16. After five years in
        Tennessee, I relocated to the Orlando, Florida area with my husband and
        family. My professional background includes experience in healthcare and
        banking, but my true passion lies in software development.
        {isExpanded && (
          <>
            Two years ago, I discovered the exciting world of programming, and it
            completely changed the course of my career ambitions. Eager to learn, I
            started by teaching myself HTML and CSS, but I soon realized I wanted a
            more comprehensive education. This led me to enroll in the University of
            Central Florida's full stack coding bootcamp, where I have officially
            graduated and received a certificate from. I’m thrilled to pursue a career
            as a Software Engineer, combining my technical skills and creativity to
            build innovative and impactful projects. I look forward to continuing to
            grow, learn, and contribute meaningfully in this ever-evolving field.
          </>
        )}
      </p>
      <button onClick={toggleText} className="view-more-btn">
        {isExpanded ? "View Less" : "View More"}
      </button>
    </section>
  );
};

export default About;
