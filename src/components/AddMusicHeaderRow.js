import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import chevronLeftSvg from "../assets/svgs/chevron-left.svg";
import checkSvg from "../assets/svgs/check.svg";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "62px",
  border: "solid 0.5px #D0D0D0",
  borderRadius: "10px",
  backgroundColor: "#F3F3F3",
};

const GridElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const circleStyle = {
  border: "2px solid white",
  borderRadius: "50%",
  borderColor: "black",
  color: "white",
  height: "12px",
  width: "12px",
};

const AddMusicHeaderRow = ({ SongName, ArtistName }) => {
  return (
    <div style={style}>
      <GridElement>
        <img src={chevronLeftSvg} alt="Back button Icon" />
      </GridElement>
      <GridElement
        style={{
          gridColumn: "2 / span 4",
          fontStyle: "italic",
        }}
      >
        Music Library
      </GridElement>
      <GridElement>
        <img src={checkSvg} alt="Confirm Music Selection Icon" />
      </GridElement>
    </div>
  );
};

export default AddMusicHeaderRow;
