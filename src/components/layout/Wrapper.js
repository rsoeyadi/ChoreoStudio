import React from "react";
import styled from "styled-components";
import "../../style/app.css";

const MarginWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 120px;
`;

function Wrapper({ body }) {
  return <MarginWrapper>{body}</MarginWrapper>;
}

export default Wrapper;
