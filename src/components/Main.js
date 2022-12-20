import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Inspiration from "../pages/Inspiration";
import Project1 from "../pages/Project1"
import BalletISolo from "../pages/BalletISolo"
import DanceClassF22 from "../pages/DanceClassF22";
import AddMusic from "../pages/AddMusic";
import Moodboards from "../pages/Moodboards";

const Main = () => {
  return (
    <Routes>
      {/* The Routes tag decides which component to show based on the current URL.*/}
      <Route path="/" element={<Index />}></Route>
      <Route path="projects" element={<Index />}></Route>
      <Route path="inspiration" element={<Inspiration />}></Route>
      <Route path="project 1" element={<Project1 />}></Route>
      <Route path="Dance Class F22" element={<DanceClassF22 />}></Route>
      <Route path="Ballet I Solo" element={<BalletISolo />}></Route>
      <Route path="add music" element={<AddMusic />}></Route>
      <Route path="moodboards" element={<Moodboards />}></Route>
    </Routes>
  );
};

export default Main;
