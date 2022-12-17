import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import Timeline from "../components/Timeline";
import AddSongRow from "../components/AddSongRow";
import Wrapper from "../components/layout/Wrapper";

const AddMusicGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;
const AddMusic = ({ pageTitle }) => {
  const location = useLocation();
  const { from } = location.state;
  
  return (
    <>
      <HeaderAndFooter pageTitle={from.pageTitle} activeTab="projects" />
      <Wrapper
        body={
          <AddMusicGrid>
            <AddSongRow />
            <AddSongRow />
            <AddSongRow />
            <AddSongRow />
          </AddMusicGrid>
        }
      ></Wrapper>
    </>
  );
};

export default AddMusic;
