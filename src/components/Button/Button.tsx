import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const ButtonContainer = styled.div`
  padding: 3px 16px 8px 16px;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

export default Button;
