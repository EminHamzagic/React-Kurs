import { useState, useEffect } from "react";
import "../css/hangman.css";

export default function Hangman() {
  const [tires, setTries] = useState("6");
  const [word, setWord] = useState([]);

  const checkChar = (e) => {
    if (e.keyCode == 13) {
      console.log("nice");
    }
  };

  async function getWord() {
    var respone = await fetch(`https://random-words-api.vercel.app/word`);
    var data = await respone.json();
    console.log(data.word);
    return data;
  }

  useEffect(() => {
    getWord().then((data) => console.log(data.word));
  }, []);

  return (
    <div className="container">
      <div className="infoAndInput">
        <input onKeyDown={checkChar} maxLength={1} type="text"></input>
        <h1>Number of tries left: {tires}</h1>
      </div>
      {/* {word.map((word) => (
        <p>{word}</p>
      ))} */}
    </div>
  );
}
