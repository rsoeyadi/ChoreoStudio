import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  justify-items: center;
`;
const Tab = ({ svg, altTag, title }) => {
  return (
    <TabWrapper>
      <img src={svg} alt={altTag} />
      <p>{title}</p>
    </TabWrapper>
  );
};

export default Tab;
