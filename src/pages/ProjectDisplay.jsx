import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectList } from "../helpers/projectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="flex flex-col items-center my-[100px]">
      <div className="mb-5 text-3xl sm:text-6xl font-bold text-blue-950 w-4/5 text-center">
        {project.name}
      </div>
      <div className="mb-5">
        {project.image === "wip" ? (
          <div className="w-[300px] h-[240px] bg-gradient-to-r from-cyan-500 to-blue-500" />
        ) : (
          <img
            className="w-[300px] h-[240px] object-cover"
            src={`${project.image}`}
            alt=""
          />
        )}
      </div>
      <div className="text-lg text-center w-4/5">
        <span className="font-bold">Skills :</span>
        {` ${project.skills}`}
      </div>
      <div className="flex mt-3 flex-row text-4xl ">
        <a
          href={`${project.links.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-black"
        >
          <GitHubIcon className="mx-3" fontSize="inherit" />
        </a>
        <a
          href={`${project.links.livelink}`}
        //   target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-black"
        >
          <LaunchIcon className="mx-3" fontSize="inherit" />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
