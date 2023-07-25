import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//     border-radius: 0px;
//   }
//   to {
//     transform: rotate(360deg);
//     border-radius: 100px;
//   }
// `;

const rotate2 = keyframes`
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

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  animation: ${rotate2} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  // styled-component 내부의 태그에도 css 적용 가능
  span {
    font-size: 36px;
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
    // & 는 span 호출과 동일
  }
`;

function Animations() {
  return (
    <Wrapper>
      <Box>
        <span>Hello</span>
      </Box>
    </Wrapper>
  );
}

export default Animations;
