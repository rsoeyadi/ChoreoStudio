import React from "react";
import styled from "styled-components";
import addIconSvg from "../assets/svgs/addicon.svg";

const Box = styled.div`
  /* 3x3 grid to center add icon */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  min-width: 120px;
  min-height: 120px;
  max-width: 140px;
  max-height: 140px;
  background-color: white;
  border: 1px solid #868686;
`;

const NewProjectBox = () => {
  return (
    <Box> {/* no link since this won't do anything in reality */}
      <img src={addIconSvg} alt="add icon" style={{
        gridColumnStart: "2",
        gridRowStart: "2",
      }}/>
    </Box>
  );
};

export default NewProjectBox;
