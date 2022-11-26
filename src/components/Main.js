import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";

const Main = () => {
  return (
    <Routes>
      {/* The Routes tag decides which component to show based on the current URL.*/}
      <Route path='/' element={<Index />}></Route>
    </Routes>
  );
};

export default Main;
