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
  SectionFour,
  SectionFourFirstImage,
  SectionFourSecondImage,
  SectionSevenFirstImage,
  SectionSeven,
  SectionSevenSecondImage,
  SectionSixFirstImage,
  SectionSix,
  SectionSixSecondImage,
  SectionFive,
  SectionFiveSecondImage,
  SectionFiveFirstImage,
  Footer,
  FooterToken,
  FooterPrimaryText,
} from "./styles";

export const MinimalPage = () => (
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

    <VerticalMarginer marginInPx={160} />
    <SectionFour>
      <SectionFourFirstImage>
        <Image src={"/images/ProjectImages/Minimal/image11.jpg"} />
      </SectionFourFirstImage>

      <SectionFourSecondImage>
        <Image src={"/images/ProjectImages/Minimal/image12.jpg"} />
      </SectionFourSecondImage>
    </SectionFour>

    <VerticalMarginer marginInPx={160} />
    <ImageWithPadding src={"/images/ProjectImages/Minimal/image13.jpg"} />

    <VerticalMarginer marginInPx={160} />
    <SectionFive>
      <SectionFiveFirstImage>
        <Image src={"/images/ProjectImages/Minimal/image14.jpg"} />
      </SectionFiveFirstImage>
      <SectionFiveSecondImage>
        <Image src={"/images/ProjectImages/Minimal/image15.jpg"} />
      </SectionFiveSecondImage>
    </SectionFive>

    <VerticalMarginer marginInPx={160} />
    <SectionSix>
      <SectionSixFirstImage src={"/images/ProjectImages/Minimal/image16.jpg"} />
      <SectionSixSecondImage src={"/images/ProjectImages/Minimal/image17.png"} />
    </SectionSix>

    <VerticalMarginer marginInPx={285} />
    <SectionSeven>
      <SectionSevenFirstImage>
        <Image src={"/images/ProjectImages/Minimal/image18.jpg"} />
      </SectionSevenFirstImage>
      <SectionSevenSecondImage>
        <ImageWithPadding src={"/images/ProjectImages/Minimal/image19.jpg"} />
      </SectionSevenSecondImage>
    </SectionSeven>

    <VerticalMarginer marginInPx={160} />
    <Footer>
      <FooterToken>
        <FooterPrimaryText>Minimal company</FooterPrimaryText>
        Concept
      </FooterToken>

      <FooterToken>
        <FooterPrimaryText>Year: </FooterPrimaryText>
        2021
      </FooterToken>

      <FooterToken>
        Company of architects, designers and other professionals who design our cozy apartments.
      </FooterToken>

      <FooterToken>
        Thank you <br />
        for watching)
      </FooterToken>

      <FooterToken>
        <FooterPrimaryText>Designed by: </FooterPrimaryText>
        Alina Barannykova
      </FooterToken>

      <FooterToken>
        <FooterPrimaryText>Credits: </FooterPrimaryText>
        Minimal company
      </FooterToken>
    </Footer>
  </MinimalPageContainer>
);
