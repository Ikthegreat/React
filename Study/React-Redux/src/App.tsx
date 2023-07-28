import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Input from "./components/input";
import Output from "./components/output";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: red;
  border-width: 1rem;
  border-style: solid;
  padding: 1rem;
`;

const Text = styled.h1`
  margin-left: 1rem;
`;

const App: React.FC = () => {
  const [data, setData] = useState<string>("");

  const handleDataChange = (newData: string) => {
    setData(newData);
  };

  return (
    <Container>
      <Input onDataChange={handleDataChange} />
      <Output data={data} />
      <Text>State Data: {data}</Text>
      <Outlet></Outlet>
    </Container>
  );
};

export default App;
