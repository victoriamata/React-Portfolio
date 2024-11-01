import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => (
  <section>
    <h2>Projects</h2>
    <div className ="card-container">
    <div className='project-card'>
    <ProjectCard
      title="CoolShirts Store"
      description="I collaborated with a group to create this website using HTML, CSS, and JavaScript. "
      imageUrl="./src/assets/coolshirts.png"
      link="https://github.com/ChandlerRobinson/Project-1"
    />
    </div>
    <div className = "project-card">
    <ProjectCard 
      title="Build Your Vehicle"
      description="This project is a typescript command line application that builds three different types of vehicles, or allows the user to select an existing vehicle."
      imageUrl="./src/assets/buildyourvehicle.png"
      link="https://github.com/victoriamata/Build-Your-Vehicle"
    />
    </div>
    <div className="project-card">
    <ProjectCard
      title="Employee Tracker"
      description="Using server API's, this application allows a traveling user to view a 5 day forecast at any location, so that they can plan a trip and activities accordingly."
      imageUrl="./src/assets/employeetracker.png"
      link="https://github.com/victoriamata/Daily-Weather"
    />
    </div>
    <div className="project-card">
    <ProjectCard
      title="Daily Weather"
      description="Using server API's, this application allows a traveling user to view a 5 day forecast at any location, so that they can plan a trip and activities accordingly."
      imageUrl="./src/assets/dailyweather.png"
      link="https://github.com/victoriamata/Daily-Weather"
    />
    </div>
    <div className = "project-card">
    <ProjectCard
      title="Nessa's Kitchen"
      description="This application will be coming soon, and created with React Typescript. This app will allow users to book a catering service and view a menu. "
      imageUrl="./src/assets/coming-soon.png"
      link="https://github.com/victoriamata/readme-generator"
    />
    </div>
    <div className = "project-card">
    <ProjectCard
      title="Readme Generator"
      description="This application will be coming soon, and created with React Typescript. This app will allow users to book a catering service and view a menu. "
      imageUrl="./src/assets/readmegenerator.png"
      link="https://github.com/victoriamata/readme-generator"
    />
    </div>
    </div>
  </section>
);

export default Projects;

