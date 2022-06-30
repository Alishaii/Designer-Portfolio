import React from "react";
import { Separator } from "../../../../components/Separator";
import { VerticalMarginer } from "../../../../components/VerticalMarginer";
import { Title } from "../styles";
import {
  MinimalPageContainer,
  PgeLocation,
  Date,
  LocationAndDateContainer,
  Description,
  FirstSection,
  Image,
  ImageContainer,
  ImageWithPadding,
  SecondSection,
  ThirdSection,
  Cards,
  HelveticaText,
} from "./styles";

export const MinimalPage = () => {
  return (
    <MinimalPageContainer>
      <VerticalMarginer marginInPx={92} />
      <Title>Minimal</Title>

      <VerticalMarginer marginInPx={40} />
      <Separator horizontalMarginInPercent={4} />

      <VerticalMarginer marginInPx={10} />
      <LocationAndDateContainer>
        <PgeLocation>
          Landing page / <span> minimal</span>
        </PgeLocation>
        <Date>2021</Date>
      </LocationAndDateContainer>

      <VerticalMarginer marginInPx={20} />
      <FirstSection>
        <Description>
          One of the most revolutionary hookahs ever made. The modern minimalistic design and non-standard forms of the
          hookah make it truly unique.
        </Description>
        <ImageContainer>
          <Image src={"/images/ProjectImages/Minimal/image1.jpg"} />
        </ImageContainer>
      </FirstSection>

      <VerticalMarginer marginInPx={160} />
      <Image src={"/images/ProjectImages/Minimal/image2.jpg"} />

      <VerticalMarginer marginInPx={160} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image3.jpg"} />

      <VerticalMarginer marginInPx={160} />
      <SecondSection>
        <ImageContainer>
          <Image src={"/images/ProjectImages/Minimal/image4.jpg"} />
        </ImageContainer>
        <ImageContainer>
          <Image src={"/images/ProjectImages/Minimal/image5.jpg"} />
        </ImageContainer>
      </SecondSection>

      <VerticalMarginer marginInPx={160} />
      <ThirdSection>
        <Cards>
          <Image src={"/images/ProjectImages/Minimal/image8.jpg"} />
          <Image src={"/images/ProjectImages/Minimal/image7.jpg"} />
        </Cards>

        <ImageContainer>
          <Image src={"/images/ProjectImages/Minimal/image6.jpg"} />
        </ImageContainer>
      </ThirdSection>

      <VerticalMarginer marginInPx={160} />
      <HelveticaText>
        Our apartments combine the love for wood, advanced technology, precise design and clean visual style.
      </HelveticaText>

      <VerticalMarginer marginInPx={160} />
      <Image src={"/images/ProjectImages/Minimal/image9.jpg"} />

      <VerticalMarginer marginInPx={160} />
      <ImageWithPadding src={"/images/ProjectImages/Minimal/image10.jpg"} />
    </MinimalPageContainer>
  );
};
