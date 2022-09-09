import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import ToDo from "./ToDo/ToDo.js";
import Hangman from "./components/Hangman.js";
import Calculator from "./components/Calculator";
import { Route } from "react-router-dom";
import XO from "./components/XO";
import ThemeContext from "./Contexts/ThemeContext";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <Header handleChange={changeTheme} />
      <div className="container">
        <ThemeContext.Provider value={theme}>
          <Route
            path="/"
            exact
            render={(props) => <ToDo {...props} theme={theme} />}
          />
          <Route
            path="/calculator"
            render={(props) => <Calculator {...props} theme={theme} />}
          />
          <Route
            path="/xo"
            render={(props) => <XO {...props} theme={theme} />}
          />
          <Route
            path="/hangman"
            render={(props) => <Hangman {...props} theme={theme} />}
          />
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}
