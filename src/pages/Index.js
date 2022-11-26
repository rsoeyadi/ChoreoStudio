import React from "react";
import "../style/app.css";
import HeaderAndFooter from "../components/layout/HeaderAndFooter";
import Wrapper from "../components/layout/Wrapper";

function Home() {
  return (
    <>
      <HeaderAndFooter pageTitle="Home" />
      {/* place content in the body prop */}
      <Wrapper
        body={
          <>
            <h1>home page content</h1>
          </>
        }
      />
    </>
  );
}

export default Home;
