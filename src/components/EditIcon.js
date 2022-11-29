import React from "react";
import { Link } from "react-router-dom";
import editIconSvg from "../assets/svgs/editicon.svg";

const EditIcon = () => {
  return (
    <Link to="/edit">
      <img src={editIconSvg} alt="edit icon" style={{
       float: "right",
      }}/>
    </Link>
  );
};

export default EditIcon;