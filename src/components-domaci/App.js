import SearchInput from "./searchInput";
import { useState } from "react";

export default function App() {
  var [text, setText] = useState("HE");
  const getInputText = (input) => {
    setText((prev) => {
      console.log(prev);
      return input;
    });
  };

  return (
    <div>
      <SearchInput getInput={getInputText} />
      <h1>{text}</h1>
    </div>
  );
}
