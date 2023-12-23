import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Home() {
  return (
    <div className="w-full mb-10">
      <div className="bg-blue-950 w-full h-[calc(100vh-100px)] text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-7xl mb-0 font-bold text-yellow-400 text-center">
          Hi, My Name is Prateek
        </h1>
        <div className="w-4/5 flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl mb-3 font-normal text-center">
            A passionate web developer in the making!
          </h2>
          <div>
            <a
              href="https://www.linkedin.com/in/prateekuniyal/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-[5px] text-5xl text-white"
            >
              <LinkedInIcon fontSize="inherit"/>
            </a>
            <a
              href="https://github.com/uniyall"
              target="_blank"
              rel="noopener noreferrer"
              className="m-[5px] text-5xl text-white"
            >
              <GitHubIcon fontSize="inherit" />
            </a>
            <a
              href="mailto:prateekkuniyal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="m-[5px] text-5xl text-white"
            >
              <EmailIcon fontSize="inherit" />
            </a>
          </div>
        </div>
      </div>
      <div className="skills flex flex-col items-center">
        <div className="w-11/12 sm:w-9/12 flex flex-col items-center">
          <h1 className="text-5xl font-bold  text-blue-950 my-10">Skills</h1>
          <span className="text-lg sm:text-xl text-center text-blue-950">
            ReactJS, NodeJS, ExpressJS, MongoDB, AWS, Javascript, Typescript,
            HTML, CSS, Redux, NPM, Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
