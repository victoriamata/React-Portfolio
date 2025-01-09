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
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.github.com/victoriamata"
        target="_blank"
        className="footer-icon"
      >
        <FaGithub size={30} />
      </a>
      <a
          href="mailto:victoriamataxo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <MdOutlineMailOutline size={30}/>
        </a>
    </nav>
  );
};

export default FooterTabs;
