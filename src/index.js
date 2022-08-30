import React from "react";
import ReactDOM from "react-dom/client";
// import Hangman from "./components/Hangman.js";
import "./index.css";
import ToDo from "./ToDo/ToDo.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ToDo />
  // </React.StrictMode>
);
