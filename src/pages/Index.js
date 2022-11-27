import React from "react";
import "../style/app.css";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import Wrapper from "../components/layout/Wrapper";
import ProjectBox from "../components/ProjectBox";
import styled from "styled-components";

const ProjectBoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-row-gap: 5em;
  grid-column-gap: 2em;
  width: 100%;
  height: 100%;
  padding: 1em;
`;

function Home() {
  return (
    <>
      <HeaderAndFooter pageTitle="my projects" activeTab="projects" />
      {/* place content in the body prop */}
      <Wrapper
        body={
          <ProjectBoxGrid>
            <ProjectBox title="Project 1" />
            <ProjectBox title="Dance Class F22" />
            <ProjectBox title="Ballet II Solo" />
          </ProjectBoxGrid>
        }
      />
    </>
  );
}

export default Home;
