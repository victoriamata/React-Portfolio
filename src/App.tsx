import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutMe';
import Projects from './pages/Portfolio';
import Contact from './pages/Contact';
import NavTabs from './components/NavTabs';

const App: React.FC = () => {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
