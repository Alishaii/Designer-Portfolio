import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import MinimalProjectContentDesktop from './MinimalProjectContentDesktop';
import MinimalProjectContentLaptop from './MinimalProjectContentLaptop';

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
      return <MinimalProjectContentDesktop />;
    }
    case Device.MOBILE: {
      return <MinimalProjectContentDesktop />;
    }
    default: {
      return <MinimalProjectContentDesktop />;
    }
  }
};

export default MinimalProjectContent;
