import React from "react";
import styled from "styled-components";
import MoodboardsBox from "./MoodboardsBox";

const HorizontalMoodboardsRow = ({ title1, title2, title3, title4 }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridColumnGap: "10px",
      }}
    >
      <MoodboardsBox title={title1} />
      <MoodboardsBox title={title2} />
      <MoodboardsBox title={title3} />
      <MoodboardsBox title={title4} />
    </div>
  );
};

export default HorizontalMoodboardsRow;
