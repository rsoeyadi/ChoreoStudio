import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TabWrapper = styled.div`
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  justify-items: center;

  p {
    margin-top: 0.3em;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Tab = ({ svg, altTag, title }) => {
  return (
    <Link to={`/${title}`} style={linkStyle}>
      <TabWrapper>
        <img src={svg} alt={altTag} />
        <p>{title}</p>
      </TabWrapper>
    </Link>
  );
};

export default Tab;
