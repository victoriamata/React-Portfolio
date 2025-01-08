import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
    </nav>
  );
};

export default FooterTabs;
