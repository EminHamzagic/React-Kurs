import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./components/Calculator";
import XO from "./components/XO";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <XO />
  </React.StrictMode>
);

reportWebVitals();
