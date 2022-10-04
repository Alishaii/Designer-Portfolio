import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const ButtonContainer = styled.div`
  padding: 4px 16px 8px 16px;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  line-height: 120%;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

export default Button;
