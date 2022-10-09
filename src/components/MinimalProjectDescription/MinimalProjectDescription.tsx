import React from 'react';
import Device from '../../constants/device';
import { useDeviceContext } from '../../context/device';
import MinimalProjectDescriptionDesktop from './MinimalProjectDescriptionDesktop';
import MinimalProjectDescriptionLaptop from './MinimalProjectDescriptionLaptop';
import MinimalProjectDescriptionMobile from './MinimalProjectDescriptionMobile';
import MinimalProjectDescriptionTablet from './MinimalProjectDescriptionTablet';

const MinimalProjectDescription = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <MinimalProjectDescriptionDesktop />;
    }
    case Device.LAPTOP: {
      return <MinimalProjectDescriptionLaptop />;
    }
    case Device.TABLET: {
      return <MinimalProjectDescriptionTablet />;
    }
    case Device.MOBILE: {
      return <MinimalProjectDescriptionMobile />;
    }
    default: {
      return <MinimalProjectDescriptionMobile />;
    }
  }
};

export default MinimalProjectDescription;
