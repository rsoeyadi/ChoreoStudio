import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import projectsSvg from "../assets/svgs/projects.svg";
import inspirationSvg from "../assets/svgs/inspiration.svg";
import allFilesSvg from "../assets/svgs/files.svg";
import settingsSvg from "../assets/svgs/settings.svg";
import { BrowserRouter } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 60px;
  background-color: #d9d9d9;
  padding-top: 10px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Navbar = () => {
  return (
    <BrowserRouter>
      {/* BrowserRouter is compulsory for Link tags */}
      <NavbarWrapper>
        <Tab svg={projectsSvg} altTag="projects icon" title="projects" />
        <Tab
          svg={inspirationSvg}
          altTag="inspiration icon"
          title="inspiration"
        />
        <Tab svg={allFilesSvg} altTag="all files icon" title="all files" />
        <Tab svg={settingsSvg} altTag="settings icon" title="settings" />
      </NavbarWrapper>
    </BrowserRouter>
  );
};

export default Navbar;
