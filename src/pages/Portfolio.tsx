import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => (
  <section>
    <h2 className="project-heading">Projects</h2>
    <div className="card-container">
      <div className="project-card">
        <ProjectCard
          title="CoolShirts Store"
          description="I collaborated with a group to create this website using HTML, CSS, and JavaScript. This was our first project. "
          imageUrl="./assets/coolshirts.png"
          projectLink="https://chandlerrobinson.github.io/Project-1/"
          repoLink="https://github.com/ChandlerRobinson/Project-1"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Focus Flow"
          description="This deployed website is a full stack MERN application that uses JWT authentication for a login. "
          imageUrl="./assets/dailyweather.png"
          projectLink="https://google.com/project"
          repoLink="https://github.com/jacobmidd1996/FocusFlow"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Nessa's Kitchen"
          description="This was built for my mother's new catering service. It features links to social media, a menu, and a contact form that works. It was made using React.js "
          imageUrl="./assets/coming-soon.png"
          projectLink="https://example.com/project"
          repoLink="https://github.com/victoriamata/NessasKitchen"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Coming Soon"
          description="This project is a placeholder for future projects that have not been created yet. "
          imageUrl="./assets/coming-soon.png"
          projectLink="https://google.com/project"
          repoLink="https://github.com/victoriamata"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Coming Soon"
          description="This project is a placeholder for future projects that have not been created yet. "
          imageUrl="./assets/coming-soon.png"
          projectLink="https://google.com/project"
          repoLink="https://github.com/victoriamata"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Coming Soon"
          description="This project is a placeholder for future projects that have not been created yet. "
          imageUrl="./assets/coming-soon.png"
          projectLink="https://google.com/project"
          repoLink="https://github.com/victoriamata"
        />
      </div>
    </div>
  </section>
);

export default Projects;
