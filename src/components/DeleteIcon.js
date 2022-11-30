import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../assets/svgs/deleteicon.svg";

const DeleteIcon = () => {
  return (
    <>
      <img src={deleteIcon} alt="delete icon"/>
    </>
  );
};

export default DeleteIcon;