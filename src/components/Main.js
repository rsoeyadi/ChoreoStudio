import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Inspiration from "../pages/Inspiration";

const Main = () => {
  return (
    <Routes>
      {/* The Routes tag decides which component to show based on the current URL.*/}
      <Route path='/' element={<Index />}></Route>
      <Route path='projects' element={<Index />}></Route>
      <Route path='inspiration' element={<Inspiration />}></Route>
    </Routes>
  );
};

export default Main;
