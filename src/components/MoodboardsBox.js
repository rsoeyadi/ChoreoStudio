import React from "react";
import styled from "styled-components";

const MoodboardsBox = ({ title }) => {
  return (
    <div
      style={{
        border: "solid #868686 1px",
        width: "125px",
        height: "125px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </div>
  );
};

export default MoodboardsBox;
