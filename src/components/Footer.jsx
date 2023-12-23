import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="w-full h-[200px] bg-blue-950 text-white flex flex-col justify-center items-center pt-3 ">
      <div>
        <a
          href="https://github.com/uniyall"
          target="_blank"
          rel="noopener noreferrer"
          className="m-[20px] text-5xl text-white"
        >
          <GitHubIcon fontSize="inherit"/>
        </a>
        <a
          href="https://www.linkedin.com/in/prateekuniyal/"
          target="_blank"
          rel="noopener noreferrer"
          className="m-[20px] text-5xl text-white"
        >
          <LinkedInIcon fontSize="inherit"/>
        </a>
      </div>
      <div>
        <p className="mt-[10px]">Made with ❤️ by Prateek Uniyal</p>
      </div>
    </div>
  );
}

export default Footer;
