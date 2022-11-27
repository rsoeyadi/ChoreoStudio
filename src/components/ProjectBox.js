import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EditIcon from "./EditIcon";

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-width: 120px;
  min-height: 120px;
  max-width: 140px;
  max-height: 140px;
  background-color: white;
  border: 1px solid #868686;
`;

const ProjectBox = ({ title }) => {
  return (
    <Link
      to={`/${title}`}
      style={{
        textDecoration: "none",
        textTransform: "uppercase",
        color: "#868686",
      }}
    >
      <Box>
        <EditIcon />
      </Box>
      <p style={{
        marginTop: "0.5em",
      }}>{title}</p>
    </Link>
  );
};

export default ProjectBox;
