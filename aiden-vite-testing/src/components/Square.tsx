import { useState } from "react";

function Square() {
  const [value, setValue] = useState("");

  function handleCick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleCick}>
      {value}
    </button>
  );
}

export default Square;
