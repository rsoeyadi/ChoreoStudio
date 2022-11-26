import React from "react";
import "../../style/app.css";
import Navbar from "../Navbar";
import Header from "../Header";

function Layout({ pageTitle }) {
  return (
    <>
      <Header title={ pageTitle }/>
      <Navbar />
    </>
  );
}

export default Layout;