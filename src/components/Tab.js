import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ActiveTabOverlay = styled.div`
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: white;
  border-radius: 1em;
  max-width: 100px;
  max-height: 50px;
  z-index: -1;
  background-color: white;
`;

const tabStyle = {
  textDecoration: "none",
  color: "black",
  textTransform: "capitalize",
  display: "grid",
  justifyItems: "center",
  alignItems: "center",  
};



const Tab = ({ svg, altTag, title, isActiveTab }) => {
  return (
    <>
      <Link to={`/${title}`} style={tabStyle}>
        {isActiveTab && <ActiveTabOverlay />}
        <img src={svg} alt={altTag} />
        <p>{title}</p>
      </Link>
    </>
  );
};

export default Tab;
