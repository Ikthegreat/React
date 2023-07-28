import React from "react";
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

interface outputInterface {
  data: string;
}

const Output: React.FC<outputInterface> = ({ data }) => {
  return (
    <Container>
      <h2>Output</h2>
      <p>State Data: {data}</p>
    </Container>
  );
};

export default Output;
