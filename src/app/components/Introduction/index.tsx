import React from "react";
import { Button } from "../Button";
import {
  FirstParagraph,
  ImageContainer,
  Image,
  InfoContainer,
  IntroductionContainer,
  SecondParagraph,
  SocialNetworksContainer,
} from "./styles";

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <ImageContainer>
        <Image src={"/images/main_photo.jpg"} />
      </ImageContainer>

      <InfoContainer>
        <FirstParagraph>
          It’s my portfolio! I am a designer from Ukraine. I have been working in digital for over 2 years. I specialize
          in creating websites.
        </FirstParagraph>

        <SecondParagraph>
          Dynamic and motivated professional with a proven record of generating and building relationships, managing
          projects from concept to completion.
        </SecondParagraph>

        <SocialNetworksContainer>
          <Button text="instagram" href="https://www.instagram.com/alina.llbarannikova/?hl=en" />
          <Button text="facebook" href="https://www.facebook.com/alinka.barannikova" />
          <Button text="behance" href="https://www.behance.net/alinallbarannikova/moodboards" />
        </SocialNetworksContainer>
      </InfoContainer>
    </IntroductionContainer>
  );
};
