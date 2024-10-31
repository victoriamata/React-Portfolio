import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => (
  <div className="project-card">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default ProjectCard;