import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import FooterTabs from "./components/Footer";
import About from "./pages/AboutMe";
import Projects from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-in-view");
          } else {
            entry.target.classList.remove("section-in-view");
          }
        });
      },
      { threshold: 0.1 } // Trigger earlier in the scroll
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="resume">
            <Resume />
          </section>
        </div>
        <FooterTabs />
      </div>
    </Router>
  );
};

export default App;
