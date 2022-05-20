import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
  narrow?: boolean;
}

export const ButtonContainer = styled.button`
  ${tw`border-2 border-white text-white hover:border-[#89F856] hover:bg-[#89F856] hover:text-black`}

  font-family: Mudkty;
  border-radius: 30px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;

  padding: ${(props: ButtonProps) =>
    props.narrow ? "0px 7px 4px 10px" : "6px 31px 7px 31px"};
`;

export const Link = styled.a``;
