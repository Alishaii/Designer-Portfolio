import styled from "styled-components/macro";
import tw from "twin.macro";

export const IntroductionContainer = styled.div`
  ${tw`py-[60px] px-[10px] md:px-0`}

  display: flex;
  justify-content: center;
  column-gap: 60px;
  row-gap: 40px;
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
  color: white;
  font-size: 16px;
  font-weight: 200;

  padding-bottom: 20px;
`;

export const SecondParagraph = styled.p`
  ${tw`pb-[50px] sm:pb-[75px] md:pb-[100px]`}

  color: white;
  font-size: 16px;
  font-weight: 200;
`;

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 995px) {
    flex-direction: column;

    &:nth-child(1) {
      color: red;
    }
  }
`;
