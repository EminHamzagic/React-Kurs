import { useState, useEffect } from "react";
import "../css/hangman.css";

export default function Hangman() {
  const [tries, setTries] = useState(6);
  const [word, setWord] = useState([]);
  const [guessWord, setGuessWord] = useState([]);
  const [resetVal, setResetVal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

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
    setTries(6);
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
    <div className="hangmanContainer">
      <div className="infoAndInput">
        <input
          disabled={isDisabled}
          onKeyDown={checkChar}
          maxLength={1}
          type="text"
        ></input>
        <h1>Number of tries left: {tries}</h1>
      </div>
      <div className="wordCont">
        {guessWord.map((char, index) => (
          <p key={char + index.toString()}>{char}</p>
        ))}
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setIsDisabled(false);
          setResetVal(!resetVal);
        }}
      >
        Reset
      </button>
    </div>
  );
}
