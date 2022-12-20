import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IconAndTitleVertical from "../components/IconAndTitleVertical";
import Wrapper from "../components/layout/Wrapper";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import HorizontalMoodboardsRow from "../components/HorizontalMoodboardsRow";

const HorizontalMoodboardsRowTitle = styled.h1`
  font-size: 15px;
  font-weight: 700;
`;

const Row = styled.div`
  margin-bottom: 1em;
`;
const Moodboards = () => {
  return (
    <div>
      <HeaderAndFooter
        pageTitle="my moodboards"
        activeTab="inspiration"
        prevPage="inspiration"
      />
      {/* place content in the body prop */}
      <Wrapper
        body={
          <div>
            <Row>
              <HorizontalMoodboardsRowTitle>Moods</HorizontalMoodboardsRowTitle>
              <HorizontalMoodboardsRow
                title1="Dramatic"
                title2="Happy"
                title3="Sad"
                title4="Chill"
              />
            </Row>
            <Row>
              <HorizontalMoodboardsRowTitle>
                Dance Styles
              </HorizontalMoodboardsRowTitle>
              <HorizontalMoodboardsRow
                title1="Ballet"
                title2="Modern"
                title3="Contemp."
                title4="Hip Hop"
              />
            </Row>
            <Row>
              <HorizontalMoodboardsRowTitle>
                Step Types
              </HorizontalMoodboardsRowTitle>
              <HorizontalMoodboardsRow
                title1="Jumps"
                title2="Floor"
                title3="Arms"
                title4="Static"
              />
            </Row>
            <Row>
              <HorizontalMoodboardsRowTitle>
                Music Styles
              </HorizontalMoodboardsRowTitle>
              <HorizontalMoodboardsRow
                title1="Jazz"
                title2="Slow"
                title3="Rock"
                title4="Funk"
              />
            </Row>
          </div>
        }
      />
    </div>
  );
};

export default Moodboards;
