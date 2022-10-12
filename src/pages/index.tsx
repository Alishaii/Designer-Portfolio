import type { NextPage } from 'next';
import styled from 'styled-components';

import Device from '../constants/device';
import { useDeviceContext } from '../context/device';
import MainPageTitle from '../components/MainPageTitle';
import Marginer from '../components/Marginer';
import MainPageDescription from '../components/MainPageDescription';
import MainPageCreativeAreas from '../components/MainPageCreativeAreas';
import MainPageSkills from '../components/MainPageSkills';
import MainPageProjects from '../components/MainPageProjects';
import { useEffect } from 'react';

interface DeviceProps {
  device: Device | undefined;
}

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: ${(props: DeviceProps) => {
    switch (props.device) {
      case Device.DESKTOP: {
        return '28fr 34fr 38fr';
      }
      case Device.LAPTOP: {
        return '40fr 28fr 32fr';
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

const Home: NextPage = () => {
  const device = useDeviceContext();

  useEffect(() => {
    if (window.location.href.endsWith('#projects')) {
      document.getElementById('projects')?.scrollIntoView();
    }
  }, []);

  return (
    <HomeContainer device={device}>
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={30} />) ||
          (device === Device.LAPTOP && <Marginer margin={30} />) ||
          (device === Device.TABLET && <Marginer margin={7} />) ||
          (device === Device.MOBILE && <Marginer margin={0} />)}
      </Margin>

      <MainPageTitle />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={80} />) ||
          (device === Device.LAPTOP && <Marginer margin={60} />) ||
          (device === Device.TABLET && <Marginer margin={50} />) ||
          (device === Device.MOBILE && <Marginer margin={30} />)}
      </Margin>

      <MainPageDescription />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={118} />) ||
          (device === Device.LAPTOP && <Marginer margin={103} />) ||
          (device === Device.TABLET && <Marginer margin={80} />) ||
          (device === Device.MOBILE && <Marginer margin={80} />)}
      </Margin>

      <MainPageCreativeAreas />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={160} />) ||
          (device === Device.LAPTOP && <Marginer margin={114} />) ||
          (device === Device.TABLET && <Marginer margin={120} />) ||
          (device === Device.MOBILE && <Marginer margin={80} />)}
      </Margin>

      <MainPageProjects />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={140} />) ||
          (device === Device.LAPTOP && <Marginer margin={140} />) ||
          (device === Device.TABLET && <Marginer margin={100} />) ||
          (device === Device.MOBILE && <Marginer margin={80} />)}
      </Margin>

      <MainPageSkills />
      <Margin>
        {(device === Device.DESKTOP && <Marginer margin={140} />) ||
          (device === Device.LAPTOP && <Marginer margin={140} />) ||
          (device === Device.TABLET && <Marginer margin={120} />) ||
          (device === Device.MOBILE && <Marginer margin={80} />)}
      </Margin>
    </HomeContainer>
  );
};

export default Home;
