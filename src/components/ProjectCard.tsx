import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className = "project-links">
    <a href={link} target="_blank"><img src={imageUrl} className="project-image"/></a>
    </div>
  </div>
);

export default ProjectCard;
