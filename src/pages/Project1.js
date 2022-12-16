import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IconAndTitleVertical from "../components/IconAndTitleVertical";
import Wrapper from "../components/layout/Wrapper";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";

const Project1 = () => {
  const location = useLocation();
  const {title} = location.state.title;
  const {lengthInSeconds} = location.state.lengthInSeconds;
  return (
    <>
      <HeaderAndFooter pageTitle={title} activeTab="projects" />
      {/* place content in the body prop */}
      <Wrapper
        body={
          <div>
            {lengthInSeconds}
          </div>
        }
      />
    </>
  );
};

export default Project1;
