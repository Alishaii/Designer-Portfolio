import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useDeviceContext } from '../../context/device';
import Device from '../../constants/device';
import Button from '../Button';
import Marginer from '../Marginer';

const MainPageDescriptionContainer = styled.div`
  grid-column: 1 / span 3;

  display: flex;
  justify-content: space-between;
  column-gap: 60px;

  @media only screen and (max-width: 639px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

const ImageContainer = styled.div`
  @media only screen and (min-width: 1600px) {
    grid-column: 1 / span 2;
    padding-right: 9.3%;
    padding-left: 36.5%;
  }

  @media only screen and (max-width: 999px) and (min-width: 640px) {
    grid-column: 1 / span 2;
    padding-right: 12.12%;
  }

  flex: 1;
`;

const Description = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
`;

const Italic = styled.span`
  font-family: Plain Light Italic;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Resume = styled.div`
  display: inline-flex;
`;

const PDF = styled.p`
  color: #c1c1c1;
  font-weight: 300;
  font-size: 14px;
  line-height: 110%;

  display: flex;
  align-items: center;
  margin-bottom: 3px;
  margin-left: 6px;
`;

const Interior = (
  <>
    <ImageContainer>
      <Image alt="" src="/images/MainPage/photo.png" width={470} height={500} layout="responsive" />
    </ImageContainer>

    <Description>
      <Paragraph>
        It&lsquo;s my portfolio! I am a designer from Ukraine. You can see my progress over the years of my practice
        in web design.
        <br />
        <br /> I started my career as a graphic designer, graduated from the academy and after working in this field for
        a short time, I decided to move into the field of web design. Namely UX and UI. It became interesting
        for me to learn design from the side of bissnes, psychology and marketing. <br />
        <br />
        Dynamic and motivated professional with a proven record of generating and building relationships, managing
        projects from concept to completion. <br />
        <br />
      </Paragraph>

      <Paragraph>
        <Italic>Now I&lsquo;m looking for a job in the field of ux/ui design.</Italic>
      </Paragraph>

      <Marginer margin={50} />

      <SocialMedia>
        <Button text={'Linkedin'} />
        <Button text={'Telegram'} />
        <Resume>
          <Button text={'Resume'} />
          <PDF>.pdf</PDF>
        </Resume>
      </SocialMedia>
    </Description>
  </>
);

const DesktopView = <>{Interior}</>;
const LaptopView = <MainPageDescriptionContainer>{Interior}</MainPageDescriptionContainer>;
const TabletView = <>{Interior}</>;
const MobileView = <MainPageDescriptionContainer>{Interior}</MainPageDescriptionContainer>;

const MainPageDescription = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return DesktopView;
    }
    case Device.LAPTOP: {
      return LaptopView;
    }
    case Device.TABLET: {
      return TabletView;
    }
    case Device.MOBILE: {
      return MobileView;
    }
    default: {
      return MobileView;
    }
  }
};

export default MainPageDescription;
