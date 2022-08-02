import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import SearchInput from "./components-domaci/searchInput";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components-domaci/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
