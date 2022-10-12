import React from 'react';

import MainPageProjectsDesktop from './MainPageProjectsDesktop';
import MainPageProjectsTablet from './MainPageProjectsTablet';

import Device from '../../constants/device';

import { useDeviceContext } from '../../context/device';

const MainPageProjects = () => {
  const device = useDeviceContext();

  switch (device) {
    case Device.DESKTOP: {
      return <MainPageProjectsDesktop />;
    }
    case Device.LAPTOP: {
      return <MainPageProjectsDesktop />;
    }
    case Device.TABLET: {
      return <MainPageProjectsTablet />;
    }
    case Device.MOBILE: {
      return <MainPageProjectsTablet />;
    }
    default: {
      return <MainPageProjectsTablet />;
    }
  }
};

export default MainPageProjects;
