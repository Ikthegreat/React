import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

function Form() {
  return (
    <header>
      <Wrapper>
        <p>테마 색 확인</p>
      </Wrapper>
    </header>
  );
}

export default Form;
