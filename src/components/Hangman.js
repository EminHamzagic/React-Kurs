import { useState, useEffect } from "react";
import "../css/hangman.css";
import ThemeContext from "../Contexts/ThemeContext";
import { useContext } from "react";

export default function Hangman() {
  const [tries, setTries] = useState(10);
  const [word, setWord] = useState([]);
  const [guessWord, setGuessWord] = useState([]);
  const [resetVal, setResetVal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const theme = useContext(ThemeContext);

  const checkChar = (e) => {
    if (e.keyCode == 13) {
      var currentChar = e.target.value;
      if (
        !word.includes(currentChar.toLowerCase()) &&
        !word.includes(currentChar.toUpperCase())
      ) {
        setTries(tries - 1);
      }
      setGuessWord((prev) => {
        return prev.map((char, index) => {
          if (currentChar.toLowerCase() === word[index].toLowerCase()) {
            return word[index];
          } else {
            if (tries === 1) setIsDisabled(true);
            return char;
          }
        });
      });
      e.target.value = "";
    }
  };

  useEffect(() => {
    setTries(10);
    fetch(`https://random-words-api.vercel.app/word`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].word.split(""));
        setGuessWord(
          data[0].word.split("").map(() => {
            return "_\xa0";
          })
        );
      });
  }, [resetVal]);

  return (
    <div
      style={{ backgroundColor: theme ? "rgb(17, 17, 17)" : "white" }}
      className="hangmanContainer"
    >
      <div className="infoAndInput">
        <input
          style={{
            color: theme ? "white" : "rgb(17, 17, 17)",
            backgroundColor: theme ? "rgb(17, 17, 17)" : "white",
            borderColor: theme ? "white" : "rgb(17, 17, 17)",
          }}
          disabled={isDisabled}
          onKeyDown={checkChar}
          maxLength={1}
          type="text"
        ></input>
        <h1 style={{ color: theme ? "white" : "rgb(17, 17, 17)" }}>
          Number of tries left: {tries}
        </h1>
      </div>
      <div className="wordCont">
        {guessWord.map((char, index) => (
          <p
            style={{ color: theme ? "white" : "rgb(17, 17, 17)" }}
            key={char + index.toString()}
          >
            {char}
          </p>
        ))}
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          console.log(word);
          setIsDisabled(false);
          setResetVal(!resetVal);
        }}
      >
        Reset
      </button>
    </div>
  );
}
