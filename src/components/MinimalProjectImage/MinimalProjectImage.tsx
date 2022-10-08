import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import MinimalProjectImageDesktop from './MinimalProjectImageDesktop';
import MinimalProjectImageLaptop from './MinimalProjectImageLaptop';
import MinimalProjectImageMobile from './MinimalProjectImageMobile';
import MinimalProjectImageTablet from './MinimalProjectImageTablet';

const MinimalProjectImage = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <MinimalProjectImageDesktop />;
    }
    case Device.LAPTOP: {
      return <MinimalProjectImageLaptop />;
    }
    case Device.TABLET: {
      return <MinimalProjectImageTablet />;
    }
    case Device.MOBILE: {
      return <MinimalProjectImageMobile />;
    }
    default: {
      return <MinimalProjectImageMobile />;
    }
  }
};

export default MinimalProjectImage;
