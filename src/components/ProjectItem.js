import React from "react";

function ProjectItem( { project_aaa: {id, name, about, technologies }} ) {
  return (
    <div  className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology) => (<span key={technology}>{technology}</span>))}
      </div>
    </div>
  );
}

export default ProjectItem;
