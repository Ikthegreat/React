import styled from "styled-components";

interface ContainerProps {
  color: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  color: string;
  borderColor?: string;
  text?: string;
}

function Circle({ color, borderColor, text = "Default Text" }: CircleProps) {
  return (
    <Container color={color} borderColor={borderColor ?? color}>
      {text}
    </Container>
  );
}

export default Circle;
