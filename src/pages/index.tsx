import type { NextPage } from 'next';
import { MainPageDesktop, MainPageLaptop, MainPageMobile, MainPageTablet } from '../components/MainPage';
import NoSsrWrapper from '../components/NoSsrWrapper';
import Device from '../constants/device';
import { useDeviceContext } from '../context/device';

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

  return <NoSsrWrapper>{renderPage()}</NoSsrWrapper>;
};

export default Home;
