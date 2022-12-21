import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import addSvg from "../assets/svgs/add.svg";

const NewCollectionButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "150px",
        border: "1px solid #868686",
        borderRadius: "5px",
        marginTop: "7em",
      }}
    >
      <img src={addSvg} alt="add collection button" />
      <h2
        style={{
          fontSize: "13px",
        }}
      >
        Add new collection
      </h2>
    </div>
  );
};

export default NewCollectionButton;
