import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import MinimalProjectContentDesktop from './MinimalProjectContentDesktop';
import MinimalProjectContentLaptop from './MinimalProjectContentLaptop';
import MinimalProjectContentTablet from './MinimalProjectContentTablet';
import MinimalProjectContentMobile from './MinimalProjectMobile';

const MinimalProjectContent = () => {
  const device = useDeviceContext();
  switch (device) {
    case Device.DESKTOP: {
      return <MinimalProjectContentDesktop />;
    }
    case Device.LAPTOP: {
      return <MinimalProjectContentLaptop />;
    }
    case Device.TABLET: {
      return <MinimalProjectContentTablet />;
    }
    case Device.MOBILE: {
      return <MinimalProjectContentMobile />;
    }
    default: {
      return <MinimalProjectContentMobile />;
    }
  }
};

export default MinimalProjectContent;
