import React from "react";
import "../style/app.css";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import Wrapper from "../components/layout/Wrapper";
import ProjectBox from "../components/ProjectBox";
import styled from "styled-components";
import NewProjectBox from "../components/NewProjectBox";

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
  const [projects, setProjects] = React.useState([
    {
      title: "Project 1",
    },
    {
      title: "Dance Class F22",
    },
    {
      title: "Ballet I Solo",
    },
  ]);

  const addProject = (title) => {
    const newProjects = [...projects, { title }];
    setProjects(newProjects);
  };

  const deleteProject = (title) => {
    /* this is a filter method that returns a new array with all the elements that pass the test implemented by the provided function. */
    const newProjects = projects.filter((project) => project.title !== title);
    setProjects(newProjects);
  };

  return (
    <>
      <HeaderAndFooter pageTitle="my projects" activeTab="projects" />
      {/* place content in the body prop */}
      <Wrapper
        body={
          <ProjectBoxGrid>
            {projects.map((project) => (
              <ProjectBox title={project.title} deleteProject={deleteProject} />
            ))}
            <NewProjectBox />
          </ProjectBoxGrid>
        }
      />
    </>
  );
}

export default Home;
