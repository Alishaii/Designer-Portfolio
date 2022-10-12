import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import ProjectDescription from '../../components/ProjectDescription';
import ProjectMainImage from '../../components/ProjectMainImage';
import Device from '../../constants/device';
import Marginer from '../../components/Marginer';
import HoobProjectContent from '../../components/HoobProjectContent';

import { useDeviceContext } from '../../context/device';

import { hoob } from '../../constants/HoobPage/hoob';
import desktopImg from '../../../public/images/Hoob/main/desktop.jpg';
import laptopImg from '../../../public/images/Hoob/main/laptop.jpg';
import tabletImg from '../../../public/images/Hoob/main/tablet.jpg';
import mobileImg from '../../../public/images/Hoob/main/mobile.jpg';

interface DeviceProps {
  device: Device | undefined;
}

const HoobPageContainer = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: ${(props: DeviceProps) => {
    switch (props.device) {
      case Device.DESKTOP: {
        return '28fr 34fr 38fr';
      }
      case Device.LAPTOP: {
        return '40fr 13fr 47fr';
      }
      case Device.TABLET || Device.MOBILE: {
        return '31fr 24fr 45fr';
      }
      default: {
        return '33fr 33fr 33fr';
      }
    }
  }};
`;

const Margin = styled.div`
  grid-column: 1 / span 3;
`;

const Hoob: NextPage = () => {
  const device = useDeviceContext();

  return (
    <HoobPageContainer device={device}>
      <ProjectMainImage desktopImg={desktopImg} laptopImg={laptopImg} tabletImg={tabletImg} mobileImg={mobileImg} />

      <ProjectDescription projectDescription={hoob} />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={80} />) ||
          (device === Device.LAPTOP && <Marginer margin={60} />) ||
          (device === Device.TABLET && <Marginer margin={60} />) ||
          (device === Device.MOBILE && <Marginer margin={50} />)}
      </Margin>

      <HoobProjectContent />
    </HoobPageContainer>
  );
};

export default Hoob;
