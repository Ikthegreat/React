import { useState, useEffect } from "react";

function Effect() {
  const indicate = () => console.log(number1, number2);

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(indicate);

  return (
    <div>
      <button onClick={() => setNumber1(number1 + 1)}>{number1}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
}

export default Effect;
