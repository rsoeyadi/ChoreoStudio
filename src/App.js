import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./style/app.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="My Projects"/>
      <Navbar />
    </div>
  );
}

export default App;
