import { useState } from "react";
import "../css/XO.css";
import ThemeContext from "../Contexts/ThemeContext";
import { useContext } from "react";

const winningCombinations = [
  ["00", "01", "02"],
  ["10", "11", "12"],
  ["20", "21", "22"],
  ["00", "10", "20"],
  ["01", "11", "21"],
  ["02", "12", "22"],
  ["00", "11", "22"],
  ["02", "11", "20"],
];

const Game = () => {
  const [XO, setXO] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [winningPlayer, setWinningPlayer] = useState("");

  const theme = useContext(ThemeContext);

  const handleOnClick = (i, j) => {
    let xoCopy = [...XO];
    if (winningPlayer === "") {
      if (!xoCopy[i][j]) {
        if (isFirstPlayer) {
          xoCopy[i][j] = "X";
        } else {
          xoCopy[i][j] = "O";
        }

        setXO(xoCopy);
        setIsFirstPlayer(!isFirstPlayer);
      }
    }

    const winner = whoWon();

    if (winner !== null) {
      setWinningPlayer(winner + " is a winner");
    }
  };

  const whoWon = () => {
    let winningPlayer = null;

    winningCombinations.forEach((wc) => {
      let lineCombination = [];
      wc.forEach((sqr) => {
        lineCombination.push(XO[sqr[0]][sqr[1]]);
      });
      if (
        lineCombination[0] !== null &&
        lineCombination[0] === lineCombination[1] &&
        lineCombination[0] === lineCombination[2]
      ) {
        winningPlayer = lineCombination[0];
      }
    });
    return winningPlayer;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme ? "rgb(17,17,17)" : "white",
      }}
    >
      <h1 style={{ color: theme ? "white" : "rgb(17,17,17)" }}>
        {winningPlayer}
      </h1>
      {XO.map((row, i) => {
        return (
          <div key={row.toString() + i.toString()} className="row">
            {row.map((square, j) => {
              return (
                <div
                  key={square + j.toString()}
                  id={i.toString() + j.toString()}
                  onClick={() => handleOnClick(i, j)}
                  className="square"
                  style={{
                    border: `1px solid ${theme ? "white" : "rgb(17,17,17)"}`,
                    color: theme ? "white" : "rgb(17,17,17)",
                  }}
                >
                  {square}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
