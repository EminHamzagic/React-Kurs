import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
// import Hangman from "./components/Hangman.js";
import "./index.css";
import ToDo from "./ToDo/ToDo.js";
import { Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <div className="container">
      <Route />
    </div>
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);
