import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import editIcon from "../assets/svgs/editicon.svg";
import deleteIcon from "../assets/svgs/deleteicon.svg";

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-width: 120px;
  min-height: 120px;
  max-width: 140px;
  max-height: 140px;
  background-color: white;
  border: 1px solid #868686;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
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
        <Link
          to="/edit"
          style={{
            gridColumnStart: "7",
          }}
        >
          <img src={editIcon} alt="edit icon" />
        </Link>
        <Link
          to="/delete"
          style={{
            gridColumnStart: "7",
            gridRowStart: "7",
          }}
        >
          <img src={deleteIcon} alt="edit icon" />
        </Link>
      </Box>
      <p
        style={{
          marginTop: "0.5em",
        }}
      >
        {title}
      </p>
    </Link>
  );
};

export default ProjectBox;
