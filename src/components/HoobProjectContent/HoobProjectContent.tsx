import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import HoobProjectContentDesktop from './HoobProjectContentDesktop';
import HoobProjectContentLaptop from './HoobProjectContentLaptop';
import HoobProjectContentTablet from './HoobProjectContentTablet';
import HoobProjectContentMobile from './HoobProjectMobile';

const HoobProjectContent = () => {
  const device = useDeviceContext();
  switch (device) {
    case Device.DESKTOP: {
      return <HoobProjectContentDesktop />;
    }
    case Device.LAPTOP: {
      return <HoobProjectContentLaptop />;
    }
    case Device.TABLET: {
      return <HoobProjectContentTablet />;
    }
    case Device.MOBILE: {
      return <HoobProjectContentMobile />;
    }
    default: {
      return <HoobProjectContentMobile />;
    }
  }
};

export default HoobProjectContent;
