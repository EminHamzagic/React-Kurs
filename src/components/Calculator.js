import { useState } from "react";
import "../css/calculator.css";
import ThemeContext from "../Contexts/ThemeContext";
import { useContext } from "react";

export default function Calculator() {
  const [expression, setExpression] = useState("");

  const theme = useContext(ThemeContext);

  const operations = "+-*/.";

  const changeScreen = (value) => {
    setExpression((prev) => {
      return prev + value;
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme ? "rgb(17,17,17)" : "white",
      }}
    >
      <div className="calcContainer">
        <div className="screen">{expression}</div>
        <button
          id="del"
          className="btn"
          onClick={(e) => {
            if (expression !== "") {
              setExpression((prev) => {
                return prev.slice(0, prev.length - 1);
              });
            }
          }}
        >
          del
        </button>
        <button
          id="7"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          7
        </button>
        <button
          id="8"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          8
        </button>
        <button
          id="9"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          9
        </button>
        <button
          id="+"
          className="btn"
          onClick={(e) => {
            if (!operations.includes(expression[expression.length - 1]))
              changeScreen(e.target.id);
          }}
        >
          +
        </button>
        <button
          id="4"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          4
        </button>
        <button
          id="5"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          5
        </button>
        <button
          id="6"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          6
        </button>
        <button
          id="-"
          className="btn"
          onClick={(e) => {
            if (!operations.includes(expression[expression.length - 1]))
              changeScreen(e.target.id);
          }}
        >
          -
        </button>
        <button
          id="1"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          1
        </button>
        <button
          id="2"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          2
        </button>
        <button
          id="3"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          3
        </button>
        <button
          id="*"
          className="btn"
          onClick={(e) => {
            if (!operations.includes(expression[expression.length - 1]))
              changeScreen(e.target.id);
          }}
        >
          *
        </button>
        <button
          id="."
          className="btn"
          onClick={(e) => {
            if (!operations.includes(expression[expression.length - 1]))
              changeScreen(e.target.id);
          }}
        >
          .
        </button>
        <button
          id="0"
          className="btn"
          onClick={(e) => {
            changeScreen(e.target.id);
          }}
        >
          0
        </button>
        <button
          id="="
          className="btn"
          onClick={() => {
            setExpression(eval(expression).toString());
          }}
        >
          =
        </button>
        <button
          id="/"
          className="btn"
          onClick={(e) => {
            if (!operations.includes(expression[expression.length - 1]))
              changeScreen(e.target.id);
          }}
        >
          /
        </button>
      </div>
    </div>
  );
}
