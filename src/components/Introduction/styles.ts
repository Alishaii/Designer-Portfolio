import styled from "styled-components";
import tw from "twin.macro";

export const IntroductionContainer = styled.div`
  ${tw`py-[60px] px-[30px] md:px-0`}

  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;

`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 100%;
  max-height: 522px;
  height: auto;
`;

export const InfoContainer = styled.div`
  max-width: 448px;
`;

export const FirstParagraph = styled.p`
  font-family: Mudkty;
  color: white;
  font-size: 16px;
  font-weight: 200;

  padding-bottom: 20px;
`;

export const SecondParagraph = styled.p`
  ${tw`pb-[50px] sm:pb-[75px] md:pb-[100px]`}
  
  font-family: Mudkty;
  color: white;
  font-size: 16px;
  font-weight: 200;
`;

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;
