import React from "react";
import { Footer } from "../components/Footer";
import { FooterDown } from "../components/FooterDown";
import { Headers } from "../components/Headers";
import { Main } from "../components/Main";

import "./styles.css";

export const App = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="sidebar">
          <Headers />
        </div>
        <div className="main">
          <Main />
          <div className="menudown">
            <Footer />
          </div>
        </div>
      </div>
      <FooterDown />
    </div>
  );
};
