import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Button from '../Button';
import Marginer from '../Marginer';

import { useDeviceContext } from '../../context/device';

import Device from '../../constants/device';
import * as mainPageDescription from '../../constants/MainPage/description';

import photo from '../../../public/images/MainPage/photo.jpg';

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
  
  @media only screen and (min-width: 1600px) {
    padding-right: 18%;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
  white-space: pre-line;
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
      <Image alt="" src={photo} width={470} height={500} layout="responsive" placeholder="blur" />
    </ImageContainer>

    <Description>
      <Paragraph>
        {mainPageDescription.firstPart} <br />
        <br /> {mainPageDescription.secondPart} <br />
        <br /> {mainPageDescription.thirdPart} <br />
        <br />
      </Paragraph>

      <Paragraph>
        <Italic>{mainPageDescription.fourthPart}</Italic>
      </Paragraph>

      <Marginer margin={50} />

      <SocialMedia>
        <Button trueButton link="https://www.linkedin.com/in/alinallbarannikova/" text={'Linkedin'} />
        <Button trueButton link="https://t.me/alina_llbarannikova" text={'Telegram'} />
        <Resume>
          <Button
            trueButton
            link="https://drive.google.com/uc?export=download&id=1OUKc5Jw7yHHpDv6hsasZ9aPtxuIDN2te"
            text={'Resume'}
          />
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
