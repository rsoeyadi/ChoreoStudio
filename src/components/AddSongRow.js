import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import playButtonSvg from "../assets/svgs/play.svg";

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

const AddSongRow = ({ SongName, ArtistName }) => {

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "62px",
        border: "solid 0.5px #D0D0D0",
        borderRadius: "10px",
        backgroundColor: isActive ? "#F0F0F0" : '',
      }}
      onClick={handleClick}
    >
      <GridElement>
        <img src={playButtonSvg} alt="Play Button Icon" />
      </GridElement>
      <GridElement
        style={{
          gridColumn: "2 / span 3",
          fontStyle: "italic",
        }}
      >
        {SongName} - {ArtistName}
      </GridElement>
      <GridElement
        style={{
          gridColumn: "8",
        }}
      >
        <div style={circleStyle}></div>
      </GridElement>
    </div>
  );
};

export default AddSongRow;
