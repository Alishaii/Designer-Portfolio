import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import ProjectMainImage from '../../components/ProjectMainImage';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';

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
      <ProjectMainImage projectName={'Hoob'} />
    </HoobPageContainer>
  );
};

export default Hoob;
