import React from 'react';
import { Link } from 'react-router-dom';

const FooterTabs: React.FC = () => {
  return (
    <nav className="footer">
      <a className="footer-icon" href="https://github.com/victoriamata" target="_blank">
        Github
      </a>
      <a className="footer-icon" href="https://www.linkedin.com/in/victoria-mata-8676a932b/" target="_blank">
        LinkedIn
      </a>
      <a className="footer-icon" href="https://github.com/victoriamata" target="_blank">
        X
      </a>
    </nav>
  );
};

export default FooterTabs;

