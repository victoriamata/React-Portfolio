import React from 'react';
import { PiFileHtml } from "react-icons/pi";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";

const Resume: React.FC = () => (
  <section>
    <div className="resume-section">
    <h2>Resume</h2>
    <h3>Skills:</h3>
    <ul className="skills-list">
    <FaGitAlt />
    <FaGithubAlt />
    <PiFileHtml />
    <MdOutlineCss />
    <IoLogoJavascript />
      <IoLogoNodejs />
      <SiTypescript />
      <IoLogoReact />
      <SiPostgresql />
</ul>
</div>
  </section>
);

export default Resume;