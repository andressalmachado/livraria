import styled from "styled-components";

const Input = styled.input`
  background: #fff;
  border: 1px solid #000;
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: #000;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #000;
    font-size: 16px;
  }
`;

export default Input;
