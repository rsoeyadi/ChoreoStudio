import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Wrapper from "../components/layout/Wrapper";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import Timeline from "../components/Timeline";

const DanceClassF22 = () => {
  const location = useLocation();
  const { title } = location.state.title;
  const { lengthInSeconds } = location.state.lengthInSeconds;
  return (
    <>
      <HeaderAndFooter
        pageTitle={title}
        activeTab="projects"
        prevPage={title}
      />
      {/* place content in the body prop */}
      <Wrapper body={<Timeline length={lengthInSeconds} pageTitle={title} />} />
    </>
  );
};

export default DanceClassF22;
