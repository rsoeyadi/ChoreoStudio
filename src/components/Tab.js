import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TabWrapper = styled.div`
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  justify-items: center;
  align-items: center;
  height: 60%;

  p {
    margin-top: 0.2em;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Tab = ({ svg, altTag, title, isActiveTab }) => {
  return (
    <Link to={`/${title}`} style={linkStyle}>
      <TabWrapper
        style={{
          backgroundColor: isActiveTab ? "white" : "#d9d9d9",
          borderRadius: isActiveTab ? "15px" : "0px",
        }}
      >
        <img src={svg} alt={altTag} />
        <p>{title}</p>
      </TabWrapper>
    </Link>
  );
};

export default Tab;
