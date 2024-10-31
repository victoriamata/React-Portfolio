import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
      <nav className="nav-tabs">
      <h1>Victoria Mata</h1>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  </header>
);

export default Header;