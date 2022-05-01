import React from "react";
import { Buttons } from "../components/Buttons";
import { Footer } from "../components/Footer";
import { FooterDown } from "../components/FooterDown";
import { Headers } from "../components/Headers";
import { Main } from "../components/Main";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Headers />
      <Buttons />
      <Main />
      <Footer />
      <FooterDown />
    </div>
  );
};
