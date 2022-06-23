import React from "react";
import { ButtonContainer, Link } from "./styles";

interface ButtonProps {
  narrow?: boolean;
  href?: string;
  text: string;
}

export const Button = ({ narrow, href, text }: ButtonProps) => {
  return (
    <Link href={href}>
      <ButtonContainer narrow={narrow}>{text}</ButtonContainer>
    </Link>
  );
};
