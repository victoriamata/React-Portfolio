import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => (
  <section>
    <h2>Projects</h2>
    <ProjectCard
      title="Build Your Vehicle"
      description="This project is a typescript command line application that builds three different types of vehicles, or allows the user to select an existing vehicle."
      imageUrl=""
      link="https://github.com/victoriamata/Build-Your-Vehicle"
    />
    <ProjectCard
      title="Daily Weather"
      description="Using server API's, this application allows a traveling user to view a 5 day forecast at any location, so that they can plan a trip and activities accordingly."
      imageUrl="/path/to/image2.jpg"
      link="https://github.com/victoriamata/Daily-Weather"
    />
  </section>
);

export default Projects;

