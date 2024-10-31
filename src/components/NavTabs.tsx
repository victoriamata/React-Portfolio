import React from 'react';
import { Link } from 'react-router-dom';

const NavTabs: React.FC = () => {
  return (
    <nav className="nav-tabs">
      <Link to="/">About Me</Link>
      <Link to="/about">Portfolio</Link>
      <Link to="/projects">Contact</Link>
      <Link to="/contact">Resume</Link>
    </nav>
  );
};

export default NavTabs;

