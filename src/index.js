import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
// import Hangman from "./components/Hangman.js";
import "./index.css";
import ToDo from "./ToDo/ToDo.js";
import Hangman from "./components/Hangman.js";
import Calculator from "./components/Calculator";
import { Route } from "react-router-dom";
import XO from "./components/XO";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <div className="container">
      <Route path="/" exact component={ToDo} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/xo" component={XO} />
      <Route path="/hangman" component={Hangman} />
    </div>
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);
