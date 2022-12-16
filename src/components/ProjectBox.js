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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ProjectBox = ({ title, lengthInSeconds, deleteProject }) => {
  return (
    <div>
      <Box>
        {/*
          The two links to /${title} are so users can click anywhere on the box except the edit/delete icons to go to the project page.
          X X X X X O
          X X X X X X
          X X X X X X
          X X X X X X
          X X X X X X
          X X X X X O
      */}
        <Link
          to={`/${title}`}
          style={{
            gridColumn: "1/6",
            gridRow: "1/7",
          }}
          state={{
            title: { title },
            lengthInSeconds: { lengthInSeconds },
          }}
        ></Link>
        <Link
          to={`/${title}`}
          style={{
            gridColumnStart: "6",
            gridRow: "2/6",
          }}
          state={{
            title: { title },
            lengthInSeconds: { lengthInSeconds },
          }}
        ></Link>
        <Link
          to="/edit"
          style={{
            gridColumnStart: "6",
          }}
          state={{
            title: { title },
            lengthInSeconds: { lengthInSeconds },
          }}
        >
          <img src={editIcon} alt="edit icon" />
        </Link>

        <div
          style={{
            gridColumnStart: "6",
            gridRowStart: "6",
          }}
        >
          <img
            src={deleteIcon}
            alt="delete icon"
            onClick={() => deleteProject(title)}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </Box>
      <Link
        to={`/${title}`}
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "#868686",
          marginTop: "0.5em",
        }}
        state={{
          title: { title },
          lengthInSeconds: { lengthInSeconds },
        }}
      >
        {title}
      </Link>
    </div>
  );
};

export default ProjectBox;
