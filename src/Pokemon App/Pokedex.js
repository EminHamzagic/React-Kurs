import { display } from "@mui/system";
import * as React from "react";
import { useState } from "react";

export default function Pokedex() {
  const [search, setSearch] = useState("");
  const [pkm, setPkm] = useState("");

  const getData = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        console.log(data.id);
        setPkm(data.sprites.front_default);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={pkm} alt="pkm" />
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        type="textbox"
      />
      <button
        onClick={() => {
          getData(search);
        }}
      >
        Search
      </button>
    </div>
  );
}
