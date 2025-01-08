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
          description="This deployed website, created with a group, is a full stack MERN application that uses JWT authentication for a login. "
          imageUrl="./assets/focusflow.png"
          projectLink="https://focusflow-sr9k.onrender.com/"
          repoLink="https://github.com/jacobmidd1996/FocusFlow"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Nessa's Kitchen"
          description="This was built for my mother's new catering service. It features links to social media, a menu, and a contact form that works. It was made using React.js "
          imageUrl="./assets/nessaskitchen.png"
          projectLink="https://nessaskitchen.netlify.app/"
          repoLink="https://github.com/victoriamata/NessasKitchen"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Social Network"
          description="This Social Networking application enables users to add/remove friends, share thoughts, as well as react to eachothers thoughts. You can create and delete users. This backend application was built from scratch using the following technologies: MongoDB, Express, and Mongoose ODM. "
          imageUrl="./assets/socialnetwork.png"
          projectLink="https://github.com/victoriamata"
          repoLink="https://github.com/victoriamata/SocialNetwork"
        />
      </div>
      <div className="project-card">
        <ProjectCard
          title="Employee Tracker"
          description="Employee-Tracker is a command line application, built from scratch, that uses the Inquirer package to ask the user questions and PostgreSQL to interact with a database. Node JS is used to run CLI outside of a web browser. "
          imageUrl="./assets/employeetracker.png"
          projectLink="https://github.com/victoriamata"
          repoLink="https://github.com/victoriamata/Employee-Tracker"
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
