import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Text = styled.span`
  font-size: 36px;
  // & 는 span 호출과 동일
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  animation: ${rotate} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Text} {
    &:hover {
      font-size: 100px;
    }
  }

  // styled-component 내부의 태그에도 css 적용 가능
`;

function PseudoSelector() {
  return (
    <Wrapper>
      <Box>
        <Text>Hello</Text>
      </Box>
    </Wrapper>
  );
}

export default PseudoSelector;
