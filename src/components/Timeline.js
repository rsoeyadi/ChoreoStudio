import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import addMusicSvg from "../assets/svgs/add-music.svg";
const Timeline = ({ length }) => {
  length = length + "px";
  return (
    <div
      style={{
        backgroundColor: "#A0A0A0",
        width: "50px",
        height: `${length}`,
        margin: "8em auto 0",
        borderRadius: "10px",
      }}
    >
      <Link to="/add music">
        <img
          src={addMusicSvg}
          alt="Add music button"
          style={{
            margin: "0 auto",
            paddingTop: "10px",
          }}
        />
      </Link>
    </div>
  );
};

export default Timeline;
