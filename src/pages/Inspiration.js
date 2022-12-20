import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconAndTitleVertical from "../components/IconAndTitleVertical";
import Wrapper from "../components/layout/Wrapper";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import moodboardSvg from "../assets/svgs/moodboardicon.svg";
import exploreSvg from "../assets/svgs/exploreicon.svg";

const Inspiration = () => {
  return (
    <>
      <HeaderAndFooter pageTitle="inspiration" activeTab="inspiration" />
      {/* place content in the body prop */}
      <Wrapper
        body={
          <div
            style={{
              textAlign: "center",
              display: "grid",
              gridRowGap: "3em",
              paddingTop: "3em",
            }}
          >
              <IconAndTitleVertical
                svg={moodboardSvg}
                altTag="Moodboard Icon"
                title="My moodboards"
                link="/moodboards"
              />
            <IconAndTitleVertical
              svg={exploreSvg}
              altTag="Explore ideas Icon"
              title="Explore ideas"
              link=""
            />
          </div>
        }
      />
    </>
  );
};

export default Inspiration;
