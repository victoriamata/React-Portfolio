import React from 'react';
import { FaGithub } from 'react-icons/fa'; 

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink, repoLink }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="links">
      {/* Link to project (image) */}
      <a href={projectLink} target="_blank">
        <img src={imageUrl} alt={title} className="project-image" />
      </a>

      {/* Link to repository (icon) */}
      <a href={repoLink} target="_blank" className="icon-link">
        <FaGithub size={24} />
      </a>
    </div>
  </div>
);

export default ProjectCard;
