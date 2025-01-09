import React, { useEffect } from "react";

const Header: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
          if (entry.isIntersecting) {
            navLink?.classList.add("active");
          } else {
            navLink?.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <h1>Victoria Mata</h1>
      </div>
      <nav className="nav-tabs">
        <a href="#about" className="nav-link">About Me</a>
        <a href="#projects" className="nav-link">Portfolio</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#resume" className="nav-link">Resume</a>
      </nav>
    </header>
  );
};

export default Header;
