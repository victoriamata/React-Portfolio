import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <section id="projects">
        <h2>Projects</h2>
        <ProjectCard
          title="Vehicle Builder"
          description="A short description of the project."
          imageUrl="/path/to/image1.jpg"
          link="https://github.com/victoriamata/Build-Your-Vehicle"
        />
        <ProjectCard
          title="Project 2"
          description="A short description of the project."
          imageUrl="/path/to/image2.jpg"
          link="https://github.com/victoriamata/project2"
        />
      </section>
    </div>
  )};

  export default Home