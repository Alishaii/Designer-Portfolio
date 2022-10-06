import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

interface ButtonProps {
  trueButton?: boolean;
  link?: string;
  text: string;
}

interface ButtonContainerPropos {
  trueButton?: boolean;
}

const ButtonContainer = styled.div`
  padding: 4px 16px 8px 16px;
  border: 1px solid black;
  border-radius: 30px;
  cursor: ${(props: ButtonContainerPropos) => (props.trueButton ? 'pointer' : 'default')};
  font-size: 14px;
  line-height: 120%;
  transition: all 0.3s ease;

  ${(props: ButtonContainerPropos) =>
    props.trueButton
      ? `&:hover {
          color: white;
          background-color: black;
      }`
      : ''}
`;

const Button: React.FC<ButtonProps> = ({ trueButton, link, text }) => {
  return link ? (
    <Link href={link}>
      <ButtonContainer trueButton={trueButton}>{text}</ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer trueButton={trueButton}>{text}</ButtonContainer>
  );
};

export default Button;
