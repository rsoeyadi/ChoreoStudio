import React from "react";
import styled from "styled-components";
import logoSvg from "../assets/svgs/logo.svg";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color: #d9d9d9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  text-align: center;
  padding-top: 20px;

  h1 {
    font-size: 1.2em;
    text-transform: uppercase;
  }
`;

const Header = ({ title, prevPage }) => {
  return (
    <HeaderWrapper>
        <img src={logoSvg}></img>
        <h1>{title}</h1>
    </HeaderWrapper>
  );
};

export default Header;
