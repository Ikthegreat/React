import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: yellow;
  border: 0;
  border-radius: 15px;
`;

const forCheck = () => {
  console.log("클릭했습니다");
};

function App() {
  return (
    <Father>
      <Box color="teal" />
      <Box color="blue" />
      <Circle color="orange" />
      <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
      <Btn onClick={forCheck}>버튼입니다</Btn>
      <Btn as="a" href="/">
        버튼
      </Btn>
    </Father>
  );
}

export default App;
