import React from "react";
import { Separator } from "../../../../components/Separator";
import { VerticalMarginer } from "../../../../components/VerticalMarginer";
import { Title } from "../styles";
import {
  Image,
  ImageWithPadding,
  MinimalPageMobileContainer,
  CardContainer,
  FirstCard,
  SecondCard,
  SecondCardWrapper,
  FirstCardWrapper,
  HelveticaText,
  ImageContainer,
  FirstImage,
  FirstImageWrapper,
  SecondImage,
  SecondImageWrapper,
  Description,
  PgeLocation,
} from "./styles";

export const MinimalPageMobile = () => {
  return (
    <MinimalPageMobileContainer>
      <VerticalMarginer marginInPx={92} />
      <Title>Minimal</Title>

      <VerticalMarginer marginInPx={47} />
      <Separator horizontalMarginInPercent={4} />

      <VerticalMarginer marginInPx={10} />
      <PgeLocation>
        Landing page / <span> minimal</span>
      </PgeLocation>

      <VerticalMarginer marginInPx={20} />
      <Description>
        One of the most revolutionary hookahs ever made. The modern minimalistic design and non-standard forms of the
        hookah make it truly unique.
      </Description>

      <VerticalMarginer marginInPx={50} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image1.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <Image src={"/images/ProjectImages/Minimal/image2.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image3.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <Image src={"/images/ProjectImages/Minimal/image4.jpg"} />
      <Image src={"/images/ProjectImages/Minimal/image5.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image6.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <CardContainer>
        <FirstCardWrapper>
          <FirstCard src={"/images/ProjectImages/Minimal/image7.jpg"} />
        </FirstCardWrapper>
        <SecondCardWrapper>
          <SecondCard src={"/images/ProjectImages/Minimal/image8.jpg"} />
        </SecondCardWrapper>
      </CardContainer>

      <VerticalMarginer marginInPx={50} />
      <HelveticaText>
        Our apartments combine the love for wood, advanced technology, precise design and clean visual style.
      </HelveticaText>

      <VerticalMarginer marginInPx={50} />
      <Image src={"/images/ProjectImages/Minimal/image9.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image10.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <ImageContainer>
        <FirstImageWrapper>
          <FirstImage src={"/images/ProjectImages/Minimal/image11.jpg"} />
        </FirstImageWrapper>
        <SecondImageWrapper>
          <SecondImage src={"/images/ProjectImages/Minimal/image12.jpg"} />
        </SecondImageWrapper>
      </ImageContainer>

      <VerticalMarginer marginInPx={50} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image13.jpg"} />

      <VerticalMarginer marginInPx={50} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image14.jpg"} />
    </MinimalPageMobileContainer>
  );
};
