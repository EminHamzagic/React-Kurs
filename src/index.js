import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card />
    <Card />
    <Card />
  </React.StrictMode>
);

reportWebVitals();
