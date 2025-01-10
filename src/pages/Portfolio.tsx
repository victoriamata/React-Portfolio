import React from "react";
import ProjectCard from "../components/ProjectCard";

const Menu: React.FC = () => (
  <section>
    <h2 className="project-heading"> Projects</h2>
      <div className="card-container">
          <ProjectCard
            title="Nessa's Kitchen"
            description="Built for my mom's catering business, using React TypeScript."
            imageUrl="./assets/nessaskitchen.png"
            projectLink="https://nessaskitchen.netlify.app/"
            repoLink="https://github.com/victoriamata/NessasKitchen"
          />
          <ProjectCard
            title="Focus Flow"
            description="Full Stack MERN group application with JWT Authentication. "
            imageUrl="./assets/focusflow.png"
            projectLink="https://focusflow-sr9k.onrender.com/"
            repoLink="https://github.com/jacobmidd1996/FocusFlow"
          />
          <ProjectCard
            title="CoolShirts Store"
            description="First group project using onlu HTML, CSS, and JavaScript."
            imageUrl="./assets/coolshirts.png"
            projectLink="https://chandlerrobinson.github.io/Project-1/"
            repoLink="https://github.com/ChandlerRobinson/Project-1"
          />
          <ProjectCard
            title="Social Network"
            description="Back end MongoDB application."
            imageUrl="./assets/socialnetwork.png"
            projectLink="https://github.com/victoriamata"
            repoLink="https://github.com/victoriamata/SocialNetwork"
          />
          <ProjectCard
            title="Employee Tracker"
            description="Back end postgreSQL application."
            imageUrl="./assets/employeetracker.png"
            projectLink="https://github.com/victoriamata"
            repoLink="https://github.com/victoriamata/Employee-Tracker"
          />
 </div>
  </section>
);

export default Menu;
