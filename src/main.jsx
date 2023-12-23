import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="projects" element={<Projects />}></Route>
      <Route path='project/:id' element={<ProjectDisplay/>}></Route>
      <Route path="experience" element={<Experience />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
