import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: red;
  border-width: 0.5rem;
  border-style: solid;
  padding: 1rem;
  margin: 1rem;
`;

interface inputInterface {
  onDataChange: (newData: string) => void;
}

const Input: React.FC<inputInterface> = ({ onDataChange }) => {
  const [inputData, setInputData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    onDataChange(inputData);
  };

  return (
    <Container>
      <h2>Input</h2>
      <input
        type="text"
        value={inputData}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={handleClick}>Send Data</button>
    </Container>
  );
};

export default Input;
