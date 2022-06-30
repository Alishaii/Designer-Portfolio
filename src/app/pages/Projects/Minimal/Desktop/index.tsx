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
    </MinimalPageContainer>
  );
};
