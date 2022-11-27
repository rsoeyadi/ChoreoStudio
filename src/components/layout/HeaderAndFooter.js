import React from "react";
import "../../style/app.css";
import Navbar from "../Navbar";
import Header from "../Header";

function HeaderAndFooter({ pageTitle, activeTab }) {
  return (
    <>
      <Header title={pageTitle} />
      <Navbar activeTab={activeTab} />
    </>
  );
}

export default HeaderAndFooter;
