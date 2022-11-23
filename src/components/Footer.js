import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import projectsSvg from "../assets/svgs/projects.svg";
import inspirationSvg from "../assets/svgs/inspiration.svg";
import allFilesSvg from "../assets/svgs/files.svg";
import settingsSvg from "../assets/svgs/settings.svg";

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 70px;
  background-color: #d9d9d9;
  padding-top: 10px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Tab svg={projectsSvg} altTag="projects icon" title="projects" />
      <Tab svg={inspirationSvg} altTag="inspiration icon" title="inspiration" />
      <Tab svg={allFilesSvg} altTag="all files icon" title="all files" />
      <Tab svg={settingsSvg} altTag="settings icon" title="settings" />
    </FooterWrapper>
  );
};

export default Footer;
