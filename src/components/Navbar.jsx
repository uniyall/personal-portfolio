import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsClicked();
  }, [location]);
  return (
    <div
      className={`w-full bg-blue-950 ${isClicked ? "h-screen" : "h-[100px]"}`}
    >
      <div className="toggleButton h-[100px] flex flex-row items-center justify-end sm:hidden">
        {/* //toDo : align SVG in the NavBar */}
        <button
          className="toggleButton bg-transparent border-none text-white sm:hidden"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <ReorderIcon color='inherit'/>
        </button>
      </div>
      <div
        className={`${
          isClicked
            ? "h-full flex flex-col items-center justify-start mt-[100px] text-white "
            : "hidden sm:flex sm:flex-row sm:text-white sm:flex-grow sm:justify-center sm:items-center sm:h-full "
        }}`}
      >
        <Link
          to="."
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-2xl`}
        >
          Home
        </Link>
        <Link
          to="projects"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-2xl`}
        >
          Projects
        </Link>
        <Link
          to="experience"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-2xl`}
        >
          Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
