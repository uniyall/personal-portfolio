import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/projectList";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl text-blue-950 pt-[40px]">My Personal Projects</h1>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:flex-wrap">
        {projectList.map((project, index) => {
          return (
            <Link to={`/project/${index}`} className="no-underline text-black">
              <ProjectItem name={project.name} image={project.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
