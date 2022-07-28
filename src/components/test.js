import React, { useState } from "react";

export default function Test() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
