import { useState } from "react";

export default function SearchInput(props) {
  const [text, setText] = useState("Submit");
  return (
    <div>
      <input
        onChange={(el) => {
          setText(el.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          props.getInput(text);
        }}
      >
        Submit
      </button>
    </div>
  );
}
