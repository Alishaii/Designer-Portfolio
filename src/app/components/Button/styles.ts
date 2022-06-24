import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
  narrow?: boolean;
}

export const ButtonContainer = styled.button`
  ${tw`border-2 border-white text-white hover:border-[#89F856] hover:bg-[#89F856] hover:text-black`}

  border-radius: 30px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  transition: all ease 0.4s;

  padding: ${(props: ButtonProps) => (props.narrow ? "0px 7px 4px 10px" : "6px 31px 7px 31px")};
`;

export const Link = styled.a`
  @media (max-width: 995px) {
    &:nth-child(1) {
      padding-left: 40%;
    }

    &:nth-child(3) {
      align-self: end;
    }
  }
`;
