import { useState, useEffect } from "react";
import "../css/hangman.css";

export default function Hangman() {
  const [tries, setTries] = useState(6);
  const [word, setWord] = useState([]);
  const [guessWord, setGuessWord] = useState([]);

  const checkChar = (e) => {
    if (e.keyCode == 13) {
      var currentChar = e.target.value;
      setGuessWord((prev) => {
        return prev.map((char, index) => {
          if (currentChar.toLowerCase() === word[index].toLowerCase()) {
            return word[index];
          } else {
            return char;
          }
        });
      });
      e.target.value = "";
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="container">
      <div className="infoAndInput">
        <input onKeyDown={checkChar} maxLength={1} type="text"></input>
        <h1>Number of tries left: {tries}</h1>
      </div>
      <div className="wordCont">
        {guessWord.map((char, index) => (
          <p key={char + index.toString()}>{char}</p>
        ))}
      </div>
      <button
        onClick={() => {
          console.log(word);
          console.log(guessWord);
        }}
      >
        Click
      </button>
    </div>
  );
}
