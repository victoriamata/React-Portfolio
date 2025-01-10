import React from "react";
import { PiFileHtml } from "react-icons/pi";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";

const Resume: React.FC = () => (
  <section>
    <div className="resume-section-container">
      <div className="skills-list">
        <FaGitAlt />
        <FaGithubAlt />
        <PiFileHtml />
        <MdOutlineCss />
        <IoLogoJavascript />
        <IoLogoNodejs />
        <SiTypescript />
        <IoLogoReact />
        <SiPostgresql />
      </div>
      <div className="resume-text-box">
        <h2>
          <a href="./assets/resume.pdf" target="_blank">
            Click here to view my resume!
          </a>
        </h2>
      </div>
      <div className="resume-text-box">
        <h2>
          <a href="./public/assets/resume.pdf" download>
            Click here to download!
          </a>
        </h2>
      </div>
    </div>
  </section>
);

export default Resume;
