import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
  narrow?: boolean;
}

export const NavbarContainner = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 15px;

  display: flex;
  align-items: center;
`;

export const NavbarButton = styled.button`
  ${tw`border-2 border-white text-white hover:border-[#89F856] hover:bg-[#89F856] hover:text-black`}

  border-radius: 30px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;

  padding: ${(props: ButtonProps) => (props.narrow ? "2px 10px 2px 10px" : "6px 31px 7px 31px")};
`;

export const Link = styled.a`
  &:nth-child(1) {
    padding-left: 4%;
  }

  &:nth-child(2) {
    padding-left: 20%;
  }

  &:nth-child(3) {
    padding-left: 10%;
  }
`;
