import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, maxLength: 3 })`
  background-color: tomato;
`;

function Attrs() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default Attrs;
