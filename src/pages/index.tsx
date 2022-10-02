import type { NextPage } from 'next';
import styled from 'styled-components';

import Header from '../components/Header';
import NoSsrWrapper from '../components/NoSsrWrapper';

import Device from '../constants/device';
import { useDeviceContext } from '../context/device';
import MainPageTitle from '../components/MainPageTitle';
import Marginer from '../components/Marginer';
import MainPageDescription from '../components/MainPageDescription';
import MainPageCreativeAreas from '../components/MainPageCreativeAreas';
import MainPageSkills from '../components/MainPageSkills';

interface DeviceProps {
  device: Device | undefined;
}

const HorizontalPadding = styled.div`
  padding: ${(props: DeviceProps) => {
    switch (props.device) {
      case Device.DESKTOP: {
        return '0 6.25%';
      }
      case Device.LAPTOP: {
        return '0 4%';
      }
      case Device.TABLET || Device.MOBILE: {
        return '0 3.125%';
      }
      default: {
        return '0 3.125%';
      }
    }
  }};
`;

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

  return (
    <NoSsrWrapper>
      <HorizontalPadding device={device}>
        <Header />
        <Margin>
          {((device === Device.DESKTOP || device === Device.LAPTOP) && <Marginer margin={30} />) ||
            (device === Device.TABLET && <Marginer margin={7} />)}
        </Margin>

        <HomeContainer device={device}>
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

          <MainPageSkills />

          
        </HomeContainer>
      </HorizontalPadding>
    </NoSsrWrapper>
  );
};

export default Home;
