import React from 'react';
import styled from 'styled-components';
import { creativeAreas } from '../../constants/MainPage/creativeAreas';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import MainPageSectionTitle from '../MainPageSectionTitle';

const MainPageCreativeAreasContainer = styled.div`
  grid-column: 1 / span 3;

  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const Title = styled.div`
  grid-column: 1 / span 2;

  @media only screen and (min-width: 1000px) {
    grid-column: 1 / span 1;
  }
`;

const CreativeAreas = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 640px) {
  }

  @media only screen and (min-width: 1000px) {
    grid-column: span 2;
  }
`;

const CreativeArea = styled.p`
  display: flex;
  align-items: center;
  height: 80px;
  border-top: 1px solid black;
  font-family: Plain Light;
  font-size: 20px;

  @media only screen and (max-width: 639px) {
    height: 70px;
  }
`;

const Interior = (
  <>
    <Title>
      <MainPageSectionTitle>
        CREATIVE <br /> AREAS
      </MainPageSectionTitle>
    </Title>
    <CreativeAreas>
      {creativeAreas.map((creativeArea, index) => (
        <CreativeArea key={index}>{creativeArea}</CreativeArea>
      ))}
    </CreativeAreas>
  </>
);

const DesktopView = <>{Interior}</>;
const LaptopView = <>{Interior}</>;
const TabletView = <>{Interior}</>;
const MobileView = <MainPageCreativeAreasContainer>{Interior}</MainPageCreativeAreasContainer>;

const MainPageCreativeAreas = () => {
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

export default MainPageCreativeAreas;
