import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="ProjectCard">
      <a href={props.project.website} target="_blank" rel="noreferrer">
        <h3>{props.project.name}</h3>
        <p>{props.project.technologies}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
