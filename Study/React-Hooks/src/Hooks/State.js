import { useState } from "react";

function State() {
  const [item, setItem] = useState(1);
  const increaseItem = () => setItem(item + 1);
  const decreaseItem = () => setItem(item - 1);
  return (
    <div>
      <h1>{item}</h1>
      <button onClick={increaseItem}>Increment</button>
      <button onClick={decreaseItem}>Decrement</button>
    </div>
  );
}

export default State;
