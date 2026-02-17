import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  imagePosition?: "left" | "right";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  imagePosition = "right",
}) => {
  return (
    <div className={`project-card ${imagePosition === "left" ? "reverse" : ""}`}>
      <div className="project-text">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>

        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <button className="project-button">View on GitHub</button>
        </a>
      </div>

      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>

    </div>
  );
};

export default ProjectCard;
