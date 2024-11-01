import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-left">
      <h1>Victoria Mata</h1>
    </div>
    <nav className="nav-tabs">
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        About Me
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Resume
      </NavLink>
    </nav>
  </header>
);

export default Header;
