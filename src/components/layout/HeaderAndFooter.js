import React from "react";
import "../../style/app.css";
import Navbar from "../Navbar";
import Header from "../Header";

function HeaderAndFooter({ pageTitle, activeTab, prevPage }) {
  return (
    <>
      <Header title={pageTitle} prevPage={prevPage} />
      <Navbar activeTab={activeTab} />
    </>
  );
}

export default HeaderAndFooter;
