import { useState, useEffect } from "react";
import "../css/hangman.css";

export default function Hangman() {
  const [tries, setTries] = useState(6);
  const [word, setWord] = useState([]);

  const checkChar = (e) => {
    if (e.keyCode == 13) {
      setTries(tries - 1);
    }
  };

  useEffect(() => {
    fetch(`https://random-words-api.vercel.app/word`)
      .then((response) => response.json())
      .then((data) => setWord(data[0].word.split("")));
  }, []);

  return (
    <div className="container">
      <div className="infoAndInput">
        <input onKeyDown={checkChar} maxLength={1} type="text"></input>
        <h1>Number of tries left: {tries}</h1>
      </div>
      <div className="wordCont">
        {word.map((char, index) => (
          <p key={char + index.toString()}>_&nbsp;</p>
        ))}
      </div>
    </div>
  );
}
