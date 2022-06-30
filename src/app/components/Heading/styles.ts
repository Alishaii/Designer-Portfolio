import styled from "styled-components/macro";
import tw from "twin.macro";

export const HeadingContainer = styled.div`
  ${tw`px-[4%] py-[40px] sm:py-[60px] md:py-[80px]`}
`;

export const HeadingText = styled.div`
  ${tw`text-[40px] sm:text-[60px] md:text-[80px]`}

  color: white;
  text-indent: 10%;
  font-style: italic;
  font-weight: 200;
`;

export const Name = styled.span`
  color: #89f856;
`;

export const Br = styled.br``;
