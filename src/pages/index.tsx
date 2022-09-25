import type { NextPage } from 'next';
import styled from 'styled-components';

import Header from '../components/Header';
import NoSsrWrapper from '../components/NoSsrWrapper';
import { MainPageDesktop, MainPageLaptop, MainPageMobile, MainPageTablet } from '../components/MainPage';

import Device from '../constants/device';
import { useDeviceContext } from '../context/device';

interface HomeContainerProps {
  device: Device | undefined;
}

const HomeContainer = styled.main`
  padding: ${(props: HomeContainerProps) => {
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

const Home: NextPage = () => {
  const device = useDeviceContext();

  const renderPage = () => {
    switch (device) {
      case Device.DESKTOP: {
        return <MainPageDesktop />;
      }
      case Device.LAPTOP: {
        return <MainPageLaptop />;
      }
      case Device.TABLET: {
        return <MainPageTablet />;
      }
      case Device.MOBILE: {
        return <MainPageMobile />;
      }
      default: {
        return <MainPageMobile />;
      }
    }
  };

  return (
    <NoSsrWrapper>
      <HomeContainer device={device}>
        <Header device={device} />
        {renderPage()}
      </HomeContainer>
    </NoSsrWrapper>
  );
};

export default Home;
