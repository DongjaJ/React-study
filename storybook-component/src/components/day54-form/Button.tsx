import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: black;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;
