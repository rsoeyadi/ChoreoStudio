import React from "react";
import styled from "styled-components";
import logoSvg from "../assets/svgs/logo.svg";
import settingsIcon from "../assets/svgs/settingsicon.svg";
import { Link } from "react-router-dom";
const HeaderWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100px;
  background-color: #d9d9d9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  text-align: center;
  padding-top: 20px;

  img {
    margin: 0 auto;
  }
  
  h1 {
    font-size: 1.2em;
    text-transform: uppercase;
    display: inline-block;
  }
`;

const Header = ({ title, prevPage }) => {
  return (
    <HeaderWrapper>
      <img src={logoSvg} alt="ChoreoStudio Logo"></img>
      <h1>{title}</h1>
      <Link to="/settings">
        <img
          src={settingsIcon}
          style={{
            position: "absolute",
            right: "0",
            marginTop: "-2em",
            marginRight: "1em",
          }}
        />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
