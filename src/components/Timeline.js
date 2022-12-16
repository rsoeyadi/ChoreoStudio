import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Timeline = ({ length }) => {
  length = length + "px";
  return (
    <div
      style={{
        backgroundColor: "#A0A0A0",
        width: "50px",
        height: `${length}`,
        margin: "0 auto",
      }}
    ></div>
  );
};

export default Timeline;
