import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const FooterTabs: React.FC = () => {
  return (
    <nav className="footer">
      <a
        href="https://www.linkedin.com/in/victoriamataxo/"
        target="_blank"
        className="footer-icon"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.github.com/victoriamata"
        target="_blank"
        className="footer-icon"
      >
        <FaGithub size={24} />
      </a>
      <a
          href="mailto:victoriamataxo@gmail.com"
          target="_blank"
          className="social-icon"
          rel="noopener noreferrer"
        >
          <MdOutlineMailOutline size={30} color={"#ffe5d9"}/>
        </a>
    </nav>
  );
};

export default FooterTabs;
