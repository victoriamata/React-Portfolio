import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutMe";
import Projects from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import FooterTabs from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <FooterTabs />
      </div>
    </Router>
  );
};

export default App;
