import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(() => count + 1);
  };
  const handleDecrement = () => {
    setCount(() => count - 1);
  };
  const handleChange = (e) => setCount(Number(e.target.value));
  return (
    <div>
      <h1>{count}</h1>
      <input type="number" onChange={handleChange} />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
