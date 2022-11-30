import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IconAndTitleVertical = ({
    svg,
    altTag,
    title,
    link,
}) => {
    return (
      <>
        <Link
          to={link}
          style={{
            textDecoration: "none",
          }}
        >
          <img src={svg} alt={altTag} style={{
            display: "inline-block",
          }}/>
          <h1
            style={{
              fontSize: "1.5em",
              textDecoration: "none",
              /* get rid of underline */
              color: "black",
            }}
          >
            {title}
          </h1>
        </Link>
      </>
    );
    }

export default IconAndTitleVertical;