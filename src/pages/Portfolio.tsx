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
      projectLink="https://chandlerrobinson.github.io/Project-1/"
      repoLink="https://github.com/ChandlerRobinson/Project-1"
    />
    </div>
    <div className = "project-card">
    <ProjectCard 
      title="Daily Weather"
      description="Using server API's, this application allows a traveling user to view a 5 day forecast at any location, so that they can plan a trip and activities accordingly."
      imageUrl="./src/assets/dailyweather.png"
      projectLink="https://google.com/project"
      repoLink="https://github.com/victoriamata/Daily-Weather"
    />
    </div>
    <div className="project-card">
    <ProjectCard
      title="Nessa's Kitchen"
      description="This application will be coming soon, and created with React Typescript. This app will allow users to book a catering service and view a menu. "
      imageUrl="./src/assets/coming-soon.png"
      projectLink="https://example.com/project"
      repoLink="https://github.com/victoriamata/readme-generator"
    />
    </div>
    <div className="project-card">
    <ProjectCard
       title="Coming Soon"
       description="This project is a placeholder for future projects that have not been created yet. "
       imageUrl="./src/assets/coming-soon.png"
       projectLink="https://google.com/project"
       repoLink="https://github.com/victoriamata"
    />
    </div>
    <div className = "project-card">
    <ProjectCard
      title="Coming Soon"
      description="This project is a placeholder for future projects that have not been created yet. "
      imageUrl="./src/assets/coming-soon.png"
      projectLink="https://google.com/project"
      repoLink="https://github.com/victoriamata"
    />
    </div>
    <div className = "project-card">
    <ProjectCard
      title="Coming Soon"
      description="This project is a placeholder for future projects that have not been created yet. "
      imageUrl="./src/assets/coming-soon.png"
      projectLink="https://google.com/project"
      repoLink="https://github.com/victoriamata"
    />
    </div>
    </div>
  </section>
);

export default Projects;

