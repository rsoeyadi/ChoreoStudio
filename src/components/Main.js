import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Main = () => {
  return (
    <Routes>
      {/* The Routes tag decides which component to show based on the current URL.*/}
      <Route path='home' element={<Home />}></Route>
    </Routes>
  );
};

export default Main;
