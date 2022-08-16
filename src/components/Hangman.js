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
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f94281bc97msh77eceec8fe37898p122970jsn084ed3286cef",
        "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
      },
    };
    var respone = await fetch(
      "https://random-words5.p.rapidapi.com/getRandom",
      options
    )
      //   .then((response) => response.json())
      .then((response) => console.log(response));
    // console.log(respone);
    // return respone;
  }

  useEffect(() => {
    getWord();
  });

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
